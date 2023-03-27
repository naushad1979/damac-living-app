const HelpData = ()=>{
    var helpCategories = [
        {
          header: "via WhatsApp",
          title: "Connect with us on WhatsApp instantly to solve your queries.",
          image: "/images/help/Group 5739.png",
          height: 50,
          width: 50,
          buttonTitle: "Connect now",
        },
        {
          header: "Support ticket",
          title:
            "Raise a support ticket and our team will get back to you within 12 hours.",
          image: "/images/help/Group 5741.png",
          height: 50,
          width: 50,
          buttonTitle: "Raise a support ticket",
        },
        {
          header: "FAQ’s",
          title: "Here are frequently asked questions. Might help you as well.",
          image: "/images/help/Group 5743.png",
          height: 50,
          width: 50,
          buttonTitle: "View FAQ’s",
        },
        {
          header: "Follow us",
          title: "Keep in touch with us on Our social channels.",
          image: "/images/help/Group 8741.png",
          height: 50,
          width: 50,
          buttonTitle: "",
        },
      ];
      return {
        helpCategories,
      };
    };

export default HelpData;