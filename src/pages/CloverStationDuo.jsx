import React from 'react'
import FooterCTA from '../components/FooterCTA'
import cloverDuoImg from '../assets/images/clover-pos-updated.jpg'
import cloverWorksImg from '../assets/images/how-clover-station-works.jpg'
import mainStreetImg from '../assets/images/main-street-insights.png'
import timeClockImg from '../assets/images/time-clock.png'
import quickbooksImg from '../assets/images/quickbooks-bycommerce-sync.png'
import orderOutImg from '../assets/images/order-out.png'
import davoImg from '../assets/images/DAVO-sales-tax.png'
import checkAccImg from '../assets/images/check-acceptance.png'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
    <defs>
      <linearGradient id="checkGradient" x1="0.5" x2="0.5" y2="1">
        <stop offset="0" stopColor="#9bc63c" />
        <stop offset="1" stopColor="#349044" />
      </linearGradient>
    </defs>
    <circle cx="8" cy="8" r="8" fill="url(#checkGradient)" />
    <path d="M11.5 5.5L7 10.5L4.5 8" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FreeEquipmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g transform="translate(-573 -1363)"><g transform="translate(573 1363)" fill="#fff" stroke="#fff" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(594.125 1383.913)"><g><g transform="translate(0 0)"><g transform="translate(0 26.509)"><path d="M-610.04-181.741h-36.532a.879.879,0,0,1-.879-.879v-9.387a.879.879,0,0,1,.879-.879h36.532a.879.879,0,0,1,.879.879v9.387a.879.879,0,0,1-.879.879" transform="translate(647.452 192.886)" fill="#1b53e0" stroke="#1b53e0" strokeWidth="1.25" opacity="0.3"></path></g><g transform="translate(31.554 30.395)"><path d="M-55.025-27.513a1.687,1.687,0,0,1-1.687,1.687A1.687,1.687,0,0,1-58.4-27.513,1.687,1.687,0,0,1-56.713-29.2a1.687,1.687,0,0,1,1.687,1.687" transform="translate(58.4 29.2)" fill="#e7e7e7" stroke="#1b53e0" strokeWidth="1.25"></path></g><g transform="translate(23.751 13.382)"><path d="M-80.043-60.214h-4.294a.615.615,0,0,1-.615-.615v-2.463a.615.615,0,0,1,.615-.615h4.294a.615.615,0,0,1,.615.615v2.463a.615.615,0,0,1-.615.615" transform="translate(84.952 63.907)" fill="#ffa05b" stroke="#1b53e0" strokeWidth="1.25"></path></g><g transform="translate(9.089 5.293)"><path d="M-181.033-193.375h-10.345a.757.757,0,0,1-.757-.757v-10.345a.757.757,0,0,1,.757-.757h10.345a.757.757,0,0,1,.757.757v10.345a.757.757,0,0,1-.757.757" transform="translate(192.136 205.234)" fill="#90d7a7" stroke="#1b53e0" strokeWidth="1.25"></path></g><g transform="translate(0 26.509)"><path d="M-132.4-181.741h-9.461a.879.879,0,0,1-.879-.879v-9.387a.879.879,0,0,1,.879-.879h36.532a.879.879,0,0,1,.879.879v9.387a.879.879,0,0,1-.879.879h-26.852" transform="translate(142.741 192.886)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(6.212 32.082)"><path d="M0,0H20.782" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(31.554 30.395)"><path d="M-55.025-27.513a1.687,1.687,0,0,1-1.687,1.687A1.687,1.687,0,0,1-58.4-27.513,1.687,1.687,0,0,1-56.713-29.2,1.687,1.687,0,0,1-55.025-27.513Z" transform="translate(58.4 29.2)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(3.859)"><path d="M-126.428,0h22.03a.7.7,0,0,1,.7.7V21.784a.7.7,0,0,1-.7.7h-29.081a.7.7,0,0,1-.7-.7V.7a.7.7,0,0,1,.7-.7h6.422" transform="translate(134.181 0)" fill="#eceff8" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><path d="M254.222-273.989H242.938v-4.023h11.284Z" transform="translate(-229.478 300.499)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path><g transform="translate(8.579 5.955)"><g><path d="M-179.646-191.893h-11.638a.852.852,0,0,1-.852-.852v-11.638a.852.852,0,0,1,.852-.852h11.638a.852.852,0,0,1,.852.852v11.638A.852.852,0,0,1-179.646-191.893Z" transform="translate(192.136 205.234)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(4.394 0.26)"><path d="M0,0V12.995" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(8.947 0.26)"><path d="M0,0V12.995" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(0.178 3.577)"><path d="M-185.717,0h-12.912" transform="translate(198.629)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(0.178 6.757)"><path d="M-185.717,0h-12.912" transform="translate(198.629)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(0.178 9.938)"><path d="M-185.717,0h-12.912" transform="translate(198.629)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g></g><g transform="translate(23.751 13.382)"><path d="M-80.043-60.214h-4.294a.615.615,0,0,1-.615-.615v-2.463a.615.615,0,0,1,.615-.615h4.294a.615.615,0,0,1,.615.615v2.463A.615.615,0,0,1-80.043-60.214Z" transform="translate(84.952 63.907)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(24.871 10.436)"><path d="M0,0H3.532" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g><g transform="translate(24.871 7.971)"><path d="M0,0H3.532" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25"></path></g></g></g></g></svg>
)

const ZeroFeesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g transform="translate(-573 -1363)"><g transform="translate(573 1363)" fill="#fff" stroke="#fff" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(593.403 1375.567)"><path d="M95.223,351.012l6.854-3.237a3.169,3.169,0,0,1,4.188,1.27l-13.932,9.012a9.573,9.573,0,0,1-5.977.677l-9.608-2.7a3.558,3.558,0,0,0-2.64.289L72.1,357.4l.27-9.8.08,0a9.4,9.4,0,0,1,9.77-.683l.575.3a6.711,6.711,0,0,0,2.9.75l5.648.156a4.2,4.2,0,0,1,3.877,2.889Zm0,0" transform="translate(-64.733 -312.096)" fill="#eceff8"></path><path d="M133.279,125.034a10.546,10.546,0,1,1-10.546-10.546A10.546,10.546,0,0,1,133.279,125.034Zm0,0" transform="translate(-100.908 -103.31)" fill="#1b53e0" opacity="0.3"></path><path d="M14.583,347.018l-.03,1.1-6.193-.17.374-13.592,6.194.17-.074,2.689Zm0,0" transform="translate(-7.218 -301.714)" fill="#eceff8"></path><g transform="translate(0.361)"><path d="M189.435,158.636a.754.754,0,0,0-.266-.01,1.764,1.764,0,0,1-1.572-1.76.781.781,0,0,0-1.562,0,3.321,3.321,0,0,0,2.457,3.218v.78a.781.781,0,1,0,1.562,0v-.734a3.336,3.336,0,0,0-.683-6.6,1.773,1.773,0,1,1,1.773-1.773.781.781,0,1,0,1.562,0,3.341,3.341,0,0,0-2.652-3.264v-.711a.781.781,0,1,0-1.562,0v.759a3.335,3.335,0,0,0,.879,6.552,1.773,1.773,0,0,1,.065,3.544Zm0,0" transform="translate(-167.905 -132.648)" fill="#1b53e0"></path><path d="M104.188,117.815a11.327,11.327,0,1,0,11.327-11.327A11.327,11.327,0,0,0,104.188,117.815Zm11.327-9.765a9.765,9.765,0,1,1-9.765,9.765A9.765,9.765,0,0,1,115.515,108.05Zm0,0" transform="translate(-94.051 -96.091)" fill="#1b53e0"></path><path d="M37,329.469l-6.117,2.889a5,5,0,0,0-4.25-2.619l-5.649-.156a5.969,5.969,0,0,1-2.567-.663l-.575-.3a10.136,10.136,0,0,0-9.39.01l.036-1.3a.781.781,0,0,0-.759-.8l-6.194-.17a.78.78,0,0,0-.8.759L.361,340.709a.781.781,0,0,0,.759.8l6.193.17h.022a.781.781,0,0,0,.78-.76l.018-.65,1.61-.862a2.764,2.764,0,0,1,2.06-.225l9.609,2.7.05.013a10.3,10.3,0,0,0,2.113.218,10.413,10.413,0,0,0,4.352-.95.816.816,0,0,0,.1-.053L41.956,332.1a.781.781,0,0,0,.256-1.04A3.946,3.946,0,0,0,37,329.469ZM6.594,339.775l-.014.322-4.634-.127.33-12.03,4.637.127Zm20.63-.009a8.848,8.848,0,0,1-5.415.6l-9.583-2.69a4.32,4.32,0,0,0-3.219.352l-.823.441.221-8a8.584,8.584,0,0,1,8.722-.465l.575.3a7.531,7.531,0,0,0,3.242.837l5.648.156a3.427,3.427,0,0,1,3.157,2.353,3.465,3.465,0,0,1,.1.376l-8.414-.232a.781.781,0,0,0-.043,1.562l9.284.256H30.7a.781.781,0,0,0,.781-.76,5.014,5.014,0,0,0-.076-1.013l6.276-2.965.018-.009a2.387,2.387,0,0,1,2.7.378Zm0,0" transform="translate(-0.361 -294.492)" fill="#1b53e0"></path><path d="M213.761,8.2V.781a.781.781,0,0,0-1.562,0V8.2a.781.781,0,0,0,1.562,0Zm0,0" transform="translate(-191.516)" fill="#1b53e0"></path><path d="M273.761,44.3V40.781a.781.781,0,1,0-1.562,0V44.3a.781.781,0,1,0,1.562,0Zm0,0" transform="translate(-245.658 -36.095)" fill="#1b53e0"></path><path d="M153.761,44.3V40.781a.781.781,0,1,0-1.562,0V44.3a.781.781,0,0,0,1.562,0Zm0,0" transform="translate(-137.374 -36.095)" fill="#1b53e0"></path></g></g></g></svg>
)

const SameDayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g transform="translate(-573 -1363)"><g transform="translate(573 1363)" fill="#fff" stroke="#fff" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(599.999 1383.005)"><g transform="translate(0.56 0.56)"><g><g><path d="M44.182,18.458V43.636a.956.956,0,0,1-.956.956H15.971a.956.956,0,0,1-.956-.956V8.456a.956.956,0,0,1,.956-.956H33.225a.955.955,0,0,1,.4.086.98.98,0,0,1,.279.193L40.725,14.6l3.208,3.208a.962.962,0,0,1,.163.249A.945.945,0,0,1,44.182,18.458Z" transform="translate(-15.015 -7.5)" fill="#eceff8"></path></g></g><g transform="translate(19.203 16.642)"><path d="M287.959,240.232a7.82,7.82,0,1,1-.8-3.453A7.823,7.823,0,0,1,287.959,240.232Z" transform="translate(-272.314 -232.266)" fill="#1b53e0" opacity="0.3"></path><g transform="translate(2.861)"><g><path d="M313.536,242.433h0a.933.933,0,0,1-.66-.273l-1.96-1.96a.933.933,0,0,1,1.319-1.319l1.3,1.3,9.422-9.423a.933.933,0,0,1,1.319,1.319L314.2,242.16A.934.934,0,0,1,313.536,242.433Z" transform="translate(-310.643 -230.485)" fill="#eceff8"></path></g></g></g></g><g><path d="M75.337,106.07H81a.56.56,0,0,0,0-1.119H75.337a.56.56,0,0,0,0,1.119Z" transform="translate(-69.757 -97.118)" fill="#1b53e0"></path><path d="M75.337,128.5H77.25a.56.56,0,1,0,0-1.119H75.337a.56.56,0,1,0,0,1.119Z" transform="translate(-69.757 -117.871)" fill="#1b53e0"></path><path d="M75.335,166.659h.006a.56.56,0,0,0,.005-1.12h-.013a.557.557,0,0,0-.556.554A.563.563,0,0,0,75.335,166.659Z" transform="translate(-69.756 -153.184)" fill="#1b53e0"></path><path d="M75.337,64.584H84.9a.56.56,0,1,0,0-1.119H75.337a.56.56,0,1,0,0,1.119Z" transform="translate(-69.757 -58.728)" fill="#1b53e0"></path><path d="M86.366,287.635a.56.56,0,0,0-.56-.56H75.386a.56.56,0,1,0,0,1.119h10.42A.56.56,0,0,0,86.366,287.635Z" transform="translate(-69.802 -265.65)" fill="#1b53e0"></path><path d="M75.386,317.073a.56.56,0,1,0,0,1.119h6.883a.56.56,0,1,0,0-1.119Z" transform="translate(-69.802 -293.409)" fill="#1b53e0"></path><path d="M75.9,428.06a.56.56,0,0,0-.56-.56h-.007a.557.557,0,0,0-.556.56.562.562,0,0,0,1.123,0Z" transform="translate(-69.756 -395.594)" fill="#1b53e0"></path><path d="M44.165,17.079a1.5,1.5,0,0,0-2.111,0L40.431,18.7a8.361,8.361,0,0,0-2.634-1.47V11.517a1.511,1.511,0,0,0-.129-.61.539.539,0,0,0-.024-.051,1.514,1.514,0,0,0-.291-.411L33.78,6.872a.56.56,0,0,0-.792.791l2.9,2.9H27.633a.4.4,0,0,1-.4-.4V1.911l6.222,6.222a.56.56,0,0,0,.792-.791l-6.9-6.9a1.517,1.517,0,0,0-.409-.29A.564.564,0,0,0,26.89.128,1.511,1.511,0,0,0,26.281,0H9.027A1.518,1.518,0,0,0,7.511,1.516v28a.56.56,0,0,0,1.119,0v-28a.4.4,0,0,1,.4-.4h17.09v9.045a1.518,1.518,0,0,0,1.516,1.516h9.045v5.255a8.372,8.372,0,0,0-7.447,2.251H13.095a.56.56,0,0,0,0,1.119H28.272a8.391,8.391,0,0,0-.674,1.119H25.935a.56.56,0,1,0,0,1.119h1.2a8.376,8.376,0,0,0,.527,6.493H13.095a.56.56,0,0,0,0,1.119h15.27A8.358,8.358,0,0,0,36.678,33.4v3.3a.4.4,0,0,1-.4.4H9.027a.4.4,0,0,1-.4-.4V29.039a.56.56,0,1,0-1.119,0V36.7a1.518,1.518,0,0,0,1.516,1.516H36.281A1.518,1.518,0,0,0,37.8,36.7V33.1a8.372,8.372,0,0,0,2.715-1.535.56.56,0,1,0-.724-.854A7.263,7.263,0,1,1,39.635,19.5l-6.607,6.607-.9-.9a1.493,1.493,0,0,0-2.111,2.111l1.96,1.96a1.493,1.493,0,0,0,2.111,0l7.457-7.457a7.263,7.263,0,0,1,.819,3.352A7.6,7.6,0,0,1,39.851,30.7a.56.56,0,1,0,.96.576c.675-.6,2.276-2.362,2.668-6.109a8.377,8.377,0,0,0-1.114-4.177l1.8-1.8A1.5,1.5,0,0,0,44.165,17.079ZM43.374,18.4,33.292,28.481a.373.373,0,0,1-.528,0L30.8,26.52a.373.373,0,0,1,.528-.528l1.3,1.3a.56.56,0,0,0,.792,0l9.422-9.423a.373.373,0,1,1,.528.528Z" transform="translate(-7.511 0)" fill="#1b53e0"></path><path d="M75.386,228.578a.56.56,0,0,0,0,1.119h3.107a.56.56,0,1,0,0-1.119Z" transform="translate(-69.802 -211.519)" fill="#1b53e0"></path></g></g></g></svg>
)

const EasyToUseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g fill="#eceff8" stroke="#eceff8" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(23.097 21.097)"><path d="M39.229,34.156H8.426A.926.926,0,0,1,7.5,33.23V8.426A.926.926,0,0,1,8.426,7.5h30.8a.926.926,0,0,1,.926.926v24.8A.926.926,0,0,1,39.229,34.156Z" transform="translate(-6.946 -6.946)" fill="#eceff8"></path><path d="M38.529,58.209V38.631a.1.1,0,0,1,.1-.1H66.5a.1.1,0,0,1,.1.1V58.209a.1.1,0,0,1-.1.1H38.631a.1.1,0,0,1-.1-.1Z" transform="translate(-35.684 -35.684)" fill="#1b53e0" opacity="0.3"></path><path d="M451.865,104.01h-2.126V92.146h2.007a.12.12,0,0,1,.12.12Z" transform="translate(-416.531 -85.342)" fill="#eceff8"></path><path d="M480.335,116.481h-1.8v-10.87h1.8a.12.12,0,0,1,.12.12v10.63A.12.12,0,0,1,480.335,116.481Z" transform="translate(-443.203 -97.813)" fill="#eceff8"></path><path d="M144,374H129.591a.117.117,0,0,1-.113-.148l.087-.318a17.708,17.708,0,0,0,.623-4.657V368.5H143.4v.382a17.708,17.708,0,0,0,.623,4.657l.087.318A.117.117,0,0,1,144,374Z" transform="translate(-119.914 -341.288)" fill="#eceff8"></path><path d="M98.642,413.095l-2.425-4.74a.565.565,0,0,0-.5-.308H94.221a17.711,17.711,0,0,0,.44,2.119l.087.318a.117.117,0,0,1-.113.148H80.228a.117.117,0,0,1-.113-.148l.087-.318a17.707,17.707,0,0,0,.44-2.119H79.148a.565.565,0,0,0-.5.308l-2.425,4.74a.561.561,0,0,0-.045.121H98.688A.571.571,0,0,0,98.642,413.095Z" transform="translate(-70.55 -377.917)" fill="#eceff8"></path><path d="M75.964,478.047a.565.565,0,0,0-.017.136v1.612a.205.205,0,0,0,.205.205H98.288a.205.205,0,0,0,.205-.205v-1.612a.565.565,0,0,0-.017-.136Z" transform="translate(-70.339 -442.748)" fill="#eceff8"></path><path d="M59.554,31.029H36.24a.554.554,0,1,0,0,1.108H59.1V50.811H32.138V32.137h4.518a.554.554,0,0,0,0-1.108h-4.97a.657.657,0,0,0-.656.656V51.263a.657.657,0,0,0,.656.656H59.554a.657.657,0,0,0,.656-.656V31.685a.657.657,0,0,0-.656-.656Z" transform="translate(-28.739 -28.738)" fill="#1b53e0"></path><path d="M37.132,7.244H35.889V6.924a.674.674,0,0,0-.674-.674H33.762V1.479A1.481,1.481,0,0,0,32.283,0H1.479A1.481,1.481,0,0,0,0,1.479v24.8a1.481,1.481,0,0,0,1.479,1.479H9.72a17.16,17.16,0,0,1-.114,1.813H8.6a1.114,1.114,0,0,0-1,.609c-2.662,5.2-2.469,4.8-2.513,4.977a1.118,1.118,0,0,0-.034.273v1.612a.76.76,0,0,0,.759.759H27.949a.76.76,0,0,0,.759-.759V35.435a1.122,1.122,0,0,0-.123-.509l-2.425-4.74a1.114,1.114,0,0,0-1-.609H24.157a17.16,17.16,0,0,1-.114-1.813h8.24a1.481,1.481,0,0,0,1.479-1.479V19.222h3.37a.674.674,0,0,0,.674-.674V7.918A.674.674,0,0,0,37.132,7.244ZM6.162,36.7v-.846H27.6V36.7ZM23.515,32.16H19.03a.554.554,0,0,0,0,1.108h5.055a.671.671,0,0,0,.647-.848c-.148-.544-.275-1-.409-1.737a5.918,5.918,0,0,1,.852.006l2.074,4.055H6.513C8.682,30.5,8.587,30.684,8.6,30.684h.842c-.138.751-.274,1.241-.409,1.737a.671.671,0,0,0,.648.848h9.768a.554.554,0,1,0,0-1.108h-9.2a18.274,18.274,0,0,0,.58-4.4H22.935a18.269,18.269,0,0,0,.58,4.4Zm9.14-5.876a.372.372,0,0,1-.372.372H1.479a.372.372,0,0,1-.372-.372V1.479a.372.372,0,0,1,.372-.372h30.8a.372.372,0,0,1,.372.372v24.8ZM33.762,7.358h1.019V18.114H33.762ZM36.7,18.114h-.809V8.352H36.7Z" transform="translate(0 0)" fill="#1b53e0"></path></g></svg>
)

const AcceptPaymentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g transform="translate(-578 -1373)"><g transform="translate(578 1373)" fill="#eceff8" stroke="#eceff8" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(595.638 1393)"><g transform="translate(2.562 0)"><g transform="translate(9.055 0.779)"><path d="M147.506,23.674,132.189,38.991a2.576,2.576,0,0,1-3.643,0l-9.3-9.3a2.576,2.576,0,0,1,0-3.643l15.317-15.317a2.576,2.576,0,0,1,3.643,0l9.3,9.3A2.576,2.576,0,0,1,147.506,23.674Z" transform="translate(-118.495 -9.98)" fill="#eceff8"></path></g><g transform="translate(0.781 20.497)"><path d="M25.871,281.157l1.2-1.2,6.247-1.766a6.162,6.162,0,0,0,4.1-3.8l3.255-8.814-5.924,5.924-2.038.978-2.2-1.127-1.781.142,5.083-5.083a2.332,2.332,0,1,0-3.3-3.3l-3.389,3.389-.83.012a5.966,5.966,0,0,0-5.882,5.9l-.009.874-7.848,7.848Z" transform="translate(-12.564 -262.436)" fill="#1b53e0" opacity="0.3"></path></g><g transform="translate(0 0)"><g><path d="M41.18,10.278l-9.3-9.3a3.361,3.361,0,0,0-4.747,0L21.908,6.209a.781.781,0,0,0,1.1,1.1l5.228-5.228a1.8,1.8,0,0,1,2.538,0l9.3,9.3a1.8,1.8,0,0,1,0,2.538L24.759,29.238a1.795,1.795,0,0,1-2.538,0l-.639-.639,3.569-3.569a3.113,3.113,0,0,0-4.4-4.4l-3.165,3.165-.513.007c-.093,0-.186.006-.279.011l-3.869-3.869a1.8,1.8,0,0,1,0-2.538L23.043,7.284a.781.781,0,1,0-1.1-1.1L11.819,16.3a3.361,3.361,0,0,0,0,4.747l3.127,3.127a6.75,6.75,0,0,0-4.527,6.3l-.006.555L2.791,38.653a.781.781,0,1,0,1.1,1.1l7.848-7.848a.781.781,0,0,0,.229-.544l.009-.874a5.185,5.185,0,0,1,5.112-5.131l.83-.012a.781.781,0,0,0,.541-.229l3.389-3.389a1.551,1.551,0,1,1,2.193,2.193l-5.083,5.083a.781.781,0,0,0,1.1,1.1l.409-.409.639.639a3.361,3.361,0,0,0,4.747,0l3.628-3.628-2.021,5.472A5.4,5.4,0,0,1,23.886,35.5l-6.247,1.766a.782.782,0,0,0-.34.2l-1.2,1.2a.781.781,0,1,0,1.1,1.1l1.057-1.057L24.311,37a6.965,6.965,0,0,0,4.625-4.277l3.2-8.653,9.049-9.049a3.361,3.361,0,0,0,0-4.747Z" transform="translate(-2.562 0)" fill="#1b53e0"></path></g><g transform="translate(21.497 14.594)"><path d="M183.485,187.043l-2.258,2.123a.609.609,0,0,0,0,.9.706.706,0,0,0,.955,0l2.258-2.123a.609.609,0,0,0,0-.9A.706.706,0,0,0,183.485,187.043Z" transform="translate(-181.029 -186.857)" fill="#1b53e0"></path></g></g><g transform="matrix(0.259, 0.966, -0.966, 0.259, 36.626, -20.187)"><g transform="translate(24.329 13.71)"><path d="M-73.382-2.111a6.608,6.608,0,0,0-5.033.642,6.608,6.608,0,0,0-3.1,4.012" transform="translate(81.52 2.345)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path></g><path d="M-29.164-.842a2.627,2.627,0,0,0-2,.254,2.627,2.627,0,0,0-1.233,1.6" transform="translate(60.582 18.64)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"></path></g></g></g></svg>
)

const WeGotYourBackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><g transform="translate(-578 -1372.828)"><g transform="translate(578 1372.828)" fill="#eceff8" stroke="#eceff8" strokeWidth="2"><circle cx="40" cy="40" r="40" stroke="none"></circle><circle cx="40" cy="40" r="39" fill="none"></circle></g><g transform="translate(597.486 2073.277)"><g transform="translate(7.577 -681.984)"><g transform="translate(0 0)"><g><path d="M-267.009,0h-17.234a1.329,1.329,0,0,0-1.329,1.329v36a1.329,1.329,0,0,0,1.329,1.329h24.785a1.669,1.669,0,0,0,1.669-1.669V27.792h0V9.22Z" transform="translate(285.571)" fill="#eceff8"></path></g><g transform="translate(18.562 0)"><path d="M-19.113-132.62h7.891l-9.22-9.22v7.891a1.329,1.329,0,0,0,1.329,1.329" transform="translate(20.441 141.84)" fill="#1b53e0" opacity="0.3"></path></g><g transform="translate(19.73 26.093)" opacity="0.3"><path d="M-28.959-111.152v-3.2a2.513,2.513,0,0,1,2.51-2.51,2.513,2.513,0,0,1,2.51,2.51v3.2h2.013v-3.2a4.528,4.528,0,0,0-4.523-4.523,4.528,4.528,0,0,0-4.523,4.523v3.2Z" transform="translate(30.972 118.88)" fill="#1b53e0"></path></g><g transform="translate(18.643 33.3)" opacity="0.3"><path d="M-147.5,0h-9.288a.969.969,0,0,0-.966.966V8.8a.969.969,0,0,0,.966.966h9.288a.969.969,0,0,0,.966-.966V.966A.969.969,0,0,0-147.5,0" transform="translate(157.75)" fill="#1b53e0"></path></g><g transform="translate(22.914 35.507)"><path d="M-19.262,0A1.339,1.339,0,0,0-20.6,1.339a1.339,1.339,0,0,0,1.339,1.339,1.339,1.339,0,0,0,1.339-1.339A1.339,1.339,0,0,0-19.262,0" transform="translate(20.601)" fill="#eceff8"></path></g><g transform="translate(18.568 0)"><path d="M-19.113-132.62h7.891l-9.22-9.22v7.891A1.329,1.329,0,0,0-19.113-132.62Z" transform="translate(20.441 141.84)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 12.939)"><path d="M0,0H17.521" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 15.891)"><path d="M0,0H17.521" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 18.844)"><path d="M0,0H17.521" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 21.796)"><path d="M0,0H17.521" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 24.749)"><path d="M0,0H17.521" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 27.701)"><path d="M0,0H15.667" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(5.136 30.653)"><path d="M0,0H14.6" transform="translate(0 0)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(18.648 33.3)"><path d="M-147.5,0h-9.287a.969.969,0,0,0-.966.966V8.8a.969.969,0,0,0,.966.966h9.287a.969.969,0,0,0,.966-.966V.966A.969.969,0,0,0-147.5,0Z" transform="translate(157.75)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(19.735 26.093)"><path d="M-28.959-103.672v-2.684a2.513,2.513,0,0,1,2.51-2.51,2.513,2.513,0,0,1,2.51,2.51v2.684h2.013v-2.684a4.528,4.528,0,0,0-4.523-4.523,4.528,4.528,0,0,0-4.523,4.523v2.684Z" transform="translate(30.972 110.88)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(22.919 35.507)"><path d="M-19.262,0A1.339,1.339,0,0,0-20.6,1.339a1.339,1.339,0,0,0,1.339,1.339,1.339,1.339,0,0,0,1.339-1.339A1.339,1.339,0,0,0-19.262,0Z" transform="translate(20.601)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(27.787 19.746)"><path d="M0-64.871v-8.046" transform="translate(0 72.917)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(11.229 38.653)"><path d="M0,0H7.3" transform="translate(0.12)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g><g transform="translate(0.005 0)"><path d="M-399.629-287.959v-10.8l-9.22-9.22h-17.234a1.329,1.329,0,0,0-1.329,1.329v36a1.329,1.329,0,0,0,1.329,1.329h9.884" transform="translate(427.411 307.978)" fill="none" stroke="#1b53e0" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1"></path></g></g></g></g></g></svg>
)

