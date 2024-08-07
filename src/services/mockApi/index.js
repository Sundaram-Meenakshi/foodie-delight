let restaurants = [
  {
    id: 1,
    name: "Urban Bistro",
    description: "North Indian, Chinese, Fast Food, Biryani",
    location: "Mumbai",
    image: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1675233652.jpg?fit=around|562.5:360&crop=562.5:360;*,*",
    menu: [
      { id: 1, name: "Dish A1", price: 10 },
      { id: 2, name: "Dish A2", price: 15 },
    ],
  },
  {
    id: 2,
    name: "Ice Cafe",
    description: "Cafe, Fast Food, Chinese, Beverages",
    location: "Delhi",
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg",
    menu: [
      { id: 1, name: "Dish B1", price: 12 },
      { id: 2, name: "Dish B2", price: 18 },
    ],
  },
];

export const getRestaurants = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...restaurants]);
    }, 1000);
  });
};

export const getRestaurantById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = restaurants.find((r) => r.id === parseInt(id));
      restaurant ? resolve({ ...restaurant }) : reject(new Error("Restaurant not found"));
    }, 1000);
  });
};

export const createRestaurant = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newRestaurant = { ...data, id: Date.now() };
      restaurants.push(newRestaurant);
      resolve(newRestaurant);
    }, 1000);
  });
};

export const updateRestaurant = (id, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = restaurants.findIndex((r) => r.id === parseInt(id));
      if (index !== -1) {
        restaurants[index] = { ...restaurants[index], ...data };
        resolve(restaurants[index]);
      } else {
        reject(new Error("Restaurant not found"));
      }
    }, 1000);
  });
};

export const deleteRestaurant = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = restaurants.findIndex((r) => r.id === parseInt(id));
      if (index !== -1) {
        const deletedRestaurant = restaurants.splice(index, 1);
        resolve(deletedRestaurant);
      } else {
        reject(new Error("Restaurant not found"));
      }
    }, 1000);
  });
};
