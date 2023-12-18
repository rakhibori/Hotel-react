export const Validate=(values) => {
    const errors = {}
    if(!values.name){
        errors.name = 'نام را وارد کنید'
    }

    if(!values.family){
        errors.family = 'نام خانوادگی را وارد کنید '
    }

    if(!values.mobile){
        errors.mobile = 'موبایل را وارد کنید '
    }

    return errors
}