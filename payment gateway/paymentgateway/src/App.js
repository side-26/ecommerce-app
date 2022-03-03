
import { Helmet } from 'react-helmet';
import   './App.scss'

function App() {
  return (
    <>
    <Helmet>
      <title>
        صفحه پرداخت
      </title>
    </Helmet>
    <header className='header'>
      <h3>پرداخت اینترنتی بانک گاوداری ایران</h3>
    </header>
    <div className='container'>
      <main className='main'>
          <header className='main-header'>
            <span>اطلاعات کارت</span>
          </header>
          <div className='form-container'>
            <form className='form'>
              <div className='input-container'>
                <label htmlFor="cart-number">
                  شماره کارت
                </label>
                <input type="number" id='cart-number' />
              </div>
              <div className='input-container'>
                <label htmlFor="cvv2-number">
                  cvv2
                </label>
                <input type="number" id='cvv2-number' />
              </div>
              <div className='input-container expire-time-container'>
                <label htmlFor="expire-time">
                  تاریخ انقضا کارت
                </label>
                <input  type="number" id='expire-time' placeholder='ماه' />
                <input type="number" id='expire-time' placeholder='سال' />
              </div>
              <div className='input-container'>
                <label htmlFor="card-password">
                  رمز دوم
                </label>
                <input type="number" id='card-password' />
              </div>
              <div className='btn-container'>
                <a href='http://localhost:3000/payresult?result=successfull'>پرداخت</a>
                <a href='http://localhost:3000/payresult?result=failed'>انصراف</a>
              </div>
            </form>
          </div>
      </main>
      <aside>

      </aside>
    </div>
    </>
  );
}

export default App;
