function calculateArea(dimension1, dimension2) {

    if ( typeof dimension1 !== "number" || typeof dimension2 !== "number" ) {
      return undefined;
    }

    if (dimension1 < 0 || dimension2 < 0) {
      return "No negative values";
    }

    if (Number.isNaN(dimension1) || Number.isNaN(dimension2)) {
      return undefined;
    }
   
    return dimension1 * dimension2;

}