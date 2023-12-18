import React, {useState} from 'react'

const LongStays = () => {
    const [companyName, setCompanyName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [decisionDate, setDecisionDate] = useState('')
    const [exitDate, setExitDate] = useState('')
    const [moreDetails, setMoreDetails] = useState('')

    const handleClearInputs = () => {
        setName('')
        setEmail('')
        setMobile('')
        setDecisionDate('')
        setExitDate('')
        setMoreDetails('')
    }

    const handleSendInfo = () => {
        if(companyName !== '' & name !== '' & email !== '' & mobile !== ''){
            setName('')
            setEmail('')
            setMobile('')
            setDecisionDate('')
            setExitDate('')
            setMoreDetails('')
            alert(`کاربر محترم ${name} اطلاعات شما با موفیت ارسال شد . `)
        }else{
            alert('لطفا فیلدهای ستاره دار را پر کنید')
        }
    }
  return (
    
    <>
        <div className='CooperationRatesMainBox'>
            <div className='CooperationRatesTitleBox'>
                <h1>نرخ اقامت های طولانی مدت (سی شب به بالا)</h1>
            </div>
            <div className='CooperationRatesInputBox'>
                <form>
                    <p>تکمیل فیلدهای مشخص شده با * ضروری است.</p>
                    <div>
                        <label for="companyName">نام و نام خانوادگی<span>*</span></label>
                        <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}  placeholder='نام و نام خانوادگی'/>
                    </div>

                    <div>
                        <label for="companyName">پست الکترونیکی<span>*</span></label>
                        <input type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='پست الکترونیکی'/>
                    </div>

                    <div>
                        <label for="companyName">شماره موبایل<span>*</span></label>
                        <input type='text' name='mobile' id='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='شماره موبایل'/>
                    </div>

                    <div>
                        <label for="companyName">تاریخ تصمیم گیری<span>*</span></label>
                        <input type='text' name='decisionDate' id='decisionDate' value={decisionDate} onChange={(e)=>setDecisionDate(e.target.value)} placeholder='ماه ،روز، سال'/>
                    </div>

                    <div>
                        <label for="companyName">تاریخ خروج<span>*</span></label>
                        <input type='text' name='exitDate' id='exitDate' value={exitDate} onChange={(e)=>setExitDate(e.target.value)} placeholder='ماه ،روز، سال'/>
                    </div>

                    <div>
                        <label for="companyName">نام شرکت<span>*</span></label>
                        <input type='text' name='companyName' id='companyName' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder='نام شرکت'/>
                    </div>

                    <div>
                        <label for="companyName">مواردی که باید ذکر شوند<span>*</span></label>
                        <input type='text' name='moreDetails' id='moreDetails' value={moreDetails} onChange={(e)=>setMoreDetails(e.target.value)} placeholder='توضیحات بیشتر'/>
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

export default LongStays
