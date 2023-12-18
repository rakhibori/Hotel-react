import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'

const ReqForResMeetingRooms = () => {
  const [titleMeeting, setTitleMeeting] = useState('')
  const [comment1, setComment1] = useState('')
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [numberOfRooms, setNumberOfRooms] = useState(0)
  const [date, setDate] = useState('')
  const [ceremonyDate, setCremonyDate] = useState('')
  const [numberOfExteraRooms, setNumberOfExteraRooms] = useState(0)
  const [largestNumber, setLargestNumber] = useState(0)
  
  
 
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [title, setTitle] = useState('')
  const [comment2, setComment2] = useState('')
  const [comment3, setComment3] = useState('')
  const [comment4, setComment4] = useState('')
  const [comment5, setComment5] = useState('')


  const handleClearInputs = () => {
      setNumberOfPeople('')
      setNumberOfRooms('')
      setCremonyDate('')
      setName('')
      setFamily('')
      setEmail('')
      setAddress('')
      setCity('')
      setProvince('')
      setCountry('')
      setPostalCode('')
      setPhone('')
      setCompany('')
      setTitle('')
  }

  const handleSendInfo = () => {
      if(numberOfPeople !== '' & numberOfRooms !== '' & ceremonyDate !== '' & name !== '' & family !== '' & email !== '' & address !== '' & city !== '' & province !== '' & country !== '' & postalCode !== '' & postalCode !== '' & phone !== '' & company !== ''){
          setNumberOfPeople('')
          setNumberOfRooms('')
          setCremonyDate('')
          setName('')
          setFamily('')
          setEmail('')
          setAddress('')
          setCity('')
          setProvince('')
          setCountry('')
          setPostalCode('')
          setPhone('')
          setCompany('')
          alert(`کاربر محترم ${name} ${family} اطلاعات شما با موفیت ارسال شد . `)
      }else{
          alert('لطفا فیلدهای ستاره دار را پر کنید')
      }
  }
  return (
    
    <>
    <Header/>
    <div className='ReqForResWedHallsMainBox'>
        <div className='ReqForResWedHallsTopMenuBox'>
            <p>درخواست رزرو سالن ها</p>
            <h2>جلسات</h2>
        </div>
        <div className='CooperationRatesTitleBox'>
            <h1>درخواست رزرو سالن ها</h1>
            <p>از اینکه هتل آریا را برای برگزاری مجالس مهم خود انتخاب کرده اید، صمیمانه سپاسگذاریم. تلاش ما بر این است که انتظارات ویژه ی شما را جامه ی عمل بپوشانیم و خاطره ای ماندگار در ذهن شما و مهمانانتان حک کنیم. پس از کامل کردن اطلاعات خواسته شده در فرم زیر، تیم هتل آریا پس از بررسی های لازم در مدت یک روز کاری با شما تماس خواهد گرفت تا مذاکرات بیشتری در زمینه ی درخواست شما صورت پذیرد.</p>
        </div>
        <div className='CooperationRatesInputBox'>
            <form>
                <p>تکمیل فیلدهای مشخص شده با * ضروری است.</p>
                <div className='checkbox'>
                    <h2>1. اطلاعات مراسم</h2>
                    <label for="titleMeeting">عنوان جلسه<span>*</span></label>
                    <input type='text' name='titleMeeting' id='titleMeeting' value={titleMeeting} onChange={(e)=>setTitleMeeting(e.target.value)} placeholder='عنوان جلسه'/><br/>
                    <label for="titleMeeting">هدف جلسه<span>*</span></label>
                    <textarea type='text' name='comment1' id='comment1' value={comment1} onChange={(e)=>setComment1(e.target.value)} placeholder='هدف جلسه'></textarea><br/>
                    <label for="numberOfPeople">تعداد حدودی شرکت کننده ها<span>*</span></label>
                    <input type='number' name='numberOfPeople' id='numberOfPeople' value={numberOfPeople} onChange={(e)=>setNumberOfPeople(e.target.value)}/><br/>
                    <label for="numberOfRooms">تعداد حدودی اتاق ها<span>*</span></label>
                    <input type='number' name='numberOfRooms' id='numberOfRooms' value={numberOfRooms} onChange={(e)=>setNumberOfRooms(e.target.value)}/>
                </div>

                <div className='checkboxTypeOfCeremony'>
                    <h2>2. تاریخ مراسم</h2>
                    <label for="date">تاریخ برگزاری<span>*</span></label>
                    <input type='text' name='date' id='date' value={date} onChange={(e)=>setDate(e.target.value)} placeholder='روز ،ماه، سال - روز ،ماه، سال'/><br />
                    <label for="ceremonyDate">روزهایی که ترجیح می دهید مراسم شما در آن روزها باشد<span>*</span></label>
                    <input type='text' name='ceremonyDate' id='ceremonyDate' value={ceremonyDate} onChange={(e)=>setCremonyDate(e.target.value)} placeholder='روز ،ماه، سال - روز ،ماه، سال'/><br />
                    <label for="ceremonyDate">آیا این تاریخ ها قابل جابجایی می باشند؟<span>*</span></label>
                    <input type='radio' checked name='changeDate' className='class1'/><span className='span1'>خیر</span>
                    <input type='radio' name='changeDate' className='class2'/><span className='span2'>بله</span>
                </div>

                <div>
                    <h2>3. اطلاعات تماس</h2>
                    <label for="title">عنوان</label>
                    <input type='text' name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='عنوان'/><br/>

                    <label for="name">نام<span>*</span></label>
                    <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='نام'/><br/>

                    <label for="family">نام خانوادگی<span>*</span></label>
                    <input type='text' name='family' id='family' value={family} onChange={(e)=>setFamily(e.target.value)} placeholder='نام خانوادگی'/><br/>

                    <label for="address">آدرس<span>*</span></label>
                    <input type='text' name='address' id='address' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='آدرس'/><br/>

                    <label for="city">شهر<span>*</span></label>
                    <input type='text' name='city' id='city' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='شهر'/><br/>

                    <label for="province">استان<span>*</span></label>
                    <input type='text' name='province' id='province' value={province} onChange={(e)=>setProvince(e.target.value)} placeholder='استان'/><br/>

                    <label for="country">کشور<span>*</span></label>
                    <input type='text' name='country' id='country' value={country} onChange={(e)=>setCountry(e.target.value)} placeholder='کشور'/><br/>

                    <label for="postalCode">کد پستی<span>*</span></label>
                    <input type='text' name='postalCode' id='postalCode' value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} placeholder='کد پستی'/><br/>

                    <label for="phone">تلفن تماس<span>*</span></label>
                    <input type='text' name='phone' id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='تلفن تماس'/><br/>
                    
                    <label for="email"> پست الکترونیکی<span>*</span></label>
                    <input type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='پست الکترونیکی'/><br/>

                    <label for="company">شرکت / موسسه<span>*</span></label>
                    <input type='text' name='company' id='company' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='شرکت / موسسه'/><br/>

                </div>

                <div>
                    <h2>4. جزئیات مراسم</h2>
                    <label for="companyName">نوع جلسه<span>*</span></label>
                    <div className='checkboxMoreServices'>
                        <span className='span1'>جلسه سالانه</span><input type='checkbox' name='' id='' className='class1'/>
                        <span className='span2'>جلسه ی فروش</span><input type='checkbox' name='' id='' className='class2'/><br/>
                        <span className='span3'>جلسه هیئت مدیره</span><input type='checkbox' name='' id='' className='class3'/>
                        <span className='span4'>نمایشگاه تجاری</span><input type='checkbox' name='' id='' className='class4'/><br/>
                        <span className='span5'>جلسه ی مشتری مداری</span><input type='checkbox' name='' id='' className='class5'/>
                        <span className='span6'>سمینار</span><input type='checkbox' name='' id='' className='class6'/><br/>
                        <span className='span7'>قرارداد</span><input type='checkbox' name='' id='' className='class7'/>
                        <span className='span8'>جلسه ی گروه کاربران</span><input type='checkbox' name='' id='' className='class8'/><br/>
                        <span className='span9'>نشست</span> <input type='checkbox' name='' id='' className='class9'/>
                        <span className='span10'>سایر</span><input type='checkbox' name='' id='' className='class10'/><br/>
                        <span className='span11'>جلسه ی انگیزشی</span> <input type='checkbox' name='' id='' className='class11'/>
                    </div>

                    <label for="comment2">اهدافی که در این جلسه برای موفقیت بیشتر درنظر گرفته شده اند را ذکر کنید.</label>
                    <textarea type='text' name='comment2' id='comment2' value={comment2} onChange={(e)=>setComment2(e.target.value)} placeholder='موفقیت مراسم'></textarea><br/>

                    <label for="comment3">پیشینه ی جلسه (مکان های قبلی برگزاری جلسه)</label>
                    <textarea type='text' name='comment3' id='comment3' value={comment3} onChange={(e)=>setComment3(e.target.value)} placeholder='پیشینه مراسم' ></textarea><br/>

                    <label for="comment3">بیشترین تعداد شرکت کننده ها<span>*</span></label>
                    <select>
                        <option>انتخاب کنید</option>
                        <option>50-1</option>
                        <option>100-51</option>
                        <option>200-101</option>
                        <option>300-201</option>
                        <option>301+</option>
                    </select>
                    <br/>

                    <label for="comment3">خدمات مورد نظر برای پرتعدادترین جلسه<span>*</span></label>
                    <select>
                        <option>انتخاب کنید</option>
                        <option>کلاس درس</option>
                        <option>کنفرانس</option>
                        <option>به صورت هلالی</option>
                        <option>میز گرد کنفرانسی</option>
                        <option>میز گرد</option>
                        <option>سالن تئاتر</option>
                        <option>اتاق های u شکل جهت برگزاری جلسات</option>
                        <option>سایر موارد</option>
                    </select>
                    <br/>

                    <label for="numberOfExteraRooms">تعداد اتاق های اضافه<span>*</span></label>
                    <input type='number' name='numberOfExteraRooms' id='numberOfExteraRooms' value={numberOfExteraRooms} onChange={(e)=>setNumberOfExteraRooms(e.target.value)}/><br/>
                    <label for="largestNumber">بیشترین تعداد شرکت کننده ها در اتاق های اضافه<span>*</span></label>
                    <input type='number' name='largestNumber' id='largestNumber' value={largestNumber} onChange={(e)=>setLargestNumber(e.target.value)}/><br/>

                    <div className='checkboxVipPerson'>
                        <label for="ceremonyDate">آیا در مراسم شما افراد مهمی حضور دارند که خدمات VIP برای آن ها درنظرگرفته شود؟</label>
                        <input type='radio' checked name='changeDate' className='class1'/><span className='span1'>خیر</span>
                        <input type='radio' name='changeDate' className='class2'/><span className='span2'>بله</span>
                    </div>

                    <label for="comment2">خدمات و پذیرایی</label>
                    <textarea type='text' name='comment2' id='comment2' value={comment2} onChange={(e)=>setComment2(e.target.value)} placeholder='خدمات و پذیرایی'></textarea><br/>

                    <label for="comment3">خدمات صوتی و تصویری</label>
                    <textarea type='text' name='comment3' id='comment3' value={comment3} onChange={(e)=>setComment3(e.target.value)} placeholder='خدمات صوتی و تصویری'></textarea><br/>

                    <label for="comment4">خدمات ویژه</label>
                    <textarea type='text' name='comment4' id='comment4' value={comment4} onChange={(e)=>setComment4(e.target.value)} placeholder='خدمات ویژه'></textarea><br/>

                    <label for="companyName">خدمات بیشتر</label>
                    <div className='checkboxMoreServices'>
                        <span className='span1'>گل آرایی</span><input type='checkbox' name='' id='' className='class1'/>
                        <span className='span2'>ماه عسل</span><input type='checkbox' name='' id='' className='class2'/><br/>
                        <span className='span3'>دستمال سفره ی کنار ظروف</span><input type='checkbox' name='' id='' className='class3'/>
                        <span className='span4'>موسیقی </span><input type='checkbox' name='' id='' className='class4'/><br/>
                        <span className='span5'>عکاسی و آتلیه</span><input type='checkbox' name='' id='' className='class5'/>
                        <span className='span6'>حمل و نقل</span><input type='checkbox' name='' id='' className='class6'/><br/>
                        <span className='span7'>ساخت ویدئو کلیپ</span><input type='checkbox' name='' id='' className='class7'/>
                        <span className='span8'>کیک</span><input type='checkbox' name='' id='' className='class8'/><br/>
                        <span className='span9'>هماهنگی های عقد</span> <input type='checkbox' name='' id='' className='class9'/>
                        <span className='span10'>سایر</span><input type='checkbox' name='' id='' className='class10'/>
                    </div>

                    <label for="comment5">سوالات یا نظرات دیگر</label>
                    <textarea type='text' name='comment5' id='comment5' value={comment5} onChange={(e)=>setComment5(e.target.value)} placeholder='سوالات و یا توضیحات بیشتر'></textarea><br/>
                </div>
            </form>
            <div>
                <button onClick={handleSendInfo}>ارسال</button>
                <button onClick={handleClearInputs}>پاکسازی</button>
            </div>
        </div>
    </div>
    <Footer/>
</>
  )
}

export default ReqForResMeetingRooms
