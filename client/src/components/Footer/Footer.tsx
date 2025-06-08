import { Grid } from '@mui/material';
import './footer.css';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Grid container spacing={2} justifyContent="center">
                    <Grid size={6}>
                        <p>Blue Ribbon Dive Resort,<br />
                            National Road, Ligaya<br />
                            Mabini, Batangas<br />
                            Philippines, 4202
                        </p>
                    </Grid>

                    <Grid size={6}>
                        <div id="footer_right" className="text_box right">
                            <p>©Copyright <span><script>
                                document.write(new Date().getFullYear());


                            </script></span> blueribbondivers.com</p>
                            <p>All rights reserved</p>
                            <div className="soc_med">

                            </div>
                            <div className="clear"></div>
                            <p id="small"><a href="https://blueribbondivers.com/privacy-policy/">Privacy Policy</a>
                            </p><p id="small">Website by <a href="http://www.jonathanvenn.com">Jonathan Venn</a></p>
                        </div>
                        </Grid>
                    </Grid>
            </div>
        </footer>
    );
}