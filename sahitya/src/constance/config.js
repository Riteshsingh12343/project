export const API_NOTIFICATION_MESSAGES ={
    loading: {
        title: 'Loading....' ,
        message: 'Data is being loading , please wait '
    },
    Success:{
        title:'Success',
        message:'Data Successfully loaded'
    },
    responseFailure: {
        title:'Error',
        message: 'An error occured while fatching response from the server. please try again '
    },
    requestFailure: {
        title:'Error',
        message: 'An error occcured while parsing request data '
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server . please check internet connectivity and try again letter '
    }
    
}


//Api service call

export const SERVICE_URLS ={
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: {url: '/login', method:'POST'},
    uploadFile: { url: 'file/upload', method: 'POST' }
}