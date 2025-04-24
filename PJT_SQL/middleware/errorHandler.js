const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Algo deu errado!';
    
    res.status(statusCode).json({
      status: 'error',
      message
    });
  };
  
  module.exports = errorHandler;