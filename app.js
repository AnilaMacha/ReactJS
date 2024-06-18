import React from "react"
import ReactDOM from "react-dom/client"

/**
 * Header
 * -logo
 * -nav items
 * Body
 * -search
 * -Restaurant Container
 * --Restaurant card
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 */

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv86s5jLvuvNk7tN5cWRz-cq90TxdOeIpnEw&s"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard=(props)=>{
  const {resData}=props;
  const{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    }=resData?.info;

    const {
      deliveryTime
    }=resData?.info?.sla;
    
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
};

const resList = [
  {
    "info": {
      "id": "362618",
      "name": "The Brooklyn Creamery - Healthy Ice Cream",
      "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
      "locality": "Amberpet Circle",
      "areaName": "NARYANGUDA",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Healthy Food"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "236673",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-17 04:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-amberpet-circle-naryanguda-hyderabad-362618",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "481966",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "voqn5szg4lglqfsdhcdk",
      "locality": "SP Road",
      "areaName": "SP Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Italian"
      ],
      "avgRating": 4.4,
      "parentId": "11633",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-17 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-sp-road-hyderabad-481966",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "16158",
      "name": "Royal Tiffin Centre",
      "cloudinaryImageId": "xxvnkzmpgmbojcakxws4",
      "locality": "Hanuman Tekdi",
      "areaName": "Abids & Koti",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4,
      "parentId": "4621",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-17 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/royal-tiffin-centre-hanuman-tekdi-abids-and-koti-hyderabad-16158",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "16571",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/fb30ceca-7684-4007-8300-b6c128c06d13_16571.JPG",
      "locality": "SP Road",
      "areaName": "SP Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-24 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹700",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-sp-road-hyderabad-16571",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "481969",
      "name": "Crusto's - Gourmet Cheese Burst Pizza",
      "cloudinaryImageId": "jyirbvccynntosstphk6",
      "locality": "Sardar Patel Road",
      "areaName": "Secunderabad",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Italian"
      ],
      "avgRating": 4.4,
      "parentId": "268955",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-17 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-sardar-patel-road-secunderabad-hyderabad-481969",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "142670",
      "name": "Shah Ghouse Hotel & Restaurant",
      "cloudinaryImageId": "bk26jkkqpg55veii0aj9",
      "locality": "Santh Nirankari Satsang Bhavan",
      "areaName": "Banjara Hills",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Tandoor",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "19271",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-24 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Biryani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/shah-ghouse-hotel-and-restaurant-santh-nirankari-satsang-bhavan-banjara-hills-hyderabad-142670",
      "type": "WEBLINK"
    }
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant)=>
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        )}
      </div>
    </div>

  )
}

const AppLayout=() => {
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)