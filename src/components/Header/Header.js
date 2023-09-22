import { React } from 'react';
import './Header.css'
const Header = ()=>{

    return(
        <div >
            <div style={{
                width: '100%',
                height: '80px',
                backgroundColor: 'rgba(24, 24, 24, 0.9)',
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                top:'0px'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    color: 'white',
                    fontSize: '25px'
                }}>
                    <img src='https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png'
                        style={{
                            width: '120px',
                            marginLeft: '10%',
                        }}/>
                    <div style={{
                        marginLeft: '60px',

                    }}
                    className='hover'
                    >
                        Trang chủ
                    </div>    
                    <div style={{
                        marginLeft: '60px',
                    }}className='hover'>
                        Comics
                    </div>
                    <div style={{
                        marginLeft: '60px',
                    }}className='hover'>
                        Anime
                    </div>
                    <div style={{
                        marginLeft: '60px',
                    }}className='hover'>
                        Phim
                    </div>
                    <div style={{
                        marginLeft: '60px',
                    }}className='hover'>
                        Thêm
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Header;