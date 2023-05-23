import './Layout.css'
import { Outlet, Link } from 'react-router-dom'
function Layout() {
    return (
        <div id="layoutMain">
            <div className="header">
                <div className="logo">
                    <Link to={'/'}>
                        <img id='logoImage' src="https://t3.ftcdn.net/jpg/01/77/07/44/360_F_177074491_vPPxjgEwc6A8nH9KF6vdKjyAFPqa1JHn.jpg" alt="" />
                    </Link>
                </div>
                <div className="items">
                    <Link className='link' to={'listings'}>
                        <div className='headerItem'>Listings</div>
                    </Link>
                    <Link to={'favorites'} className='link'>
                        <div className="headerItem">Favorites</div>
                    </Link>
                    <Link className='link' to={'/sign-up'}>
                        <div className='headerItem'>Sign-up</div>
                    </Link>
                </div>
            </div>
            <Outlet />
            <div id="footer">
                <div id="footerTopRow">
                    <div id="footerFirstRow">
                        <div className="footerItem">About</div>
                        <div className="footerItem">Research</div>
                        <div className="footerItem">Careers</div>
                        <div className="footerItem">Help</div>
                    </div>
                    <div id="footerSecondRow">

                        <div className="footerItem">Advertise</div>
                        <div className="footerItem">Terms of use</div>
                        <div className="footerItem">Privacy policy</div>
                        <div className="footerItem">Cookie preference</div>
                        <div className="footerItem">Blog</div>
                    </div>
                </div>
                <div id="footerBottomRow">
                    <img id='footerImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVR4nM2XTS9DQRSGH02rtirx1WApNndj5yMWGjt+gtTCx16IP6AWquI/+Er8B2IrWKEaCd2RlD02ZJI3cnHdO/eaRd9kNmdm7tM558ycU2hidQMeMGw5PO1JpA5gA6gDHwnHA1ACcrbQKeAFOANmgT4gHeNHp7XH7D0HnoGCDfQVWAZa+L/MN1b0zUKYe18Eda1VnTzQ7Rtyr4uTDgEzvm+1ABeK+S/VFRcXelKCTftsRSXcN3VpoUmKKOWBRaCisSibX0fAIzDosw2I0elf6MkYlr1ZYAd4B66BXY0b2ba15i9lxDCsLw3L+JfagFOgCowEzI8BNeAkAv4hljV4R9D2kDU5wSuuwHm5cpRojQNvQK8L8BJwhb1MzBdcgCvAXgzwAVB2Ad4C9mOAD4FNV66+jgGuunJ1XsllrkyUJpRcPS7A6HGoRdRWU2TuQuKbCJzV41DTlQk6qYEeA61xwJ7lk1mRK6tKODNuZStHQDNBT2acImEeh3lfkZgPiSlRRQKVLFdlMUhF4D5ooqQeyUUj8FMp4BJYD5rMqT0xPZJrrQGNsCJTUGO26ujkKUFfgcmoxQWd/EJx6VdG2iqjRJqTexs2UL/bS0q4pA39vWIaVsMJk7lqcf/CmD3NqU96K5pD3a+ChQAAAABJRU5ErkJggg==" />
                    <img id='footerImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZW4hVVRzGf95GULN0VFAnrcYgTGUgfOlF0TRHMZ3JlHySvKD44Is6+pAk3kYQDDQiesrwjoaOUTBQiaSYaIqIir6Ygngb71fGmfjDt2GxOfu+55zzMB8sOJz9X9/a31lr/W8HOtGJskcfoBZoBJqAS0AL8ErDPl8EDgObgCmaUxboopffB7wA2hOO58AeiTKukmAWcM55qVbgb2A9UA+MBPoBPTTs84d6tgE4rjne/LNAXTEFjACanRe4BqwAhqTgGgqsBP5z+H4H3qODMRd4pAVvAQv0a2dFBbAIuCPuh8AcOgBddGS8X22Hjkre6A/sdNZZm7eI70T8EviKjscieTpbc1tepN5OPAE+pXioBZ7mtTNznZ3IQ0S1XK3xfgl8AUwGPgIGBojxdmZ2Fu/kXewsx8nu0hqfZwoaNQHHzJ49SOvNmp2LnRZjgRvOi94EftOF3qlA+qdzhGoCeDwHYHMTBzvPxab1Th8Aj8VzFPg4xPbfCCGVjmuekcRLeRHb4kQaGMdpcewCukfYRwkxLJbNmbjpTK0TsdMGu8kOR+8CzwcA44FPNK7GEFIBXJddLMezT8aWOqTFTyEcq0MSzJoI3lWy2x31Am8oI21NmTt5uKIFx/i+n6PvXynBbPaN6gjet4HXwDOgV5xjZYukRYUTe7r5np3Ss6UZ+E+Kw45vIBplZNE8LQY5Hs8v8LV2I0tBtUn8G8OMmmRkNUNaVIvDLrCLKn1vcSULZonnUJjRZRlZAZQlI2jXPfHHlXaVu1kwKg7PPRlZOl2uQgaIxwJkIF7KyM5zHMxUU8EdDyKEtBaY442xMdbsKR5z4YHwMs24gXB2SAIYJCRsVCb0ioFokdFbCYX8opzMHW/6bLsVsOmnJoVx3I65Zn/Z3w0zuiSjUQmF7CU9JojjWEz70bK/EGZ0REZ1RRSyRBw/xrSvl701+gKxIU6wKSDEsuUG37CCyEVlAZsG1SPGsTzmmptlvy7MaJqMTpTgsk9PmKKEZsC9Va21qXkWhTFKa9zxQ4SQuwXm2BgcY70qvduTqKTRsD9jvtWRAXF9kjs5ySn2/S60lEL6AvfFYZ4uElZGnk94AYshpEHzrSyOjc+cXRleBkKqnGBtNVOqdtAfQNcSCukK/OV06hPjHadBZ9taKiGrndNhpW4qzJS7a1MELraQ+aoq27K0TD2s1QsY4bwiClkoATbnG3LCt46Yxog0P6uQHqrLPRFbyBnLHPJTeuG8hbyrDk671sptJ/z43AlKz7RTg3MQYj20rU4zuyVjAyQWhjvdFk/QdmCciqckQqy0/d7XeWwChlFETAX+8WWw1rz4NULIbbVUr/nmGpdxlgy2Ez87MSdJGv9Y/79YQ7tsYE2BicDXwMECf8q8r2N1QP9gTUjQrelEJygR/gf1aciEOXd4dAAAAABJRU5ErkJggg==" />
                    <img id='footerImg' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2av2sUQRzFP/6IEFFjuiQWVqJFrBKE2FudaKW2Fjb2asAiCIY0Bhv9C2wl2AmCF8QgiCliJSJioSgoIjERE1Gz4StvYVnu5mY3e7lZnAcLd2++O/PezXxnZncOIiIiyuI00AR+AEmPr1VpaRQ1MR2A+KTNdbNIT9gN68AVYJjeYxi4Kk2Jb8/MK9hMhIZr0mbDrCNWFTxEeBiSthWf4HQshorEV99/YWQCeAh8Bj4BD4DRanV234jNZn9aTIdrwBg1MvJSvK0xB4F9mtONe1y93u4Z+S5+b4Y7IM7KamPkifgZYEAmboh7Xr3e7hmxPPjZIkdstR2nZrPWEeAe8B74WNdZKxQkWzXyzLEjXfCM6QMuAHPABw3LZc2Is8Cx7TDSaXvtE/O6Q/lv4DawezuMuHifH+EVcAk4DOwB9gMngbvAL8VY7u0M0Yit/hvAlEOg4QTwRXVMFtRXSnA7vl3MOeB85vsuR/unVMey1itfHaUEt+Ndjdi25g7wVTG26byloZXHI8VcDs2IbWuWMuV/M58Xgf5c/EWV3Q/NyHXxb4DjmpUsH96Jt0fYLI6KfxuakUXxZ3L8WfEvcvxAJk+CMvJN/GCOHxRv5VnsEL8RmhFX41tpz4lohNgjxKHlQswRYo4Qc8QFn4ejVpdvTJl6K10QFxyNPS0QU6beSo2EgsRX34oCQzhyy+NQkVe0TQXbmV1omCxy9NZQ8LoeeEboPUZkIn3L4n1MnR4X1Pp4OkVDXZgejtbyDwMRERH8wyblE3u1pGweRwAAAABJRU5ErkJggg=="></img>
                </div>
            </div>
        </div>
    )
}
export default Layout