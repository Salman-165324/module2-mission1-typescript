{
  //

  // interface -generic

  interface Developer<T , X =null> {
    name: string;
    computer: {
      brand: string;
      releaseYear: number;
      cpu: string;
    };
    smartwatch: T;
    bike? : X
  }

 type LgWatch = {
  brand: string;
  display: string;
  model: string;
}

  const poorDeveloper: Developer<LgWatch> = {
    name: "Salman",
    computer: {
      brand: "LG",
      releaseYear: 2013,
      cpu: "corei3",
    },

    smartwatch: {
      brand: "samsung",
      display: "older",
      model: "s23",
    },
  };


  interface AppleWatch {
    brand: string;
    model: string;
    isHeartRate: boolean;
    isFitnessTrack: boolean;
  }

  interface Yamaha{

    brand: string;
    model: string,
    cc: string
  }

  const richDeveloper: Developer<AppleWatch, Yamaha> = {
    name: "Sohan",
    computer: {
      brand: "Apple",
      releaseYear: 2018,
      cpu: "MACSuper8",
    },
    smartwatch: {
      brand: "Apple",
      model: "I15S",
      isHeartRate: true,
      isFitnessTrack: true,
    },
    bike: {
      brand: 'Yamaha', 
      model: "F13", 
      cc: '220'
    }
  };

  //
}
