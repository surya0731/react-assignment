export const data = {
  user: {
    name: "Daniel Rogers",
  },
  orders: [
    {
      id: "4907 - 00019",
      title: "HOTEL/TECH WORK SQUAD GFR",
      dateRequested: "10 Jul 2019",
      type: "Services",
      accountCode: "5830042 - HM PAX ACCOMODATION (LABOUR)",
      status: "RT",
      dateAuthorized: "12 Jul 2019",
      authorizedBy: "Jim Darren",
      authorizedSupplier: {
        ref: "PRJ001963SRIN",
        name: "Repairs (Riding Squads / Manpower)",
        contact: {
          address: "1st Floor, Skypark, 8 Elliot Place, G3 8EP, GBR",
          phone: "+44 (0) 141 305 1300",
          email: "repairs@services.com",
        },
      },
      suppliers: [
        {
          status: "TO",
          name: "Engineering Co. Ltd",
          goods: 3459.7,
          freight: 0.0,
          total: 3459.7,
          currency: "EUR",
          baseUSD: 3811.92,
        },
        {
          status: "TO",
          name: "Fintec Co. Ltd - SPARES",
          goods: 4370.6,
          freight: 0.0,
          total: 4370.6,
          currency: "USD",
          baseUSD: 4370.6,
        },
      ],
    },
    {
      id: "5325 - 00034",
      title: "SAFETY EQUIPMENT- COMPULSORY SPARES",
      dateRequested: "04 Mar 2020",
      type: "Consumables",
      status: "TO",
    },
    {
      id: "4907 - 00038",
      title: "EM SPARES FOR INTERSTAGE FILTER UNIT",
      dateRequested: "26 Jul 2022",
      type: "Spares",
      status: "EO",
    },
    {
      id: "5325 - 00040",
      title: "FUEL.LUBE / AIR / WATER.SEWAGE SYSTEM",
      dateRequested: "10 Mar 2019",
      type: "Spares",
      status: "RT",
    },
    {
      id: "4907 - 00050",
      title: "HOBART FX-A.SEF VSP UNDERCOUNTER",
      dateRequested: "21 Nov 2019",
      type: "Spares",
      status: "RT",
    },
    {
      id: "5325 - 00051",
      title: "EXTERNAL HARD DISK",
      status: "RT",
    },
  ],
};