const Step1Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g transform="translate(0 -1)"><circle cx="50" cy="50" r="50" transform="translate(0 1)" fill="#fff"></circle><g transform="translate(32.105 27.292)"><path d="M10.186,10H43.538V53.642H10.186Z" transform="translate(-9.113 -9.113)" fill="#fff"></path><g transform="translate(23.813 10.459)"><path d="M267.3,423.318l-.752,6.979,5.668-4.141Z" transform="translate(-266.545 -396.227)" fill="#d1dcf9"></path><path d="M0,0H5.677V27.74H0Z" transform="matrix(0.866, 0.5, -0.5, 0.866, 14.621, 3.067)" fill="#d1dcf9"></path><path d="M436.3,123.814l-4.916-2.839.951-1.647a2.839,2.839,0,1,1,4.916,2.839Z" transform="translate(-416.764 -117.908)" fill="#d1dcf9"></path></g><g transform="translate(0.186 0)"><path d="M105.991,162H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -147.63)" fill="#1b53e0"></path><path d="M88.073,219.774h5.914a.887.887,0,1,0,0-1.774H88.073a.887.887,0,0,0,0,1.774Z" transform="translate(-79.469 -198.663)" fill="#1b53e0"></path><path d="M222.408,218h-6.586a.887.887,0,0,0,0,1.774h6.586a.887.887,0,0,0,0-1.774Z" transform="translate(-195.886 -198.663)" fill="#1b53e0"></path><path d="M105.991,106H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -96.597)" fill="#1b53e0"></path><path d="M106.878,274.887a.887.887,0,0,0-.887-.887H88.073a.887.887,0,1,0,0,1.774h17.918A.887.887,0,0,0,106.878,274.887Z" transform="translate(-79.469 -249.695)" fill="#1b53e0"></path><path d="M88.073,331.774h4.568a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -300.728)" fill="#1b53e0"></path><path d="M191,330.887a.887.887,0,0,0-.887-.887h-5.544a.887.887,0,1,0,0,1.774h5.544A.887.887,0,0,0,191,330.887Z" transform="translate(-167.409 -300.728)" fill="#1b53e0"></path><path d="M88.073,387.774h7.806a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -351.761)" fill="#1b53e0"></path><path d="M43.707,10.071a3.73,3.73,0,0,0-5.089,1.364L35.312,17.16V4.083a.887.887,0,0,0-1.774,0V20.224s0,.005,0,.008L23.8,37.106a.887.887,0,0,0-.114.349l-.667,6.187H1.96V1.774H33.538V4.435a.887.887,0,1,0,1.774,0V.887A.887.887,0,0,0,34.425,0H1.073A.887.887,0,0,0,.186.887V44.529a.887.887,0,0,0,.887.887H34.425a.887.887,0,0,0,.887-.887V32.062l9.758-16.9a3.73,3.73,0,0,0-1.364-5.089ZM29.156,39.176l-3.38-1.951L38.76,14.738l3.38,1.951ZM25.3,39l2.557,1.476L24.91,42.629ZM42.82,11.608a1.954,1.954,0,0,1,.714,2.666l-.508.879L39.647,13.2l.508-.879A1.954,1.954,0,0,1,42.82,11.608ZM33.538,43.642H26.531L30,41.1a.887.887,0,0,0,.245-.273l3.289-5.7Z" transform="translate(-0.186 0)" fill="#1b53e0"></path></g></g></g></svg>
)

const Step2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g transform="translate(0 -1)"><circle cx="50" cy="50" r="50" transform="translate(0 1)" fill="#fff"></circle><g transform="translate(32.105 27.292)"><path d="M10.186,10H43.538V53.642H10.186Z" transform="translate(-9.113 -9.113)" fill="#fff"></path><g transform="translate(23.813 10.459)"><path d="M267.3,423.318l-.752,6.979,5.668-4.141Z" transform="translate(-266.545 -396.227)" fill="#d1dcf9"></path><path d="M0,0H5.677V27.74H0Z" transform="matrix(0.866, 0.5, -0.5, 0.866, 14.621, 3.067)" fill="#d1dcf9"></path><path d="M436.3,123.814l-4.916-2.839.951-1.647a2.839,2.839,0,1,1,4.916,2.839Z" transform="translate(-416.764 -117.908)" fill="#d1dcf9"></path></g><g transform="translate(0.186 0)"><path d="M105.991,162H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -147.63)" fill="#1b53e0"></path><path d="M88.073,219.774h5.914a.887.887,0,1,0,0-1.774H88.073a.887.887,0,0,0,0,1.774Z" transform="translate(-79.469 -198.663)" fill="#1b53e0"></path><path d="M222.408,218h-6.586a.887.887,0,0,0,0,1.774h6.586a.887.887,0,0,0,0-1.774Z" transform="translate(-195.886 -198.663)" fill="#1b53e0"></path><path d="M105.991,106H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -96.597)" fill="#1b53e0"></path><path d="M106.878,274.887a.887.887,0,0,0-.887-.887H88.073a.887.887,0,1,0,0,1.774h17.918A.887.887,0,0,0,106.878,274.887Z" transform="translate(-79.469 -249.695)" fill="#1b53e0"></path><path d="M88.073,331.774h4.568a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -300.728)" fill="#1b53e0"></path><path d="M191,330.887a.887.887,0,0,0-.887-.887h-5.544a.887.887,0,1,0,0,1.774h5.544A.887.887,0,0,0,191,330.887Z" transform="translate(-167.409 -300.728)" fill="#1b53e0"></path><path d="M88.073,387.774h7.806a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -351.761)" fill="#1b53e0"></path><path d="M43.707,10.071a3.73,3.73,0,0,0-5.089,1.364L35.312,17.16V4.083a.887.887,0,0,0-1.774,0V20.224s0,.005,0,.008L23.8,37.106a.887.887,0,0,0-.114.349l-.667,6.187H1.96V1.774H33.538V4.435a.887.887,0,1,0,1.774,0V.887A.887.887,0,0,0,34.425,0H1.073A.887.887,0,0,0,.186.887V44.529a.887.887,0,0,0,.887.887H34.425a.887.887,0,0,0,.887-.887V32.062l9.758-16.9a3.73,3.73,0,0,0-1.364-5.089ZM29.156,39.176l-3.38-1.951L38.76,14.738l3.38,1.951ZM25.3,39l2.557,1.476L24.91,42.629ZM42.82,11.608a1.954,1.954,0,0,1,.714,2.666l-.508.879L39.647,13.2l.508-.879A1.954,1.954,0,0,1,42.82,11.608ZM33.538,43.642H26.531L30,41.1a.887.887,0,0,0,.245-.273l3.289-5.7Z" transform="translate(-0.186 0)" fill="#1b53e0"></path></g></g></g></svg>
)

