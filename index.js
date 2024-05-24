import express from 'express';
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;

const generatePlaceDetailUrl = id => { 
  return `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${API_KEY}`;
}

const generateImageUrl = photo_reference => { 
  return `https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=${photo_reference}&key=${API_KEY}`;
}

const generateGoogleMapsUrl = id => { 
  return `https://maps.google.com/?q=place_id:${id}`;
}

const app = express();

app.use(express.json())

app.get('/geocode/:longitude/:latitude/:type?/:radius?', async (req, res) => {
  try {
    const photoCount = 3;
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    
    let radius = 10000;
    let type = "museum";
    
    (+req.params.type > 0) ? (radius = +req.params.type * 1000) : (type = req.params.type);
    if (req.params.radius) radius = +req.params.radius * 1000

    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&type=museum&key=${API_KEY}`;

    const response = await fetch(placesUrl);
    const result = await response.json();

    const places = [];

    // Filter places with more than 100 user ratings
    result.results.forEach(e => {
      if (e.user_ratings_total > 100) {
        places.push(e.place_id);
      }
    });

    // Create an array of fetch promises for place details
    const detailPromises = places.map(async id => {
      const detailResponse = await fetch(generatePlaceDetailUrl(id));
      const detailResult = await detailResponse.json();

      // Check if there are more than 2 photos
      if (detailResult.result.photos?.length >= photoCount) {
        let imgUrls = [];

        for (let i = 0; i < photoCount; i++) {
          imgUrls = [...imgUrls, generateImageUrl(detailResult.result.photos[i].photo_reference)]
        }

        return {
          id: detailResult.result.place_id,
          url: generateGoogleMapsUrl(detailResult.result.place_id),
          name: detailResult.result.name,
          address_component: [
            detailResult.result.address_components[2].short_name,
            detailResult.result.address_components[3].short_name,
            detailResult.result.address_components[4].short_name,
            detailResult.result.address_components[5].short_name,
          ],
          formatted_address: detailResult.result.formatted_address,
          rating: detailResult.result.rating,
          total_ratings: detailResult.result.user_ratings_total,
          location: {
            lat: detailResult.result.geometry.location.lat,
            long: detailResult.result.geometry.location.lng
          },
          photos: imgUrls
        };
      } else {
        return null; // Return null for places that do not meet the criteria
      }
    });

    // Wait for all detail fetches to complete
    const detailedPlacesResults = await Promise.all(detailPromises);

    // Filter out null results
    const detailedPlaces = detailedPlacesResults.filter(place => place !== null);

    res.json({ data: detailedPlaces });

  } catch (error) {
    console.error(error);
    res.json({ status: 'error' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on localhost:${process.env.PORT || 3000}...`)
})