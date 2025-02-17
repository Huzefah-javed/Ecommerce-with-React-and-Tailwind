import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";

export const Header =()=> {
    return ( 
    <header className="w-full flex justify-between items-center absolute top-0 z-50 mt-10">

        <svg className="text-white" viewBox="-40 0 800 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" class="" data-v-37df0d70="" data-v-a8856c96=""><path d="M274.6717,11.5053 C275.1187,11.5053 275.6087,11.5983 275.6087,12.0943 C275.6087,12.5613 275.3097,12.7833 274.7427,12.7833 L274.1047,12.7833 L274.1047,11.5053 L274.6717,11.5053 L274.6717,11.5053 Z M276.1037,14.4693 L275.0397,13.0363 C275.5297,13.0083 275.9757,12.5913 275.9757,12.0813 C275.9757,11.4903 275.5777,11.1933 274.7577,11.1933 L273.7657,11.1933 L273.7657,14.4693 L274.1047,14.4693 L274.1047,13.0653 L274.6147,13.0653 L275.6427,14.4693 L276.1037,14.4693 Z M274.8417,10.2293 C276.2667,10.2293 277.3537,11.4063 277.3537,12.8233 C277.3537,14.2483 276.2737,15.4263 274.8417,15.4263 C273.4087,15.4263 272.3247,14.2483 272.3247,12.8233 C272.3247,11.4063 273.4087,10.2293 274.8417,10.2293 L274.8417,10.2293 Z M274.8417,15.7383 C276.3657,15.7383 277.7197,14.4543 277.7197,12.8233 C277.7197,11.1993 276.3727,9.9153 274.8417,9.9153 C273.3037,9.9153 271.9557,11.1993 271.9557,12.8233 C271.9557,14.4543 273.3037,15.7383 274.8417,15.7383 L274.8417,15.7383 Z M277.6997,23.8303 C279.4077,23.8303 280.6347,25.1863 280.6347,27.9963 C280.6347,30.8023 279.4077,32.1573 277.6997,32.1573 C276.0277,32.1573 274.8287,30.8023 274.8287,27.9963 C274.8287,25.1863 276.0277,23.8303 277.6997,23.8303 L277.6997,23.8303 Z M280.7347,21.5403 C279.3817,20.1513 277.5387,19.7613 275.7047,19.7613 C270.0597,19.8613 268.4137,24.6073 268.4137,28.1893 C268.4137,33.1933 272.3517,36.2233 275.8677,36.2233 C278.1537,36.2233 280.1217,35.3503 281.0937,33.7743 L281.1537,33.7743 L281.1537,35.5783 L286.9347,35.5783 L286.9347,12.5373 L280.7347,12.5373 L280.7347,21.5403 Z M255.3237,35.5783 L255.3237,26.9293 C255.3237,25.5113 256.3507,24.2173 257.8367,24.2173 C259.2607,24.2173 259.9397,24.9253 259.9397,26.5103 L259.9397,35.5783 L266.1367,35.5783 L266.1367,25.1873 C266.0077,21.5073 263.2007,19.7603 260.6467,19.7603 C258.4097,19.7603 256.1927,20.4733 255.2877,22.9923 L255.2257,22.9923 L255.2257,20.4113 L249.1267,20.4113 L249.1267,35.5783 L255.3237,35.5783 Z M204.9837,35.5783 L204.9837,26.2823 C204.9837,24.6733 205.9827,24.2173 206.9807,24.2173 C207.9837,24.2173 208.9477,24.6733 208.9477,26.2823 L208.9477,35.5783 L215.1457,35.5783 L215.1457,26.2823 C215.1457,24.6733 216.1477,24.2173 217.1497,24.2173 C218.1487,24.2173 219.1187,24.6733 219.1187,26.2823 L219.1187,35.5783 L225.3147,35.5783 L225.3147,26.2823 C225.3147,21.0583 222.3777,19.7603 219.0877,19.7603 C217.2777,19.7603 215.2117,20.6033 214.2777,22.4783 C213.3397,20.6683 211.7877,19.7603 209.6607,19.7603 C208.1107,19.7603 205.8477,20.4113 204.7857,22.6003 L204.7227,22.6003 L204.7227,20.4113 L198.7797,20.4113 L198.7797,35.5783 L204.9837,35.5783 Z M168.8167,18.1933 L175.0157,18.1933 L175.0157,12.6363 L168.8167,12.6363 L168.8167,18.1933 Z M168.8167,35.5793 L175.0157,35.5793 L175.0157,20.7513 L168.8167,20.7513 L168.8167,35.5793 Z M143.1607,12.5363 L153.0677,12.5363 C161.9477,12.5363 166.6917,16.0853 166.6917,24.0523 C166.6917,32.0283 161.9477,35.5783 153.0677,35.5783 L143.1607,35.5783 L143.1607,12.5363 Z M149.7457,30.8673 L153.4577,30.8673 C157.8487,30.8673 159.7217,28.2843 159.7217,24.0523 C159.7217,18.7313 156.7807,17.2483 153.4577,17.2483 L149.7457,17.2483 L149.7457,30.8673 Z M246.8357,28.0023 C246.8357,32.6193 243.6637,36.2343 237.2237,36.2343 C230.7897,36.2343 227.6197,32.6193 227.6197,28.0023 C227.6197,23.3853 230.7897,19.7673 237.2237,19.7673 C243.6637,19.7673 246.8357,23.3853 246.8357,28.0023 L246.8357,28.0023 Z M234.1537,28.0023 C234.1537,31.1343 235.2537,32.6843 237.2237,32.6843 C239.1977,32.6843 240.2997,31.1343 240.2997,28.0023 C240.2997,24.8673 239.1977,23.3213 237.2237,23.3213 C235.2537,23.3213 234.1537,24.8673 234.1537,28.0023 L234.1537,28.0023 Z M186.8097,23.7923 C188.5217,23.7923 189.7477,25.1483 189.7477,27.9443 C189.7477,30.7453 188.5217,32.0863 186.8097,32.0863 C185.0987,32.0863 183.9047,30.7453 183.9047,27.9443 C183.9047,25.1483 185.0987,23.7923 186.8097,23.7923 L186.8097,23.7923 Z M196.2397,35.5733 C195.4157,34.6823 195.2717,33.4873 195.2717,31.8343 L195.2717,31.3333 C195.2657,31.3273 195.2587,31.3273 195.2537,31.3273 L195.2537,20.3873 L189.7477,20.3873 L189.7477,21.7513 C188.6017,20.3933 186.7247,19.7323 184.9407,19.7323 C180.3467,19.7323 177.1677,23.5313 177.1677,27.9553 C177.1677,32.3873 180.4037,36.2113 185.0027,36.2113 C186.8157,36.2113 189.0737,35.4443 189.9237,33.6893 L189.9467,33.6893 C189.9387,34.5413 190.0087,35.1313 190.2797,35.5733 L196.2397,35.5733 Z M122.7667,35.5783 L122.7667,31.5153 L124.7037,29.6403 L127.8037,35.5783 L134.7757,35.5783 L129.0287,25.7063 L134.2257,20.4113 L126.8047,20.4113 L122.7977,24.8643 L122.7977,12.5363 L116.6037,12.5363 L116.6037,35.5783 L122.7667,35.5783 Z M114.4087,25.7703 C113.7657,21.9593 110.0847,19.7613 105.7637,19.7613 C99.6277,19.7613 96.5287,24.0883 96.5287,27.8973 C96.5287,33.2583 100.5307,36.2243 105.6287,36.2243 C107.7937,36.2243 109.9277,35.8393 111.5377,34.8723 C113.1517,33.9003 114.2477,32.3533 114.4087,30.0303 L108.2187,30.0303 C108.0827,31.3513 107.6317,32.4183 105.7637,32.4183 C104.4037,32.4183 103.0507,31.7053 103.0507,27.7683 C103.0507,25.0263 104.0807,23.5693 105.6947,23.5693 C106.4077,23.5693 106.9227,23.7663 107.3097,24.1533 C107.6647,24.5433 107.8927,25.0943 108.0227,25.7703 L114.4087,25.7703 Z M68.0087,35.5793 L74.2027,35.5793 L74.2027,12.5373 L68.0087,12.5373 L68.0087,35.5793 Z M44.2497,12.5363 L56.4207,12.5363 C62.0337,12.5363 64.7777,14.6033 64.7777,18.0223 C64.7777,21.0253 63.5237,22.4783 60.5827,23.2513 L60.5827,23.3153 C63.7787,23.7353 65.7807,25.6723 65.7807,28.9963 C65.7807,31.9003 64.1647,35.5783 56.3217,35.5783 L44.2497,35.5783 L44.2497,12.5363 Z M50.8377,17.1123 L50.8377,21.5073 L55.1607,21.5073 C57.5827,21.5073 58.1937,20.6683 58.1937,19.2483 C58.1937,17.9573 57.5827,17.1123 55.1607,17.1123 L50.8377,17.1123 Z M50.8377,25.9633 L50.8377,31.0003 L54.7737,31.0003 C58.2917,31.0003 59.1977,30.2233 59.1977,28.4813 C59.1977,26.5453 58.3257,25.9633 56.1327,25.9633 L50.8377,25.9633 Z M85.9417,23.8183 C87.6517,23.8183 88.8787,25.1663 88.8787,27.9673 C88.8787,30.7653 87.6517,32.1153 85.9417,32.1153 C84.2317,32.1153 83.0347,30.7653 83.0347,27.9673 C83.0347,25.1663 84.2317,23.8183 85.9417,23.8183 L85.9417,23.8183 Z M95.3707,35.5963 C94.5447,34.7063 94.4017,33.5133 94.4017,31.8603 L94.4017,31.3543 C94.3977,31.3513 94.3907,31.3513 94.3827,31.3513 L94.3827,20.4093 L88.8787,20.4093 L88.8787,21.7753 C87.7307,20.4173 85.8557,19.7553 84.0707,19.7553 C79.4767,19.7553 76.2997,23.5513 76.2997,27.9793 C76.2997,32.4133 79.5357,36.2373 84.1287,36.2373 C85.9467,36.2373 88.2087,35.4643 89.0497,33.7153 L89.0787,33.7153 C89.0707,34.5623 89.1377,35.1573 89.4127,35.5963 L95.3707,35.5963 Z M16.6767,0.0003 L-0.0003,23.9983 L16.7197,47.9923 L22.1407,40.1943 L10.6967,23.8293 L21.9747,7.5963 L16.6767,0.0003 Z M16.0147,23.9973 L24.6937,11.5023 L33.4007,23.9973 L24.7327,36.4643 L16.0147,23.9973 Z" id="Fill-1" fill="#fff" data-v-37df0d70=""></path></svg>

        <div className="flex mr-12 font-sans">
            <button className="text-white text-[1.1rem] font-bold ml-10 uppercase cursor-pointer">Shop</button>
            <button className="text-white text-[1.1rem] font-bold ml-10 uppercase cursor-pointer">Experience</button>
            <button className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500"><IoIosSearch /></button>
            <button className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer"><RxHamburgerMenu /></button>
            <button className="text-white text-[1.5rem] font-bold ml-10 cursor-pointer hover:text-amber-700 transition-all duration-500"><MdOutlineShoppingBag />
            </button>
        </div>
    </header>
    )
}
