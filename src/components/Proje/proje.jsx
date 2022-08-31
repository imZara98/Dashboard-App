import styles from './proje.module.css';
import boy from '../Pictures/boy.png'
import boyb from '../Pictures/boyb.png'
import ggirl from '../Pictures/ggirl.png'
import girl from '../Pictures/girl.png'
import SlakLogo from '../Pictures/SlakLogo.png'
import SpotifyLogo from '../Pictures/SpotifyLogo.png'
import SQLogo from '../Pictures/SQLogo.png'
import XDLogo from '../Pictures/XDLogo.png'
import ALogo from '../Pictures/ALogo.png'
import LinkdinLogo from '../Pictures/LinkdinLogo.png'


const Project = (props) => {
    return(
        <div>
            <table>
                <thead className={styles.tHead}>
                    <tr className={styles.headRow}>
                       <th className={styles.companie}>COMPANIES</th>
                       <th className={styles.member}>MEMBERS</th>
                       <th className={styles.budgets}>BUDGET</th>
                       <th className={styles.completion}>COMPLETION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.text}>
                            <img src={XDLogo} alt='it is XD logo'/>
                            Material UI XD Version
                        </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={boy} alt='a programmer man'/>
                            <img  className={styles.avatar} src={girl} alt ='a girl'/>
                            <img  className={styles.avatar} src={boyb} alt='a programmer man'/>
                            <img  className={styles.avatar} src={ggirl} alt='a programmer man'/>
                        </td>
                        <td className={styles.budget}>$14,000</td>
                        <td className={styles.meters}>
                            <meter id='percent' min='0' max='100' value='76' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.text}>
                            <img src={ALogo}  alt='it is  A logo'/>
                            Add Progress Track
                        </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={boy} alt='a programmer man'/>
                            <img  className={styles.avatar} src={girl} alt ='a girl'/>
                        </td>
                        <td className={styles.budget}>$3,000</td>
                        <td className={styles.meters}>
                            <meter id='percent' min='0' max='100' value='26' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.text}>
                            <img src={SlakLogo} alt='it is  slak logo'/>
                            Fix Platform Errors
                            </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={boyb} alt='a programmer man'/>
                            <img  className={styles.avatar} src={boy} alt='a programmer man'/>
                        </td>
                        <td className={styles.budget}>Not set</td>
                        <td className={styles.meters}>
                            <meter id='percent' min='0' max='100' value='100' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.text}>
                            <img src={SpotifyLogo} alt='it is  spotify logo'/>
                            Launch our Mobile App
                            </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={boyb} alt='a programmer man'/>
                            <img  className={styles.avatar} src={boy} alt='a programmer man'/>
                            <img  className={styles.avatar} src={ggirl} alt='a programmer man'/>
                            <img  className={styles.avatar} src={girl} alt ='a girl'/>
                        </td>
                        <td className={styles.budget}>$2,500</td>
                        <td className={styles.meters}>
                        <meter id='percent' min='0' max='100' value='100' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.text}>
                            <img src={SQLogo} alt='it is  SQ logo'/>
                            Add the New Pricing Page
                        </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={boy} alt='a programmer man'/>
                        </td>
                        <td className={styles.budget}>$500</td>
                        <td className={styles.meters}>
                            <meter id='percent' min='0' max='100' value='30' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                    <tr className={styles.test}>
                        <td className={styles.text}>
                            <img src={LinkdinLogo} alt='it is linkedin logo'/>
                            Redesign New Online Shop
                            </td>
                        <td className={styles.membersImg}>
                            <img  className={styles.avatar} src={ggirl} alt='a programmer man'/>
                            <img  className={styles.avatar} src={girl} alt ='a girl'/>
                        </td>
                        <td className={styles.budget}>$2,000</td>
                        <td className={styles.meters}>
                            <meter id='percent' min='0' max='100' value='46' low='40' high='65' optimum='80'></meter>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Project;