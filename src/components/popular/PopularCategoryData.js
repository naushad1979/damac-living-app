const PopularCategoryData = ()=>{
    var categories = [
        {
          header: "Amenities",
          title: "Book the amenities of your building in one easy hub.",  
          description: "p.dashcards__description",  
          image: "/images/popular/Mask Group 229.png",
          height: 170,
          width: 150,
          buttonTitle: "Book now"
        },
        {
          header: "Ready to move In",
          title: "Sea View Apartment", 
          description: "AV2/SD156/XN1774C is ready to move in.",      
          image: "/images/popular/Mask Group 91.png",
          height: 170,
          width: 150,
          buttonTitle: "Move in now"
        },
      ];
      return {
        categories,
      };
    };

export default PopularCategoryData;