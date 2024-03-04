import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="fotop">
                    <div className="fitop">
                    <div className="ftright">
                        <li><h5>B-Store</h5></li>
                        <li>About</li>
                        <li>Documentation</li>

                    </div>
                    <div className="ftleft">
                        <li><h5>Collection</h5></li>
                        <li>Feature Products</li>
                        <li>Summer Picks</li>
                    </div>
                    </div>
                
                <div className="currency">
                    <label><p>Change Currency</p></label>
                    <select>
                        <option value="">NEP</option>
                        <option value="">USD</option>
                        <option value="">IC</option>
                        <option value="">CAD</option>
                        <option value="">EURO</option>
                        <option value="">AUS</option>
                    </select>
                </div>

                </div>
                <div className="fbottom">
                    <p>Copyright &copy; 2024 birajlamichhane75. B-Store</p>
                </div>
            </div>
        </>
    );
}

export default Footer;