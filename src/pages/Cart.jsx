import React from 'react'
import '../css/cart.css'
import tabel1 from '../assets/img/images/bahan/vestsatu.png'
import tabel2 from '../assets/img/images/bahan/atac_vest.jpg'
import tabel3 from '../assets/img/images/bahan/trouser_satria.jpg'

const Cart = (props) => {
  return (
    <div className="small-container cart-page">
        <h2>Simpanan Belanjamu</h2>
        <table>
            <tr>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Aksi</th>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={tabel1} alt="beli" />
                        <div>
                            <p>6094 Plate Carrier</p>
                            <small>Harga: Rp.650000</small>
                            <br/>
                            <a href="">Hapus</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td><button type='submit' className='btn-cart'>Whatsapp</button></td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={tabel2} alt="beli" />
                        <div>
                            <p>6094 Plate Carrier</p>
                            <small>Harga: Rp.650000</small>
                            <br/>
                            <a href="">Hapus</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td><button type='submit' className='btn-cart'>Whatsapp</button></td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={tabel3} alt="beli" />
                        <div>
                            <p>6094 Plate Carrier</p>
                            <small>Harga: Rp.850000</small>
                            <br/>
                            <a href="">Hapus</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"/></td>
                <td><button type='submit' className='btn-cart'>Whatsapp</button></td>
            </tr>
        </table>
    </div>
  )
}

export default Cart