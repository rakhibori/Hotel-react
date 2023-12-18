import React, {useState} from 'react'

const GroupReservations = () => {

    const [companyName, setCompanyName] = useState('')
    const [companyEmail, setCompanyEmail] = useState('')
    const [phoneNumberCompany, setPhoneNumberCompany] = useState('')
    const [roomCount, setRoomCount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [entryDate, setEntryDate] = useState('')
    const [exitDate, setExitDate] = useState('')
    const [comments, setComments] = useState('')

    const handleClearInputs = () => {
        setCompanyName('')
        setCompanyEmail('')
        setPhoneNumberCompany('')
        setRoomCount('')
        setName('')
        setEmail('')
        setMobile('')
        setEntryDate('')
        setExitDate('')
        setComments('')
    }

    const handleSendInfo = () => {
        if(companyName !== '' & companyEmail !== '' &  phoneNumberCompany !== '' &  roomCount !== ''  & name !== '' & email !== '' & mobile !== ''){
            setCompanyName('')
            setCompanyEmail('')
            setPhoneNumberCompany('')
            setRoomCount('')
            setName('')
            setEmail('')
            setMobile('')
            setEntryDate('')
            setExitDate('')
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
                <h1>رزرو های گروهی (ده نفر به بالا)</h1>
            </div>
            <div className='CooperationRatesInputBox'>
                <form>
                    <p>تکمیل فیلدهای مشخص شده با * ضروری است.</p>
                    <div>
                        <label for="companyName">اسم شرکت<span>*</span></label>
                        <input type='text' name='companyName' id='companyName' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder='اسم شرکت'/>
                    </div>

                    <div>
                        <label for="companyEmail">پست الکترونیکی شرت<span>*</span></label>
                        <input type='text' name='companyEmail' id='companyEmail' value={companyEmail} onChange={(e)=>setCompanyEmail(e.target.value)} placeholder='پست الکترونیکی شرکت'/>
                    </div>

                    <div>
                        <label for="phoneNumberCompany">شماره تلفن شرکت<span>*</span></label>
                        <input type='text' name='phoneNumberCompany' id='phoneNumberCompany' value={phoneNumberCompany} onChange={(e)=>setPhoneNumberCompany(e.target.value)} placeholder='شماره موبایل شرکت'/>
                    </div>

                    <div>
                        <label for="roomCount">تعداد اتاق های مورد نیاز<span>*</span></label>
                        <input type='text' name='roomCount' id='roomCount' value={roomCount} onChange={(e)=>setRoomCount(e.target.value)} placeholder='تعداد اتاق های مورد نیاز'/>
                    </div>

                    <div>
                        <label for="entryDate">تاریخ ورود<span>*</span></label>
                        <input type='text' name='entryDate' id='entryDate' value={entryDate} onChange={(e)=>setEntryDate(e.target.value)} placeholder='ماه ،روز، سال'/>
                    </div>

                    <div>
                        <label for="exitDate">تاریخ خروج<span>*</span></label>
                        <input type='text' name='exitDate' id='exitDate' value={exitDate} onChange={(e)=>setExitDate(e.target.value)} placeholder='ماه ،روز، سال'/>
                    </div>

                    <div>
                        <label for="name">نام شخص سازمان دهنده<span>*</span></label>
                        <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='نام شخص سامان دهنده'/>
                    </div>

                    <div>
                        <label for="email">پست الکترونیکی مستقیم<span>*</span></label>
                        <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='پست الکترونیکی مستقیم'/>
                    </div>

                    <div>
                        <label for="mobile">شماره موبایل مستقیم<span>*</span></label>
                        <input type='mobile' name='mobile' id='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='شماره موبایل مستقیم'/>
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

export default GroupReservations