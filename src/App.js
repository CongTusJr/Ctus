import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contents from './components/Contents/Contents';

function App() {
  return (
    <div style={{
     // height:'1000px',
    }}>
      <Header/>
      {/* <div style={{
        height: '600px'
      }}>

      </div> */}
      <Contents/>
      <Footer style={{
        position: 'fixed',  // Cố định phần footer
        bottom: 0,           // Đặt footer ở phía dưới cùng của trang
        width: '100%',       // Chiều rộng 100%
        //backgroundColor: 'white', // Màu nền của footer (tuỳ chỉnh)
      }}/>
    </div>
  );
}

export default App;
