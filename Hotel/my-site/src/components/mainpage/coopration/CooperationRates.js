import React, {useRef, useState} from 'react'

const CooperationRates = () => {
    const [companyName, setCompanyName] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [landlineNumber, setLandlineNumber] = useState('')
    const [companyEmail, setCompanyEmail] = useState('')
    const [name, setName] = useState('')
    const [jobRank, setJobRank] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nightNumber, setNightNumber] = useState('')
    const [comments, setComments] = useState('')

    const handleClearInputs = () => {
        setCompanyName('')
        setCompanyAddress('')
        setLandlineNumber('')
        setCompanyEmail('')
        setName('')
        setJobRank('')
        setEmail('')
        setPhoneNumber('')
        setNightNumber('')
        setComments('')
    }

    const handleSendInfo = () => {
        if(companyName !== '' & companyAddress !== '' & landlineNumber !== '' & companyEmail !== '' & name !== '' & jobRank !== '' & email !== '' & phoneNumber !== '' & nightNumber !== ''){
            setCompanyName('')
            setCompanyAddress('')
            setLandlineNumber('')
            setCompanyEmail('')
            setName('')
            setJobRank('')
            setEmail('')
            setPhoneNumber('')
            setNightNumber('')
            setComments('')
            alert(`کاربر محترم ${name} اطلاعات شما با موفیت ارسال شد . `)
        }else{
            alert('لطفا فیلدهای ستاره دار را پر کنید')
        }
    }
    
  return (
    
    <>
        <div className='CooperationRatesMainBox'>
            <div className='CooperationRatesTitleBox'>
                <h1>نرخ های همکاری</h1>
                <p>یکی از افتخارهای هتل آریا این است که گزینه ی مناسب همکاری با شرکت های معتبر متعددی می باشد و با بهترین نرخ ممکن از پیشنهاد همکاری شما استقبال می کند. لطفا جهت آگاهی از این نرخ ها موارد زیر را در اختیار ما قرار دهید تا پس از بررسی های لازم با شما تماس گرفته شود.</p>
            </div>
            <div className='CooperationRatesInputBox'>
                <form>
                    <p>تکمیل فیلدهای مشخص شده با * ضروری است.</p>
                    <div>
                        <label for="companyName">اسم شرکت <span>*</span></label>
                        <input type='text' name='companyName' id='companyName' value={companyName} onChange={(e)=>setCompanyName(e.target.value)}  placeholder='اسم شرکت'/>
                    </div>

                    <div>
                        <label for="companyName"> آدرس شرکت <span>*</span></label>
                        <input type='text' name='companyAddress' id='companyAddress' value={companyAddress} onChange={(e)=>setCompanyAddress(e.target.value)} placeholder='آدرس شرکت'/>
                    </div>

                    <div>
                        <label for="companyName">شماره تلفن شرکت <span>*</span></label>
                        <input type='text' name='landlineNumber' id='landlineNumber' value={landlineNumber} onChange={(e)=>setLandlineNumber(e.target.value)} placeholder='شماره تلفن شرکت'/>
                    </div>

                    <div>
                        <label for="companyName"> پست الکترونیکی شرکت <span>*</span></label>
                        <input type='text' name='companyEmail' id='companyEmail' value={companyEmail} onChange={(e)=>setCompanyEmail(e.target.value)} placeholder='پست الکترونیکی شرکت'/>
                    </div>

                    <div>
                        <label for="companyName">نام و نام خانوادگی شخص مکاتبه کننده<span>*</span></label>
                        <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='نام و نام خانوادگی شخص مکاتبه کننده'/>
                    </div>

                    <div>
                        <label for="companyName">مرتبه ی شغلی<span>*</span></label>
                        <input type='text' name='jobRank' id='jobRank' value={jobRank} onChange={(e)=>setJobRank(e.target.value)} placeholder='مرتبه ی شغلی'/>
                    </div>

                    <div>
                        <label for="companyName">پست الکترونیکی مستقیم<span>*</span></label>
                        <input type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='پست الکترونیکی مستقیم'/>
                    </div>
                    <div>
                        <label for="companyName">شماره تلفن مستقیم<span>*</span></label>
                        <input type='text' name='phoneNumber' id='phoneNumber' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='شماره تلفن مستقیم'/>
                    </div>

                    <div>
                        <label for="companyName">اتاق/شب تقریبی برای یک سال<span>*</span></label>
                        <input type='text' name='nightNumber' id='nightNumber' value={nightNumber} onChange={(e)=>setNightNumber(e.target.value)} placeholder='اتاق/شب تقریبی برای یک سال'/>
                    </div>

                    <div>
                        <label for="comments">نظرات (صد کلمه)<span>*</span></label>
                        <textarea name='comments' id='comments' value={comments} onChange={(e)=>setComments(e.target.value)} placeholder='نظرات (صد کلمه)'></textarea>
                        
                    </div>
                </form>
                <div>
                    <button onClick={handleSendInfo}>ارسال</button>
                    <button onClick={handleClearInputs}>پاکسازی</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CooperationRates