const Step3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g transform="translate(0 -1)"><circle cx="50" cy="50" r="50" transform="translate(0 1)" fill="#fff"></circle><g transform="translate(32.105 27.292)"><path d="M10.186,10H43.538V53.642H10.186Z" transform="translate(-9.113 -9.113)" fill="#fff"></path><g transform="translate(23.813 10.459)"><path d="M267.3,423.318l-.752,6.979,5.668-4.141Z" transform="translate(-266.545 -396.227)" fill="#d1dcf9"></path><path d="M0,0H5.677V27.74H0Z" transform="matrix(0.866, 0.5, -0.5, 0.866, 14.621, 3.067)" fill="#d1dcf9"></path><path d="M436.3,123.814l-4.916-2.839.951-1.647a2.839,2.839,0,1,1,4.916,2.839Z" transform="translate(-416.764 -117.908)" fill="#d1dcf9"></path></g><g transform="translate(0.186 0)"><path d="M105.991,162H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -147.63)" fill="#1b53e0"></path><path d="M88.073,219.774h5.914a.887.887,0,1,0,0-1.774H88.073a.887.887,0,0,0,0,1.774Z" transform="translate(-79.469 -198.663)" fill="#1b53e0"></path><path d="M222.408,218h-6.586a.887.887,0,0,0,0,1.774h6.586a.887.887,0,0,0,0-1.774Z" transform="translate(-195.886 -198.663)" fill="#1b53e0"></path><path d="M105.991,106H88.073a.887.887,0,1,0,0,1.774h17.918a.887.887,0,1,0,0-1.774Z" transform="translate(-79.469 -96.597)" fill="#1b53e0"></path><path d="M106.878,274.887a.887.887,0,0,0-.887-.887H88.073a.887.887,0,1,0,0,1.774h17.918A.887.887,0,0,0,106.878,274.887Z" transform="translate(-79.469 -249.695)" fill="#1b53e0"></path><path d="M88.073,331.774h4.568a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -300.728)" fill="#1b53e0"></path><path d="M191,330.887a.887.887,0,0,0-.887-.887h-5.544a.887.887,0,1,0,0,1.774h5.544A.887.887,0,0,0,191,330.887Z" transform="translate(-167.409 -300.728)" fill="#1b53e0"></path><path d="M88.073,387.774h7.806a.887.887,0,1,0,0-1.774H88.073a.887.887,0,1,0,0,1.774Z" transform="translate(-79.469 -351.761)" fill="#1b53e0"></path><path d="M43.707,10.071a3.73,3.73,0,0,0-5.089,1.364L35.312,17.16V4.083a.887.887,0,0,0-1.774,0V20.224s0,.005,0,.008L23.8,37.106a.887.887,0,0,0-.114.349l-.667,6.187H1.96V1.774H33.538V4.435a.887.887,0,1,0,1.774,0V.887A.887.887,0,0,0,34.425,0H1.073A.887.887,0,0,0,.186.887V44.529a.887.887,0,0,0,.887.887H34.425a.887.887,0,0,0,.887-.887V32.062l9.758-16.9a3.73,3.73,0,0,0-1.364-5.089ZM29.156,39.176l-3.38-1.951L38.76,14.738l3.38,1.951ZM25.3,39l2.557,1.476L24.91,42.629ZM42.82,11.608a1.954,1.954,0,0,1,.714,2.666l-.508.879L39.647,13.2l.508-.879A1.954,1.954,0,0,1,42.82,11.608ZM33.538,43.642H26.531L30,41.1a.887.887,0,0,0,.245-.273l3.289-5.7Z" transform="translate(-0.186 0)" fill="#1b53e0"></path></g></g></g></svg>
)

