let clock = document.getElementById("clock_onclick")
clock.addEventListener("click", time_zone);
function time_zone() {

    document.getElementById("setalarmpage").style.display = "none"
 
    alarm.style.borderBottom = "transparent"
    alarm.style.color = "black"

    document.getElementById("newalarm_id").style.display = "none"
    document.getElementById("addtime_zone").style.display = "block"
    document.getElementById("clock_onclick").style.borderBottom = "2px solid red"
    document.getElementById("stopwatch_onclick").style.borderBottom = "2px solid transparent"
    document.getElementById("stopwatch_lapse_id").style.display = "none"

    document.getElementById("alarm_onclick").style.borderBottom = "2px solid transparent"

    document.getElementById("newalarm_id").classList.add("displayclass")
    document.getElementById("setalarmpage").style.display = "none"

    document.getElementById("stopwatch_box").style.display = "none"
    document.getElementById("stopwatch_btn_box").style.display = "none"
    document.getElementById("stopwatch_onclick").style.color = "black"
    document.getElementById("plus").style.display = "flex"
    clock.style.color = "red"

    let zonebox = document.getElementById("time_zone")
    zonebox.style.display = "flex"
    zonebox.classList.add("time_zone_visible")

    setInterval(delhi_time, 10);
    function delhi_time() {
        d = new Date()
        delhi_hours = d.getHours();
        delhi_mins = d.getMinutes();
        delhi_sec = d.getSeconds()
        delhi_ampm = 'am'
        if (delhi_hours > 12) {
            delhi_hours -= 12;
            delhi_ampm = 'pm'
        }
        if (delhi_hours < 10) {
            delhi_hours = '0' + delhi_hours
        }
        if (delhi_mins < 10) {
            delhi_mins = '0' + delhi_mins
        }
        document.getElementById("curr_time").innerHTML = delhi_hours + ':' + delhi_mins + ':' + delhi_sec + delhi_ampm
    }

    var my_timezones = [
        'Africa/Abidjan',
        'Africa/Accra',
        'Africa/Addis_Ababa',
        'Africa/Algiers',
        'Africa/Asmara',
        'Africa/Bamako',
        'Africa/Bangui',
        'Africa/Banjul',
        'Africa/Bissau',
        'Africa/Blantyre',
        'Africa/Brazzaville',
        'Africa/Bujumbura',
        'Africa/Cairo',
        'Africa/Casablanca',
        'Africa/Ceuta',
        'Africa/Conakry',
        'Africa/Dakar',
        'Africa/Dar_es_Salaam',
        'Africa/Djibouti',
        'Africa/Douala',
        'Africa/El_Aaiun',
        'Africa/Freetown',
        'Africa/Gaborone',
        'Africa/Harare',
        'Africa/Johannesburg',
        'Africa/Juba',
        'Africa/Kampala',
        'Africa/Khartoum',
        'Africa/Kigali',
        'Africa/Kinshasa',
        'Africa/Lagos',
        'Africa/Libreville',
        'Africa/Lome',
        'Africa/Luanda',
        'Africa/Lubumbashi',
        'Africa/Lusaka',
        'Africa/Malabo',
        'Africa/Maputo',
        'Africa/Maseru',
        'Africa/Mbabane',
        'Africa/Mogadishu',
        'Africa/Monrovia',
        'Africa/Nairobi',
        'Africa/Ndjamena',
        'Africa/Niamey',
        'Africa/Nouakchott',
        'Africa/Ouagadougou',
        'Africa/Porto-Novo',
        'Africa/Sao_Tome',
        'Africa/Tripoli',
        'Africa/Tunis',
        'Africa/Windhoek',
        'America/Adak',
        'America/Anchorage',
        'America/Anguilla',
        'America/Antigua',
        'America/Araguaina',
        'America/Buenos_Aires',
        'America/Catamarca',
        'America/Cordoba',
        'America/Jujuy',
        'America/La_Rioja',
        'America/Mendoza',
        'America/Rio_Gallegos',
        'America/Salta',
        'America/San_Juan',
        'America/San_Luis',
        'America/Tucuman',
        'America/Ushuaia',
        'America/Aruba',
        'America/Asuncion',
        'America/Atikokan',
        'America/Bahia',
        'America/Bahia_Banderas',
        'America/Barbados',
        'America/Belem',
        'America/Belize',
        'America/Blanc-Sablon',
        'America/Boa_Vista',
        'America/Bogota',
        'America/Boise',
        'America/Cambridge_Bay',
        'America/Campo_Grande',
        'America/Cancun',
        'America/Caracas',
        'America/Cayenne',
        'America/Cayman',
        'America/Chicago',
        'America/Chihuahua',
        'America/Costa_Rica',
        'America/Creston',
        'America/Cuiaba',
        'America/Curacao',
        'America/Danmarkshavn',
        'America/Dawson',
        'America/Dawson_Creek',
        'America/Denver',
        'America/Detroit',
        'America/Dominica',
        'America/Edmonton',
        'America/Eirunepe',
        'America/El_Salvador',
        'America/Fort_Nelson',
        'America/Fortaleza',
        'America/Glace_Bay',
        'America/Godthab',
        'America/Goose_Bay',
        'America/Grand_Turk',
        'America/Grenada',
        'America/Guadeloupe',
        'America/Guatemala',
        'America/Guayaquil',
        'America/Guyana',
        'America/Halifax',
        'America/Havana',
        'America/Hermosillo',
        'America/Indianapolis',
        'America/Knox',
        'America/Marengo',
        'America/Petersburg',
        'America/Tell_City',
        'America/Vevay',
        'America/Vincennes',
        'America/Winamac',
        'America/Inuvik',
        'America/Iqaluit',
        'America/Jamaica',
        'America/Juneau',
        'America/Louisville',
        'America/Monticello',
        'America/Kralendijk',
        'America/La_Paz',
        'America/Lima',
        'America/Los_Angeles',
        'America/Lower_Princes',
        'America/Maceio',
        'America/Managua',
        'America/Manaus',
        'America/Marigot',
        'America/Martinique',
        'America/Matamoros',
        'America/Mazatlan',
        'America/Menominee',
        'America/Merida',
        'America/Metlakatla',
        'America/Mexico_City',
        'America/Miquelon',
        'America/Moncton',
        'America/Monterrey',
        'America/Montevideo',
        'America/Montserrat',
        'America/Nassau',
        'America/New_York',
        'America/Nipigon',
        'America/Nome',
        'America/Noronha',
        'America/Beulah',
        'America/Center',
        'America/New_Salem',
        'America/Ojinaga',
        'America/Panama',
        'America/Pangnirtung',
        'America/Paramaribo',
        'America/Phoenix',
        'America/Port-au-Prince',
        'America/Port_of_Spain',
        'America/Porto_Velho',
        'America/Puerto_Rico',
        'America/Rainy_River',
        'America/Rankin_Inlet',
        'America/Recife',
        'America/Regina',
        'America/Resolute',
        'America/Rio_Branco',
        'America/Santa_Isabel',
        'America/Santarem',
        'America/Santiago',
        'America/Santo_Domingo',
        'America/Sao_Paulo',
        'America/Scoresbysund',
        'America/Sitka',
        'America/St_Barthelemy',
        'America/St_Johns',
        'America/St_Kitts',
        'America/St_Lucia',
        'America/St_Thomas',
        'America/St_Vincent',
        'America/Swift_Current',
        'America/Tegucigalpa',
        'America/Thule',
        'America/Thunder_Bay',
        'America/Tijuana',
        'America/Toronto',
        'America/Tortola',
        'America/Vancouver',
        'America/Whitehorse',
        'America/Winnipeg',
        'America/Yakutat',
        'America/Yellowknife',
        'Antarctica/Casey',
        'Antarctica/Davis',
        'Antarctica/DumontDUrville',
        'Antarctica/Macquarie',
        'Antarctica/Mawson',
        'Antarctica/McMurdo',
        'Antarctica/Palmer',
        'Antarctica/Rothera',
        'Antarctica/Syowa',
        'Antarctica/Troll',
        'Antarctica/Vostok',
        'Arctic/Longyearbyen',
        'Asia/Aden',
        'Asia/Almaty',
        'Asia/Amman',
        'Asia/Anadyr',
        'Asia/Aqtau',
        'Asia/Aqtobe',
        'Asia/Ashgabat',
        'Asia/Baghdad',
        'Asia/Bahrain',
        'Asia/Baku',
        'Asia/Bangkok',
        'Asia/Beirut',
        'Asia/Bishkek',
        'Asia/Brunei',
        'Asia/Chita',
        'Asia/Choibalsan',
        'Asia/Colombo',
        'Asia/Damascus',
        'Asia/Dhaka',
        'Asia/Dili',
        'Asia/Dubai',
        'Asia/Dushanbe',
        'Asia/Gaza',
        'Asia/Hebron',
        'Asia/Ho_Chi_Minh',
        'Asia/Hong_Kong',
        'Asia/Hovd',
        'Asia/Irkutsk',
        'Asia/Jakarta',
        'Asia/Jayapura',
        'Asia/Jerusalem',
        'Asia/Kabul',
        'Asia/Kamchatka',
        'Asia/Karachi',
        'Asia/Kathmandu',
        'Asia/Khandyga',
        'Asia/Kolkata',
        'Asia/Krasnoyarsk',
        'Asia/Kuala_Lumpur',
        'Asia/Kuching',
        'Asia/Kuwait',
        'Asia/Macau',
        'Asia/Magadan',
        'Asia/Makassar',
        'Asia/Manila',
        'Asia/Muscat',
        'Asia/Nicosia',
        'Asia/Novokuznetsk',
        'Asia/Novosibirsk',
        'Asia/Omsk',
        'Asia/Oral',
        'Asia/Phnom_Penh',
        'Asia/Pontianak',
        'Asia/Pyongyang',
        'Asia/Qatar',
        'Asia/Qyzylorda',
        'Asia/Rangoon',
        'Asia/Riyadh',
        'Asia/Sakhalin',
        'Asia/Samarkand',
        'Asia/Seoul',
        'Asia/Shanghai',
        'Asia/Singapore',
        'Asia/Srednekolymsk',
        'Asia/Taipei',
        'Asia/Tashkent',
        'Asia/Tbilisi',
        'Asia/Tehran',
        'Asia/Thimphu',
        'Asia/Tokyo',
        'Asia/Ulaanbaatar',
        'Asia/Urumqi',
        'Asia/Ust-Nera',
        'Asia/Vientiane',
        'Asia/Vladivostok',
        'Asia/Yakutsk',
        'Asia/Yekaterinburg',
        'Asia/Yerevan',
        'Atlantic/Azores',
        'Atlantic/Bermuda',
        'Atlantic/Canary',
        'Atlantic/Cape_Verde',
        'Atlantic/Faroe',
        'Atlantic/Madeira',
        'Atlantic/Reykjavik',
        'Atlantic/South_Georgia',
        'Atlantic/St_Helena',
        'Atlantic/Stanley',
        'Australia/Adelaide',
        'Australia/Brisbane',
        'Australia/Broken_Hill',
        'Australia/Currie',
        'Australia/Darwin',
        'Australia/Eucla',
        'Australia/Hobart',
        'Australia/Lindeman',
        'Australia/Lord_Howe',
        'Australia/Melbourne',
        'Australia/Perth',
        'Australia/Sydney',
        'Europe/Amsterdam',
        'Europe/Andorra',
        'Europe/Athens',
        'Europe/Belgrade',
        'Europe/Berlin',
        'Europe/Bratislava',
        'Europe/Brussels',
        'Europe/Bucharest',
        'Europe/Budapest',
        'Europe/Busingen',
        'Europe/Chisinau',
        'Europe/Copenhagen',
        'Europe/Dublin',
        'Europe/Gibraltar',
        'Europe/Guernsey',
        'Europe/Helsinki',
        'Europe/Isle_of_Man',
        'Europe/Istanbul',
        'Europe/Jersey',
        'Europe/Kaliningrad',
        'Europe/Kiev',
        'Europe/Lisbon',
        'Europe/Ljubljana',
        'Europe/London',
        'Europe/Luxembourg',
        'Europe/Madrid',
        'Europe/Malta',
        'Europe/Mariehamn',
        'Europe/Minsk',
        'Europe/Monaco',
        'Europe/Moscow',
        'Europe/Oslo',
        'Europe/Paris',
        'Europe/Podgorica',
        'Europe/Prague',
        'Europe/Riga',
        'Europe/Rome',
        'Europe/Samara',
        'Europe/San_Marino',
        'Europe/Sarajevo',
        'Europe/Simferopol',
        'Europe/Skopje',
        'Europe/Sofia',
        'Europe/Stockholm',
        'Europe/Tallinn',
        'Europe/Tirane',
        'Europe/Uzhgorod',
        'Europe/Vaduz',
        'Europe/Vatican',
        'Europe/Vienna',
        'Europe/Vilnius',
        'Europe/Volgograd',
        'Europe/Warsaw',
        'Europe/Zagreb',
        'Europe/Zaporozhye',
        'Europe/Zurich',
        'Indian/Antananarivo',
        'Indian/Chagos',
        'Indian/Christmas',
        'Indian/Cocos',
        'Indian/Comoro',
        'Indian/Kerguelen',
        'Indian/Mahe',
        'Indian/Maldives',
        'Indian/Mauritius',
        'Indian/Mayotte',
        'Indian/Reunion',
        'Pacific/Apia',
        'Pacific/Auckland',
        'Pacific/Bougainville',
        'Pacific/Chatham',
        'Pacific/Chuuk',
        'Pacific/Easter',
        'Pacific/Efate',
        'Pacific/Enderbury',
        'Pacific/Fakaofo',
        'Pacific/Fiji',
        'Pacific/Funafuti',
        'Pacific/Galapagos',
        'Pacific/Gambier',
        'Pacific/Guadalcanal',
        'Pacific/Guam',
        'Pacific/Honolulu',
        'Pacific/Johnston',
        'Pacific/Kiritimati',
        'Pacific/Kosrae',
        'Pacific/Kwajalein',
        'Pacific/Majuro',
        'Pacific/Marquesas',
        'Pacific/Midway',
        'Pacific/Nauru',
        'Pacific/Niue',
        'Pacific/Norfolk',
        'Pacific/Noumea',
        'Pacific/Pago_Pago',
        'Pacific/Palau',
        'Pacific/Pitcairn',
        'Pacific/Pohnpei',
        'Pacific/Port_Moresby',
        'Pacific/Rarotonga',
        'Pacific/Saipan',
        'Pacific/Tahiti',
        'Pacific/Tarawa',
        'Pacific/Tongatapu',
        'Pacific/Wake',
        'Pacific/Wallis',
        'UTC'
    ]



    for (let k = 0; k < 418; k++) {
        let li = document.createElement('li')
        let anker = document.createElement("a")
        anker.innerHTML = my_timezones[k]
        li.id = `place_id${k}`
        li.appendChild(anker)
        document.getElementById("myUL").appendChild(li)
    }
    //   console.log( document.getElementById('place_id2'))
    for (let k = 0; k < 418; k++) {
        document.getElementById(`place_id${k}`).addEventListener("click", add_timezone);
        function add_timezone() {
            console.log("ewhbh")

            disp_tz()
            function disp_tz() {
                str = new Date().toLocaleString("en-NZ", {
                    timeZone: my_timezones[k], timeZoneName: "short"

                })

                return str;
                // set(disp_tz,1000)

            }
            // function display_c(){
            //     mytime=setTimeout("disp_tz()",1000)
            // }
            let row = document.createElement("div")
            row.innerHTML = `  
               <div class="clock_timeplace">
                   <div class="clock_day_night">

                   </div>
                   <div class="timeplace">
                       <div class="place" id="city${k}" >${my_timezones[k]}</div>
                       <div class="today" >Today</div>
                   </div>
               </div>
               <div class="display_time">
               <div class="curr_time" id="insert_time${k}">${setInterval(() => {

                let str = new Date().toLocaleString("en-NZ", {
                    timeZone: my_timezones[k], timeZoneName: "short"

                })
                document.getElementById(`insert_time${k}`).innerHTML = str.slice(11, 23)

                // return str;
            }, 10)}</div> <span class="AMPM"></span>
               </div>
               <script>
               
           `
            row.id = `addtime_zone`

            //    str.slice(11,23)


            document.getElementById("addtime_zone").appendChild(row)

            document.getElementById("search_city_name_page_id").style.display = 'none'
            document.getElementById("icon_nac_bar_id").style.display = "flex"
            document.getElementById("clock_bar_id").style.display = "flex"
            document.getElementById("addtime_zone").style.display = "block"
            document.getElementById("time_zone").style.display = "flex"
        }
    }
    let add = document.getElementById("plus")
    add.addEventListener("click", displaycity)

    function displaycity() {
        document.getElementById("icon_nac_bar_id").style.display = "none"
        document.getElementById("clock_bar_id").style.display = "none"
        document.getElementById("time_zone").style.display = "none"
        // document.getElementById("setalarmpage").style.display = "none"
        document.getElementById("newalarm_id").style = "none"

        document.getElementById("addclock_cancel-id").addEventListener("click", () => {
            document.getElementById("search_city_name_page_id").style.display = 'none'
            document.getElementById("icon_nac_bar_id").style.display = "flex"
            document.getElementById("clock_bar_id").style.display = "flex"
            document.getElementById("addtime_zone").style.display = "block"
            document.getElementById("time_zone").style.display = "flex"
        })
        document.getElementById("search_city_name_page_id").style.display = 'block'
        document.getElementById("myInput").addEventListener("keyup", myFunction)
        function myFunction() {
            console.log("dsjenj")
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

    }
}










let alarm = document.getElementById("alarm_onclick")
alarm.addEventListener("click", alarm_mainfun)

function alarm_mainfun() {
    document.getElementById("stopwatch_onclick").style.borderBottom = "2px solid transparent"
    document.getElementById("alarm_onclick").style.borderBottom = "2px solid  red"
    document.getElementById("clock_onclick").style.borderBottom = "2px solid transparent"
    let addalarm = document.getElementById("addalarm_id")
    addalarm.classList.add("addalarm_visible");
    addalarm.style.display = "block"
    document.getElementById("stopwatch_box").style.display = "none"
    document.getElementById("stopwatch_btn_box").style.display = "none"
    document.getElementById("plus").style.display = "flex"
    document.getElementById("stopwatch_onclick").style.color = "black"
    document.getElementById("stopwatch_lapse_id").style.display = "none"
    let onalarm = document.getElementById("onalarm_id")
    let flag = 0;
    document.getElementById("addtime_zone").style.display = "none"
    document.getElementById("clock_onclick").style.color = "black"
    document.getElementById("setalarmpage").style.display = "block"
    onalarm.addEventListener("click", () => {
        if (flag == 0) {
            document.getElementById("alarm_time").style.color = "black"
            document.getElementById("alarm_time_info").style.color = "black"

            const currentTime = new Date();


            const targetTime = new Date();
            targetTime.setHours(6, 30, 1);


            const timeDifference = targetTime - currentTime;


            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            document.getElementById("remaining_hours").innerHTML = Math.abs(hoursDifference)
            document.getElementById("remaining_mins").innerHTML = Math.abs(minutesDifference)
            // console.log(`Current Time: ${currentTime.toLocaleTimeString()}`);
            // console.log(`Target Time: ${targetTime.toLocaleTimeString()}`);
            // console.log(`Time Difference: ${hoursDifference} hours and ${minutesDifference} minutes`);
            flag = 1;
        }

        else {
            document.getElementById("alarm_time").style.color = "#ccc"
            document.getElementById("alarm_time_info").style.color = "#ccc"

            flag = 0;
        }
    })


    alarm.style.color = "red"
    // alarm.style.borderBottom = "2px solid red"

    let plus = document.getElementById("plus")
    plus.addEventListener("click", newalarm_fun)
    let newalarm = document.getElementById("newalarm_id")
    function newalarm_fun() {

 



        addalarm.style.display="none"
        document.getElementById("clock_bar_id").style.display = "flex"
        document.getElementById("icon_nac_bar_id").style.display = "flex"

        document.getElementById("newalarm_id").style.display = "flex"
        document.getElementById("search_city_name_page_id").style.display = "none"
        document.getElementById("setalarmpage").style.display = "none"
        let save = document.getElementById("savebtn_id")
        let hour = 8;
        let min = '00';
        let ampm = "AM";
        save.addEventListener("click", addnew_alarm)
        function addnew_alarm() {
            newalarm.classList.remove("newalarm_visible")
            document.getElementById("setalarmpage").style.display = "block"
            newalarm.style.display = "none"
            addalarm.style.display = "block"
            let alarmrow = document.createElement('div')
            alarmrow.classList.add("addalarm_visible")
            alarmrow.id = "addalarm_id"
            alarmrow.innerHTML = ` 
            <div class="time" id="alarm_time">
                <div class="alarmtime aftersave">
                    <div id="alarm_hour">${hour}</div>
                    <span>:</span>
                    <div id="alarm_min">${min}</div>
                    <div id="alarm_ampm">${ampm}</div>
                    <div id="alarm_name">alarm</div>

                </div>
                <div class="onoff">
                    <label class="switch">
                        <input type="checkbox" id="onalarm_id" checked>
                        <span class="slider round"></span>
                    </label>
                </div>

            </div>
            <div class="time_info"  >
                <div class="ring_once_custom  aftersave" id="alarm_time_info">
                    <div>Ring once. &#x2223;</div>
                    <div class="remaining_time" id="remaining_time_id">Ring in ${setInterval(()=>{

                        const currentTime = new Date();


                        const targetTime = new Date();
                        targetTime.setHours(hour, min);
                        const timeDifference = targetTime - currentTime;


                        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
                        const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                        document.getElementById("remaining_time_id").innerHTML = Math.abs(hoursDifference)+' hr '+Math.abs(minutesDifference)+" min"
                       if( document.getElementById("onalarm_id").Checked){
                        document.getElementById("alarm_time").style.color="black"
                        document.getElementsByClassName("time_info").style.color="black"
                        console.log("hai")
                       }
                        // else{
                        //     document.getElementById("alarm_time").style.color="gray"
                        //     document.getElementsByClassName("time_info").style.color="gray"
                        // }
         })
        
    }</div>
                </div>
            </div>
      
            
            `


            document.getElementById("setalarmpage").prepend(alarmrow)
            // console.log(appendalarm)

        }

       
        for (let i = 1; i <= 2; i++) {
            let index = i;
            document.getElementById(`ampm_id${i}`).addEventListener('click', () => {
                // console.log(document.getElementById(`hour_id${i}`))
                document.getElementById(`ampm_id${i}`).style.color = "red"

                if (i == 1) {
                    ampm = "AM"
                    document.getElementById("update_ampm").innerHTML = "AM"
                }
                else {
                    ampm = 'PM'
                    document.getElementById("update_ampm").innerHTML = "PM"
                }
                for (let j = 1; j <= 2; j++) {
                    if (i != j) {
                        document.getElementById(`ampm_id${j}`).style.color = 'gray'
                    }
                }
            })

        }


        for (let i = 1; i <= 12; i++) {
            let index = i;
            document.getElementById(`hour_id${i}`).addEventListener('click', () => {
                // console.log(document.getElementById(`hour_id${i}`))
                document.getElementById(`hour_id${i}`).style.color = "red"
                hour = i;
                if (i < 10) {
                    hour='0'+i
                    document.getElementById("update_hour").innerHTML = '0' + i
                }
                else {
                    document.getElementById("update_hour").innerHTML = i
                }
                for (let j = 1; j <= 12; j++) {
                    if (i != j) {
                        document.getElementById(`hour_id${j}`).style.color = 'gray'
                    }
                }
            })

        }
        for (let i = 1; i <= 60; i++) {
            let index = i;
            document.getElementById(`min_id${i}`).addEventListener('click', () => {
                // console.log(document.getElementById(`hour_id${i}`))
                document.getElementById(`min_id${i}`).style.color = "red"
                min = i;
                if (i < 10) {
                    min='0'+i
                    document.getElementById("update_min").innerHTML = '0' + i
                }
                else {
                    document.getElementById("update_min").innerHTML = i
                }
                //  console.log(min)
                for (let j = 1; j <= 12; j++) {
                    if (i != j) {
                        document.getElementById(`min_id${j}`).style.color = 'gray'
                    }
                }
            })

        }




        newalarm.style.display = "inline"
        newalarm.classList.add('newalarm_visible')

        let more_btn = document.getElementById("morebtn_id")
        more_btn.addEventListener("click", morebtn_fun)
        let more_items = document.getElementById("morehidden_id")
        more_items.style.display = "none"
        function morebtn_fun() {
            more_items.style.display = "inline"
            more_items.classList.add("more_visible")
        }
        // let set_min=document.getElementsByClassName("min");
        // set_min.addEventListener("click",)


        let custom = document.getElementById("custom_id");
        custom.addEventListener("click", custom_fun)
        let repeat_custom = document.getElementById("custom_repeat_id")
        repeat_custom.style.display = "none"
        let ring = document.getElementById("ring_id")
        function custom_fun() {




            ring.style.backgroundColor = "whitesmoke"
            ring.style.color = "gray";
            custom.style.color = "white"
            repeat_custom = document.getElementById("custom_repeat_id")
            repeat_custom.style.display = "block"
            repeat_custom.classList.add("custom_repeat_visible")
            custom.style.backgroundColor = "red"
        }
        ring.addEventListener("click", ring_fun)
        function ring_fun() {
            // console.log("vvjhj")
            custom.style.backgroundColor = "whitesmoke";
            ring.style.backgroundColor = "red";
            custom.style.color = "gray";
            ring.style.color = "white"
            repeat_custom.classList.remove("custom_repeat_visible")
            repeat_custom.style.display = "none"
        }
    }
    let cancel = document.getElementById("cancel_id")
    cancel.addEventListener("click", tocancel_fun)
    function tocancel_fun() {
        newalarm.classList.remove("newalarm_visible")
        newalarm.style.display = "none"
    }

}













let stopwatch = document.getElementById('stopwatch_onclick');
stopwatch.addEventListener('click', stopwatch_mainfun)

function stopwatch_mainfun() {
    document.getElementById("stopwatch_lapse_id").style.display = "none"
    document.getElementById("stopwatch_onclick").style.borderBottom = "2px solid red"
    document.getElementById("alarm_onclick").style.borderBottom = "2px solid transparent"
    document.getElementById("clock_onclick").style.borderBottom = "2px solid transparent"
    document.getElementById("newalarm_id").style.display = "none"
    let plus = document.getElementById('plus')
    plus.style.display = "none"
    stopwatch.style.color = "red"
    document.getElementById("addtime_zone").style.display = "none"
    document.getElementById("clock_onclick").style.color = "black"
    document.getElementById("addalarm_id").style.display = "none"
    document.getElementById("alarm_onclick").style.color = "black"
    document.getElementById("stopwatch_lapse_id").style.display = "flex"
    // stopwatch.style.borderBottom = "2px solid red"

    document.getElementById("stopwatch_box").classList.add("stopwatch_box_visible");
    document.getElementById("stopwatch_box").style.display = "flex";
    document.getElementById("stopwatch_btn_box").style.display = "block"
    document.getElementById("stopwatch_lapse_id").classList.add("stopwatch_lapse_time_visible")
    document.getElementById("stopwatch_btn_box").classList.add("stopwatch_btn_visible")
    document.getElementById("stopwatch_btn_box").style.display = "flex"
    let start = document.getElementById("start_id")
    start.addEventListener("click", start_fun)
    let lap = document.getElementById("laps_id")
    let pause = document.getElementById("pause_id")
    let reset = document.getElementById("reset_id")
    let resume = document.getElementById("resume_id")
    let flag = 0;

    let lapse_time_arr = [0, 0, 0];
    function start_fun() {
        start.style.display = "none"
        lap.style.display = "flex"
        pause.style.display = "flex";
        lap.classList.add("laps_class_visible")
        pause.classList.add("pause_class_visible")
        let minutes = document.getElementById("min_id")
        let seconds = document.getElementById("sec_id")
        let milliseconds = document.getElementById("millisec_id")
        let run_milliseconds = 0;
        let run_seconds = 0;
        let run_minutes = 0;
        let flagtrue = 1;

        let interval

        interval = setInterval(run_time, 10);
        pause.addEventListener("click", pause_fun)

        function pause_fun() {
            // clearInterval(interval)
            lap.style.display = "none";
            pause.style.display = "none";
            reset.classList.add("reset_class_visible");
            resume.classList.add("resume_class_visible")
            reset.style.display = "flex";
            resume.style.display = "flex";
            flagtrue = 0;
        }

        reset.addEventListener("click", reset_fun)
        function reset_fun() {
            reset.style.display = "none";
            console.log("deep")
            run_milliseconds = 0;
            run_minutes = 0;
            run_seconds = 0;
            minutes.innerHTML = "00"
            seconds.innerHTML = '00'
            milliseconds.innerHTML = '00'
            reset.style.display = "none";
            resume.style.display = "none"
            start.style.display = "inline"
            document.getElementById("stopwatch_lapse_id").replaceChildren()
        }

        resume.addEventListener("click", resume_fun);
        function resume_fun() {
            flagtrue = 1;
            resume.style.display = "none";
            reset.style.display = "none";
            lap.style.display = "flex";
            pause.style.display = "flex";
        }

        lap.addEventListener("click", display_lapse_time)
        let sno = 0;
        function display_lapse_time() {
            sno = sno + 1;
            if (sno < 10) {
                sno = String(sno).padStart(2, '0')

                let add_span_sno = document.createElement('span');
                document.getElementById("sno_id").prepend(add_span_sno);
                add_span_sno.innerHTML = sno + "<br>";
                sno = Number(sno)

                flag = 1;

            }
            else {
                let add_span_sno = document.createElement('span');
                document.getElementById("sno_id").prepend(add_span_sno);
                add_span_sno.innerHTML = sno + "<br>";
                flag = 1;
            }

        }

        function run_time() {
            if (flag == 1) {
                let diffmin;
                let diffsec;
                let diffmillisec;

                lapse_time_fun()
            }
            if (flagtrue == 1) {
                run_milliseconds++;
                if (run_milliseconds < 10) {
                    run_milliseconds = String(run_milliseconds).padStart(2, '0')
                }
                if (run_minutes < 10) {
                    run_minutes = String(run_minutes).padStart(2, '0')
                }
                if (run_seconds < 10) {
                    run_seconds = String(run_seconds).padStart(2, '0')
                }
                minutes.innerHTML = run_minutes
                seconds.innerHTML = run_seconds

                if (run_milliseconds >= 100) {
                    run_milliseconds = 0;
                    run_seconds++;
                }
                if (run_seconds >= 60) {
                    run_seconds = 0;
                    run_minutes++;
                }
                milliseconds.innerHTML = run_milliseconds
            }

            function lapse_time_fun() {
                let diffmin;
                let diffsec;
                let diffmillisec;

                let add_span_differtime = document.createElement('span');
                document.getElementById("differ_time_id").prepend(add_span_differtime);
                diffmin = run_minutes - lapse_time_arr[0];
                diffsec = run_seconds - lapse_time_arr[1];
                diffmillisec = run_milliseconds - lapse_time_arr[2];

                if (diffsec < 10) {
                    diffsec = String(diffsec).padStart(2, '0')
                    // diffsec=Number(diffsec)
                }
                if (diffmin < 10) {
                    diffmin = String(diffmin).padStart(2, '0')
                }
                if (diffmillisec < 10) {
                    diffmillisec = diffmillisec * -1;
                }
                add_span_differtime.innerHTML = '+' + diffmin + ':' + diffsec + '.' + diffmillisec + "<br>";

                let add_span_lapsetime = document.createElement('span');
                document.getElementById("lapse_time_id").prepend(add_span_lapsetime);
                add_span_lapsetime.innerHTML = run_minutes + ':' + run_seconds + '.' + run_milliseconds + "<br>";
                flag = 0;
                lapse_time_arr = [run_minutes, run_seconds, run_milliseconds];
            }



        }
    }
}   