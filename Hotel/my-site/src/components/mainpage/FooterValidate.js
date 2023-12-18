export const FooterValidate=(values) => {
    const errors = {}
    if(!values.email){
        errors.email = 'ایمیل را وارد کنید'
    }else if(!values.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
        errors.email = 'قالب ایمیل نامعتبر است'
}   

    return errors
}