const CloverStationDuo = () => {
  return (
    <>
      {/* Custom Hero Section matching screenshot */}
      <section style={{ backgroundColor: '#ECEFF8', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Image */}
          <div className="relative flex justify-center items-center py-10">
            <div
              className="absolute bg-white rounded-full"
              style={{ width: '450px', height: '450px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
            ></div>
            <img src={cloverDuoImg} alt="Clover Station Duo" className="relative z-10 w-full max-w-[550px]" />
          </div>

          {/* Right Side: Text & CTA */}
          <div className="pr-4">
            <h1 className="text-[46px] font-bold leading-[1.2] mb-6">
              <span style={{ color: '#1b53e0' }}>Get Clover Station Duo FREE</span><br />
              <span style={{ color: '#1a1a2e' }}>by signing up for our services</span>
            </h1>

            <div className="flex items-end gap-3 mb-8">
              <span className="line-through font-bold" style={{ fontSize: '24px', color: '#999' }}>$1,299.00</span>
              <span className="font-bold" style={{ fontSize: '36px', color: '#1b53e0', lineHeight: 1 }}>$0.00</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> All-in-one, feature-rich POS System
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> Over 200 apps in Clover App Market
              </li>
              <li className="flex items-center gap-3 text-[18px] text-[#555]">
                <CheckIcon /> Includes cash drawer, printer, scanner
              </li>
            </ul>

            <div className="border-t border-dashed border-gray-400 my-8 opacity-50"></div>

            <a href="/contact-us" className="btn-green" style={{ display: 'inline-block', fontSize: '16px', padding: '16px 35px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
              GET THIS FREE!
            </a>

            <p className="mt-4 text-[16px] italic text-[#666]">
              <span style={{ color: '#1b53e0', fontStyle: 'normal' }}>*</span> Custom To Your Business
            </p>
          </div>
        </div>
      </section>

      {/* Blue Features Banner */}
      <section style={{ backgroundColor: '#1b53e0', padding: '50px 0' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          <div className="flex items-center justify-center gap-4 text-white">
            <FreeEquipmentIcon />
            <h4 className="text-xl font-bold m-0 text-white">FREE Equipment</h4>
          </div>
          <div className="flex items-center justify-center gap-4 text-white border-l border-r border-[#3a6bed] border-opacity-50">
            <ZeroFeesIcon />
            <h4 className="text-xl font-bold m-0 text-white">Zero Set-Up Fees</h4>
          </div>
          <div className="flex items-center justify-center gap-4 text-white">
            <SameDayIcon />
            <h4 className="text-xl font-bold m-0 text-white">Same Day Approval</h4>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* Demo Section */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Clover Station Duo Demo</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <div className="bg-black w-full aspect-video flex items-center justify-center rounded-sm">
              <div className="w-[80px] h-[80px] bg-[#1b53e0] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Specifications</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Payments:</strong> Accepts chip, swipe, and contactless payments including Apple Pay®, Google Pay® and Samsung Pay®</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Screen:</strong> 14″ high-definition merchant-facing touch screen and 7″ customer-facing touch screen</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Receipt printer:</strong> High-speed thermal dot receipt printer</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Security:</strong> Clover Security end-to-end encryption</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Camera & Scanner:</strong> Dual 5 mega-pixel cameras with scanning software</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Connectivity:</strong> WiFi and ethernet connectivity</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>Cash drawer:</strong> Includes a bill tray, coin tray, two keys, and a security cable.</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span><strong>PIN Pad:</strong> Virtual keypad for PIN entry</span>
              </li>
            </ul>
          </div>

          {/* Key Features & Benefits */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Key Features & Benefits</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <EasyToUseIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Easy to Use and Ready to Go</h4>
                <p className="text-[#666] leading-relaxed">Station Duo is ready for work right out of the box, and with intuitive software built in, training your staff is minimal.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <AcceptPaymentIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">Accept Every Type of Payment</h4>
                <p className="text-[#666] leading-relaxed">Let customers pay however they want. Credit or debit. Swipe, dip, or contactless payments like Apple Pay®, Google Pay™, and next generation payments like PayPal/Venmo® QR codes.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  <WeGotYourBackIcon />
                </div>
                <h4 className="text-[20px] font-bold text-[#1a1a2e] mb-4">We've Got Your Back</h4>
                <p className="text-[#666] leading-relaxed">Protect your business and customer information with end-to-end encryption, integrated chip sensors, and optional fingerprint login.</p>
              </div>
            </div>
          </div>

          {/* Device Variants */}
          <div className="mb-20">
            <h2 className="text-[28px] font-bold text-[#1a1a2e] mb-4">Device Variants Available</h2>
            <div className="h-[1px] bg-gray-200 mb-8 w-full"></div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Bundle with CD (Tablet, Printer,Terminal, Kit, Cash Drawer)</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Duo Bundle</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Starter Kit</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Display</span>
              </li>
              <li className="flex gap-3 text-[#555] text-lg">
                <span className="mt-1"><CheckIcon /></span>
                <span>Clover Station Duo Terminal</span>
              </li>
            </ul>
          </div>

          {/* 3 Step Process */}
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-[#1a1a2e] text-center mb-16">Our Simple 3 Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Step1Icon />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Get in Touch</h4>
                <p className="text-[#666]">Get in touch by filling up our contact form.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Step2Icon />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Get an Instant Quote</h4>
                <p className="text-[#666]">We prepare a quote custom tailored for your business needs.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Step3Icon />
                </div>
                <h4 className="text-[22px] font-bold text-[#1a1a2e] mb-3">Start Processing</h4>
                <p className="text-[#666]">Start processing payments online and in person and growing your business.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/contact-us" className="btn-green inline-block">Request a Quote</a>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="about-section bg-[#f9fafc]">
        <div className="about-container about-container-reverse">
          <div className="about-text">
            <h2>How Clover Station Duo Works</h2>
            <p className="mb-4">One of the best merchant processing devices is the Clover Station Duo, an all-in-one POS that can increase productivity. This point of sales system is ideal for retailers, restaurants, and most service businesses.</p>
            <p className="mb-4">Essentially, anywhere that customers may stand in line to check out! One of the best features of the Clover Duo is the two screens, which help keep lines moving along and make it easy for workers to complete transactions.</p>
            <p className="mb-4">The Clover Station has a 14-inch HD display for workers and a seven-inch touchscreen for guests to confirm the transaction, leave a tip, accept rewards, or request a receipt. The POS is also compact and sleek, so you can keep your business organized and attractive without using clunky systems.</p>
            <p className="mb-4">The Clover Duo also has excellent customizability, so you can adjust the system to meet your business needs. Set up handheld devices with electronic accessories like scanners and printers. Tie together multiple devices, from tablets to countertop computers.</p>
            <p className="mb-4">The flexibility of this system makes it easy to scale the POS with your business as it grows! The Clover Station is a secure and intuitive system that is easy to learn and will protect your and your customer’s data.</p>
            <p className="mb-6">The possibilities with this system are endless, as you can create loyalty programs, customize transactions, and more, putting all the POS power in your hands.</p>
            <a href="/contact-us" className="btn-green inline-block">Get This Free!</a>
          </div>
          <div className="about-image">
            <img src={cloverWorksImg} alt="How Clover Station Works" />
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  )
}

export default CloverStationDuo
