import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor() { }

  getPopularPlacesData() {
    return this.popularPlacesData;
  }

  getPlaceTypes() {
    return this.placeTypes;
  }

  getPluralName(type) {
    for (let placeType of this.placeTypes) {
      if (placeType.place_api_type === type) {
        return placeType.name;
      }
    }
    return type;
  }

  private placeTypes: any[] = [
    { 'place_api_type': 'accounting', 'name': 'Accounting', 'material_icon_name': 'money' },
    { 'place_api_type': 'airport', 'name': 'Airports', 'material_icon_name': 'flight' },
    { 'place_api_type': 'amusement_park', 'name': 'Amusement Parks', 'material_icon_name': 'face' },
    { 'place_api_type': 'aquarium', 'name': 'Aquariums', 'material_icon_name': 'water_damage' },
    { 'place_api_type': 'art_gallery', 'name': 'Art Galleries', 'material_icon_name': 'insert_photo' },
    { 'place_api_type': 'atm', 'name': 'ATMs', 'material_icon_name': 'atm' },
    { 'place_api_type': 'bakery', 'name': 'Bakeries', 'material_icon_name': 'free_breakfast' },
    { 'place_api_type': 'bank', 'name': 'Banks', 'material_icon_name': 'attach_money' },
    { 'place_api_type': 'bar', 'name': 'Bars', 'material_icon_name': 'local_bar' },
    { 'place_api_type': 'beauty_salon', 'name': 'Beauty Salons', 'material_icon_name': 'spa' },
    { 'place_api_type': 'bicycle_store', 'name': 'Bicycle Stores', 'material_icon_name': 'pedal_bike' },
    { 'place_api_type': 'book_store', 'name': 'Book Stores', 'material_icon_name': 'book' },
    { 'place_api_type': 'bowling_alley', 'name': 'Bowling Allies', 'material_icon_name': 'casino' },
    { 'place_api_type': 'bus_station', 'name': 'Bus Stations', 'material_icon_name': 'directions_bus' },
    { 'place_api_type': 'cafe', 'name': 'Cafes', 'material_icon_name': 'local_cafe' },
    { 'place_api_type': 'campground', 'name': 'Campgrounds', 'material_icon_name': 'emoji_nature' },
    { 'place_api_type': 'car_dealer', 'name': 'Car Dealers', 'material_icon_name': 'directions_car' },
    { 'place_api_type': 'car_rental', 'name': 'Car Rentals', 'material_icon_name': 'electric_car' },
    { 'place_api_type': 'car_repair', 'name': 'Car Repairs', 'material_icon_name': 'handyman' },
    { 'place_api_type': 'car_wash', 'name': 'Car Washes', 'material_icon_name': 'local_car_wash' },
    { 'place_api_type': 'casino', 'name': 'Casinos', 'material_icon_name': 'casino' },
    { 'place_api_type': 'cemetery', 'name': 'Cemeteries', 'material_icon_name': 'business' },
    { 'place_api_type': 'church', 'name': 'Churches', 'material_icon_name': 'business' },
    { 'place_api_type': 'city_hall', 'name': 'City Halls', 'material_icon_name': 'location_city' },
    { 'place_api_type': 'clothing_store', 'name': 'Clothing Stores', 'material_icon_name': 'shopping_cart' },
    { 'place_api_type': 'convenience_store', 'name': 'Convenience Stores', 'material_icon_name': 'local_convenience_store' },
    { 'place_api_type': 'courthouse', 'name': 'Courthouses', 'material_icon_name': 'gavel' },
    { 'place_api_type': 'dentist', 'name': 'Dentists', 'material_icon_name': 'medical_services' },
    { 'place_api_type': 'department_store', 'name': 'Department Stores', 'material_icon_name': 'shopping_cart' },
    { 'place_api_type': 'doctor', 'name': 'Doctors', 'material_icon_name': 'medical_services' },
    { 'place_api_type': 'drugstore', 'name': 'Drugstores', 'material_icon_name': 'local_hospital' },
    { 'place_api_type': 'electrician', 'name': 'Electricians', 'material_icon_name': 'handyman' },
    { 'place_api_type': 'electronics_store', 'name': 'Electronics Stores', 'material_icon_name': 'computer' },
    { 'place_api_type': 'embassy', 'name': 'Embassies', 'material_icon_name': 'local_police' },
    { 'place_api_type': 'fire_station', 'name': 'Fire Stations', 'material_icon_name': 'local_fire_department' },
    { 'place_api_type': 'florist', 'name': 'Florists', 'material_icon_name': 'local_florist' },
    { 'place_api_type': 'funeral_home', 'name': 'Funeral Homes', 'material_icon_name': 'home' },
    { 'place_api_type': 'furniture_store', 'name': 'Furniture Stores', 'material_icon_name': 'local_shipping' },
    { 'place_api_type': 'gas_station', 'name': 'Gas Stations', 'material_icon_name': 'local_gas_station' },
    { 'place_api_type': 'gym', 'name': 'Gyms', 'material_icon_name': 'fitness_center' },
    { 'place_api_type': 'hair_care', 'name': 'Hair Care', 'material_icon_name': 'wash' },
    { 'place_api_type': 'hardware_store', 'name': 'Hardware Stores', 'material_icon_name': 'plumbing' },
    { 'place_api_type': 'hindu_temple', 'name': 'Hindu Temples', 'material_icon_name': 'business' },
    { 'place_api_type': 'home_goods_store', 'name': 'Home Goods Stores', 'material_icon_name': 'home' },
    { 'place_api_type': 'hospital', 'name': 'Hospitals', 'material_icon_name': 'local_hospital' },
    { 'place_api_type': 'insurance_agency', 'name': 'Insurance Agencies', 'material_icon_name': 'business' },
    { 'place_api_type': 'jewelry_store', 'name': 'Jewelry Stores', 'material_icon_name': 'shopping_cart' },
    { 'place_api_type': 'laundry', 'name': 'Laundromats', 'material_icon_name': 'local_laundry_service' },
    { 'place_api_type': 'lawyer', 'name': 'Law Offices', 'material_icon_name': 'gavel' },
    { 'place_api_type': 'library', 'name': 'Libraries', 'material_icon_name': 'local_library' },
    { 'place_api_type': 'light_rail_station', 'name': 'Light Rail Stations', 'material_icon_name': 'tram' },
    { 'place_api_type': 'liquor_store', 'name': 'Liquor Stores', 'material_icon_name': 'sports_bar' },
    { 'place_api_type': 'local_government_office', 'name': 'Local Govt Offices', 'full_name': 'Local Government Offices', 'material_icon_name': 'gavel' },
    { 'place_api_type': 'locksmith', 'name': 'Locksmiths', 'material_icon_name': 'lock' },
    { 'place_api_type': 'lodging', 'name': 'Lodging', 'material_icon_name': 'night_shelter' },
    { 'place_api_type': 'meal_delivery', 'name': 'Meal Delivery', 'material_icon_name': 'fastfood' },
    { 'place_api_type': 'meal_takeaway', 'name': 'Meal Takeaway', 'material_icon_name': 'local_dining' },
    { 'place_api_type': 'mosque', 'name': 'Mosques', 'material_icon_name': 'business' },
    { 'place_api_type': 'movie_rental', 'name': 'Movie Rental', 'material_icon_name': 'movie' },
    { 'place_api_type': 'movie_theater', 'name': 'Movie Theaters', 'material_icon_name': 'local_movies' },
    { 'place_api_type': 'moving_company', 'name': 'Moving Companies', 'material_icon_name': 'local_shipping' },
    { 'place_api_type': 'museum', 'name': 'Museums', 'material_icon_name': 'museum' },
    { 'place_api_type': 'night_club', 'name': 'Night Clubs', 'material_icon_name': 'local_bar' },
    { 'place_api_type': 'painter', 'name': 'Painters', 'material_icon_name': 'format_paint' },
    { 'place_api_type': 'park', 'name': 'Parks', 'material_icon_name': 'nature_people' },
    { 'place_api_type': 'parking', 'name': 'Parking', 'material_icon_name': 'local_parking' },
    { 'place_api_type': 'pet_store', 'name': 'Pet Stores', 'material_icon_name': 'pets' },
    { 'place_api_type': 'pharmacy', 'name': 'Pharmacies', 'material_icon_name': 'local_pharmacy' },
    { 'place_api_type': 'physiotherapist', 'name': 'Physiotherapists', 'material_icon_name': 'medical_services' },
    { 'place_api_type': 'plumber', 'name': 'Plumbers', 'material_icon_name': 'plumbing' },
    { 'place_api_type': 'police', 'name': 'Police', 'material_icon_name': 'local_police' },
    { 'place_api_type': 'post_office', 'name': 'Post Offices', 'material_icon_name': 'local_post_office' },
    { 'place_api_type': 'primary_school', 'name': 'Primary Schools', 'material_icon_name': 'school' },
    { 'place_api_type': 'real_estate_agency', 'name': 'Real Estate Agencies', 'material_icon_name': 'house' },
    { 'place_api_type': 'restaurant', 'name': 'Restaurants', 'material_icon_name': 'restaurant' },
    { 'place_api_type': 'roofing_contractor', 'name': 'Roofing Contractors', 'material_icon_name': 'roofing' },
    { 'place_api_type': 'rv_park', 'name': 'RV Parking', 'material_icon_name': 'rv_hookup' },
    { 'place_api_type': 'school', 'name': 'Schools', 'material_icon_name': 'school' },
    { 'place_api_type': 'secondary_school', 'name': 'Secondary Schools', 'material_icon_name': 'science' },
    { 'place_api_type': 'shoe_store', 'name': 'Shoe Stores', 'material_icon_name': 'sports_handball' },
    { 'place_api_type': 'shopping_mall', 'name': 'Shopping Malls', 'material_icon_name': 'local_mall' },
    { 'place_api_type': 'spa', 'name': 'Spas', 'material_icon_name': 'spa' },
    { 'place_api_type': 'stadium', 'name': 'Stadiums', 'material_icon_name': 'sports_football' },
    { 'place_api_type': 'storage', 'name': 'Storage', 'material_icon_name': 'storage' },
    { 'place_api_type': 'store', 'name': 'Stores', 'material_icon_name': 'storefront' },
    { 'place_api_type': 'subway_station', 'name': 'Subway Stations', 'material_icon_name': 'subway' },
    { 'place_api_type': 'supermarket', 'name': 'Supermarkets', 'material_icon_name': 'shopping_basket' },
    { 'place_api_type': 'synagogue', 'name': 'Synagogues', 'material_icon_name': 'business' },
    { 'place_api_type': 'taxi_stand', 'name': 'Taxi Stands', 'material_icon_name': 'local_taxi' },
    { 'place_api_type': 'tourist_attraction', 'name': 'Tourist Attractions', 'material_icon_name': 'business' },
    { 'place_api_type': 'train_station', 'name': 'Train Stations', 'material_icon_name': 'train' },
    { 'place_api_type': 'transit_station', 'name': 'Transit Stations', 'material_icon_name': 'traffic' },
    { 'place_api_type': 'travel_agency', 'name': 'Travel Agencies', 'material_icon_name': 'flight_takeoff' },
    { 'place_api_type': 'university', 'name': 'Universities', 'material_icon_name': 'school' },
    { 'place_api_type': 'veterinary_care', 'name': 'Veterinary Care', 'material_icon_name': 'pets' },
    { 'place_api_type': 'zoo', 'name': 'Zoos', 'material_icon_name': 'emoji_nature' },
  ];

  private popularPlacesData: any[] = [
    {
      "name": "Stores",
      "places_api_type": "store",
      "material_icon_name": "local_grocery_store"
    },
    {
      "name": "Restaurants",
      "places_api_type": "restaurant",
      "material_icon_name": "restaurant"
    },
    {
      "name": "Doctor Offices",
      "places_api_type": "doctor",
      "material_icon_name": "medical_services"
    },
    {
      "name": "Gyms",
      "places_api_type": "gym",
      "material_icon_name": "fitness_center"
    },
    {
      "name": "Banks",
      "places_api_type": "bank",
      "material_icon_name": "attach_money"
    },
    {
      "name": "Bars",
      "places_api_type": "bar",
      "material_icon_name": "local_bar"
    },
    {
      "name": "Gas Stations",
      "places_api_type": "gas_station",
      "material_icon_name": "local_gas_station"
    },
    {
      "name": "Hospitals",
      "places_api_type": "hospital",
      "material_icon_name": "local_hospital"
    },
    {
      "name": "Laundry",
      "places_api_type": "laundry",
      "material_icon_name": "local_laundry_service"
    },
    {
      "name": "Law Offices",
      "places_api_type": "lawyer",
      "material_icon_name": "gavel"
    },
    {
      "name": "Libraries",
      "places_api_type": "library",
      "material_icon_name": "local_library"
    },
    {
      "name": "Govt Offices",
      "places_api_type": "local_government_office",
      "material_icon_name": "menu_book"
    },
    {
      "name": "Theaters",
      "places_api_type": "movie_theater",
      "material_icon_name": "local_movies"
    },
    {
      "name": "Pharmacies",
      "places_api_type": "pharmacy",
      "material_icon_name": "local_pharmacy"
    },
    {
      "name": "Shopping Malls",
      "places_api_type": "shopping_mall",
      "material_icon_name": "store_mall_directory"
    },
    {
      "name": "Spas",
      "places_api_type": "spa",
      "material_icon_name": "spa"
    },
    {
      "name": "Train Stations",
      "places_api_type": "train_station",
      "material_icon_name": "train"
    },
    {
      "name": "ATMs",
      "places_api_type": "atm",
      "material_icon_name": "local_atm"
    },
  ];
}
