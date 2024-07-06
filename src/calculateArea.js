function calculateArea(height, width) {
    
    if (typeof height != 'number' || typeof width != 'number') {
        return undefined;
    }
    
    return height * width;
}