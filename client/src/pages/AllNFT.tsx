import { FunctionComponent } from "react";
import "../styles/AllNFT.scss";

const AllNFT = () => {
  return (
    <div id="allNftPage">
        <div className="sideBar">
            <div className="topSection">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17" viewBox="0 0 30 17" fill="none">
                    <path d="M0 15.7857C0 15.4637 0.127934 15.1548 0.355656 14.9271C0.583379 14.6994 0.892237 14.5714 1.21429 14.5714H8.5C8.82205 14.5714 9.13091 14.6994 9.35863 14.9271C9.58635 15.1548 9.71429 15.4637 9.71429 15.7857C9.71429 16.1078 9.58635 16.4166 9.35863 16.6443C9.13091 16.8721 8.82205 17 8.5 17H1.21429C0.892237 17 0.583379 16.8721 0.355656 16.6443C0.127934 16.4166 0 16.1078 0 15.7857ZM0 8.5C0 8.17795 0.127934 7.86909 0.355656 7.64137C0.583379 7.41365 0.892237 7.28571 1.21429 7.28571H18.2143C18.5363 7.28571 18.8452 7.41365 19.0729 7.64137C19.3006 7.86909 19.4286 8.17795 19.4286 8.5C19.4286 8.82205 19.3006 9.13091 19.0729 9.35863C18.8452 9.58635 18.5363 9.71429 18.2143 9.71429H1.21429C0.892237 9.71429 0.583379 9.58635 0.355656 9.35863C0.127934 9.13091 0 8.82205 0 8.5ZM0 1.21429C0 0.892237 0.127934 0.583379 0.355656 0.355656C0.583379 0.127934 0.892237 0 1.21429 0H27.9286C28.2506 0 28.5595 0.127934 28.7872 0.355656C29.0149 0.583379 29.1429 0.892237 29.1429 1.21429C29.1429 1.53633 29.0149 1.84519 28.7872 2.07292C28.5595 2.30064 28.2506 2.42857 27.9286 2.42857H1.21429C0.892237 2.42857 0.583379 2.30064 0.355656 2.07292C0.127934 1.84519 0 1.53633 0 1.21429Z" fill="white"/>
                </svg>
                <h3>Filters</h3>
            </div>
            <div className="sideOptions">
                <div className="option">
                    <h6>Status</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="option">
                    <h6>Price</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="option">
                    <h6>Collections</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="option">
                    <h6>Chains</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="option">
                    <h6>Categories</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="option">
                    <h6>On Sale In</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="content">
            <div>
                <h6></h6>
                <div>
                    <button>All Items</button>
                    <select name="" id="">Sort By</select>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AllNFT