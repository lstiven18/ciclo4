exports.getProducts=(req, res, next) => {
    res.status(200).json({
        sucess: true,
        message: "En esta ruta usted verdad todos los productos"
    })
}