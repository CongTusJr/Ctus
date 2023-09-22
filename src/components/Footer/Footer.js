import React from 'react';

function Footer() {
  return (
    <div style={{
      //position:'fixed',
      bottom:'0px',
      width: '100%',
      height: '400px',
      backgroundColor: 'rgba(24, 24, 24, 0.9)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '30% 20% 20% 30%',
        placeContent: 'center',
        paddingTop: '60px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }}>
        <div style={{
          marginLeft: '10%',
          marginRight: '80px',
        }}>
          <img
            src='https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png'
            style={{
              width: '120px',
            }}
            alt='POPS Logo'
          />
          <div style={{
            color: 'white',
          }}>
            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù hợp mọi độ tuổi và an toàn cho trẻ em.
          </div>
          <div style={{
            display:'flex',
            marginTop:'20px',
            marginBottom:'20px'
          }}>
            <a href='https://apps.apple.com/vn/app/id1478994434'>
              <img src='https://cdn.popsww.com/popsapp/assets/images/icons/appstore.png'
                style={{
                  width:'105px',
                  height:'35px',
                }}/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.popsworldwide.popsapp'>
              <img src='https://cdn.popsww.com/popsapp/assets/images/icons/googleplay.png'
                style={{
                  width:'105px',
                  height:'35px',
                  marginLeft:'20px'
                }}/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.popsworldwide.popsapp'>
              <img src='https://cdn.popsww.com/popsapp/assets/images/icons/smartTV.png'
                style={{
                  width:'105px',
                  height:'35px',
                  marginLeft:'20px'
                }}/>
            </a>
            
          </div>
        </div>
        <div style={{
          color: 'white',
        }}>
          <div style={{
            marginLeft: '3px',
          }}>
            NỘI DUNG NGƯỜI LỚN
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div style={{
                      marginTop: '10px',
                    }}>
                      Trang chủ
                    </div>
                  </td>
                  <td>
                    <div style={{
                      marginTop: '10px',
                      marginLeft: '20px',
                    }}>
                      Âm Nhạc
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Truyện Tranh
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Series
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Originals
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Thiếu nhi
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Anime
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Blog
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Show
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{
          color: 'white',
        }}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    NỘI DUNG TRẺ EM
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      HỖ TRỢ
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Trang Chủ
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Series
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Originals
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Thiếu nhi
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Anime
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                      Blog
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Show
                  </td>
                  <td>
                    <div style={{
                      marginLeft: '20px',
                    }}>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT<br />
          Địa chỉ: Tầng 4, Block A, Viettel Complex Tower,<br />
          285 Cách Mạng Tháng Tám, Phường 12, Quận 10,<br />
          Thành phố Hồ Chí Minh<br />

          Điện thoại: +84 (28) 62921652<br />

          Email: popsapp-support@pops.vn
        </div>
      </div>
      <hr width='90%' align='center' />
      <div style={{
        display: 'flex',
        marginTop: '45px',
        justifyContent: 'space-between',
      }}>
        <div style={{
          marginLeft: '5%',
          
        }}>
          NGƯỜI chịu trách nhiệm nội dung: Đinh Thị Hồng Hoa<br />

          Giấy chứng nhận đăng ký kinh doanh số 0305709591 do Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh cấp ngày 21/05/2008<br />

          Giấy phép thiết lập mạng xã hội số 63/GP-BTTTT cấp bởi Bộ Thông tin & Truyền thông cấp ngày 22/02/2019<br />

          © 2018 POPS Worldwide. Mọi bản quyền thuộc về POPS Worldwide.
        </div>
        <div style={{
          marginRight:'5%'
          //flexDirection:'row-reverse'
          //justifyItems:'flex-end'
        }}>
          <img
            src='https://cdn.popsww.com/popsapp/assets/images/icons/icon-verify.png?v=3'
            alt='Verify Icon'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
