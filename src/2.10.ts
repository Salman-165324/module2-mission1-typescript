{
    type AreaNumber = {

        width: number; 
        heigh: number; 
    
    }
    
    
    // lookup type
    
    type Height = AreaString["width"];
    
    type AreaString = {
    
        [key in keyof AreaNumber]: string; 
    }
    
}


{

    type AreaNumber = {

        width: number; 
        height: number; 
    
    }
    
    
    // lookup type
    
    type Height = AreaNumber["width"];
    
    type AreaString <T> = {
    
        [key in keyof T]: T[key]; 
    }
    
    const area : AreaString <{height: string, width: number}> = {
        height: '100', 
        width: 200, 
    }
    
    
}

