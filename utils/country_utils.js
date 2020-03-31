/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
const stringUtils = require('./string_utils');

var countryData = [
	{ country: 'Afghanistan', iso2: 'AF', iso3: 'AFG', id: 4, lat: 33, long: 65 },
	{ country: 'Albania', iso2: 'AL', iso3: 'ALB', id: 8, lat: 41, long: 20 },
	{ country: 'Algeria', iso2: 'DZ', iso3: 'DZA', id: 12, lat: 28, long: 3 },
	{ country: 'American Samoa', iso2: 'AS', iso3: 'ASM', id: 16, lat: -14.3333, long: -170 },
	{ country: 'Andorra', iso2: 'AD', iso3: 'AND', id: 20, lat: 42.5, long: 1.6 },
	{ country: 'Angola', iso2: 'AO', iso3: 'AGO', id: 24, lat: -12.5, long: 18.5 },
	{ country: 'Anguilla', iso2: 'AI', iso3: 'AIA', id: 660, lat: 18.25, long: -63.1667 },
	{ country: 'Antarctica', iso2: 'AQ', iso3: 'ATA', id: 10, lat: -90, long: 0 },
	{ country: 'Antigua and Barbuda', iso2: 'AG', iso3: 'ATG', id: 28, lat: 17.05, long: -61.8 },
	{ country: 'Argentina', iso2: 'AR', iso3: 'ARG', id: 32, lat: -34, long: -64 },
	{ country: 'Armenia', iso2: 'AM', iso3: 'ARM', id: 51, lat: 40, long: 45 },
	{ country: 'Aruba', iso2: 'AW', iso3: 'ABW', id: 533, lat: 12.5, long: -69.9667 },
	{ country: 'Australia', iso2: 'AU', iso3: 'AUS', id: 36, lat: -27, long: 133 },
	{ country: 'Austria', iso2: 'AT', iso3: 'AUT', id: 40, lat: 47.3333, long: 13.3333 },
	{ country: 'Azerbaijan', iso2: 'AZ', iso3: 'AZE', id: 31, lat: 40.5, long: 47.5 },
	{ country: 'Bahamas', iso2: 'BS', iso3: 'BHS', id: 44, lat: 24.25, long: -76 },
	{ country: 'Bahrain', iso2: 'BH', iso3: 'BHR', id: 48, lat: 26, long: 50.55 },
	{ country: 'Bangladesh', iso2: 'BD', iso3: 'BGD', id: 50, lat: 24, long: 90 },
	{ country: 'Barbados', iso2: 'BB', iso3: 'BRB', id: 52, lat: 13.1667, long: -59.5333 },
	{ country: 'Belarus', iso2: 'BY', iso3: 'BLR', id: 112, lat: 53, long: 28 },
	{ country: 'Belgium', iso2: 'BE', iso3: 'BEL', id: 56, lat: 50.8333, long: 4 },
	{ country: 'Belize', iso2: 'BZ', iso3: 'BLZ', id: 84, lat: 17.25, long: -88.75 },
	{ country: 'Benin', iso2: 'BJ', iso3: 'BEN', id: 204, lat: 9.5, long: 2.25 },
	{ country: 'Bermuda', iso2: 'BM', iso3: 'BMU', id: 60, lat: 32.3333, long: -64.75 },
	{ country: 'Bhutan', iso2: 'BT', iso3: 'BTN', id: 64, lat: 27.5, long: 90.5 },
	{ country: 'Bolivia, Plurinational State of', iso2: 'BO', iso3: 'BOL', id: 68, lat: -17, long: -65 },
	{ country: 'Bolivia', iso2: 'BO', iso3: 'BOL', id: 68, lat: -17, long: -65 },
	{ country: 'Bosnia', iso2: 'BA', iso3: 'BIH', id: 70, lat: 44, long: 18, possibleNames: ['Bosnia and Herzegovina'] },
	{ country: 'Botswana', iso2: 'BW', iso3: 'BWA', id: 72, lat: -22, long: 24 },
	{ country: 'Bouvet Island', iso2: 'BV', iso3: 'BVT', id: 74, lat: -54.4333, long: 3.4 },
	{ country: 'Brazil', iso2: 'BR', iso3: 'BRA', id: 76, lat: -10, long: -55, possibleNames: ['Brasil'] },
	{ country: 'British Indian Ocean Territory', iso2: 'IO', iso3: 'IOT', id: 86, lat: -6, long: 71.5 },
	{ country: 'Brunei Darussalam', iso2: 'BN', iso3: 'BRN', id: 96, lat: 4.5, long: 114.6667 },
	{ country: 'Brunei', iso2: 'BN', iso3: 'BRN', id: 96, lat: 4.5, long: 114.6667 },
	{ country: 'Bulgaria', iso2: 'BG', iso3: 'BGR', id: 100, lat: 43, long: 25 },
	{ country: 'Burkina Faso', iso2: 'BF', iso3: 'BFA', id: 854, lat: 13, long: -2 },
	{ country: 'Burundi', iso2: 'BI', iso3: 'BDI', id: 108, lat: -3.5, long: 30 },
	{ country: 'Cambodia', iso2: 'KH', iso3: 'KHM', id: 116, lat: 13, long: 105 },
	{ country: 'Cameroon', iso2: 'CM', iso3: 'CMR', id: 120, lat: 6, long: 12 },
	{ country: 'Canada', iso2: 'CA', iso3: 'CAN', id: 124, lat: 60, long: -95 },
	{ country: 'Cabo Verde', iso2: 'CV', iso3: 'CPV', id: 132, lat: 16, long: -24, possibleNames: ['Cape Verde'] },
	{ country: 'Cayman Islands', iso2: 'KY', iso3: 'CYM', id: 136, lat: 19.5, long: -80.5 },
	{ country: 'Central African Republic', iso2: 'CF', iso3: 'CAF', id: 140, lat: 7, long: 21, possibleNames: ['CAR'] },
	{ country: 'Chad', iso2: 'TD', iso3: 'TCD', id: 148, lat: 15, long: 19 },
	{ country: 'Chile', iso2: 'CL', iso3: 'CHL', id: 152, lat: -30, long: -71 },
	{ country: 'China', iso2: 'CN', iso3: 'CHN', id: 156, lat: 35, long: 105 },
	{ country: 'Christmas Island', iso2: 'CX', iso3: 'CXR', id: 162, lat: -10.5, long: 105.6667 },
	{ country: 'Cocos (Keeling) Islands', iso2: 'CC', iso3: 'CCK', id: 166, lat: -12.5, long: 96.8333 },
	{ country: 'Colombia', iso2: 'CO', iso3: 'COL', id: 170, lat: 4, long: -72 },
	{ country: 'Comoros', iso2: 'KM', iso3: 'COM', id: 174, lat: -12.1667, long: 44.25 },
	{ country: 'Congo', iso2: 'CG', iso3: 'COG', id: 178, lat: -1, long: 15, possibleNames: ['Congo, Republic of', 'Congo (brazzaville)'] },
	{ country: 'Congo, the Democratic Republic of the', iso2: 'CD', iso3: 'COD', id: 180, lat: 0, long: 25, possibleNames: ['DRC'] },
	{ country: 'Cook Islands', iso2: 'CK', iso3: 'COK', id: 184, lat: -21.2333, long: -159.7667 },
	{ country: 'Costa Rica', iso2: 'CR', iso3: 'CRI', id: 188, lat: 10, long: -84 },
	{ country: 'Côte d\'Ivoire', iso2: 'CI', iso3: 'CIV', id: 384, lat: 8, long: -5, possibleNames: ['Ivory Coast', 'Coast D\'Ivoire'] },
	{ country: 'Croatia', iso2: 'HR', iso3: 'HRV', id: 191, lat: 45.1667, long: 15.5 },
	{ country: 'Cuba', iso2: 'CU', iso3: 'CUB', id: 192, lat: 21.5, long: -80 },
	{ country: 'Curacao', iso2: 'CW', iso3: 'CUW', id: 531, lat: 12.15, long: -68.97, possibleNames: ['Curazao', 'Curaçao', 'Curacao'] },
	{ country: 'Cyprus', iso2: 'CY', iso3: 'CYP', id: 196, lat: 35, long: 33 },
	{ country: 'Czechia', iso2: 'CZ', iso3: 'CZE', id: 203, lat: 49.75, long: 15.5, possibleNames: ['Czech Republic', 'Chequia'] },
	{ country: 'Denmark', iso2: 'DK', iso3: 'DNK', id: 208, lat: 56, long: 10 },
	{ country: 'Djibouti', iso2: 'DJ', iso3: 'DJI', id: 262, lat: 11.5, long: 43 },
	{ country: 'Dominica', iso2: 'DM', iso3: 'DMA', id: 212, lat: 15.4167, long: -61.3333 },
	{ country: 'Dominican Republic', iso2: 'DO', iso3: 'DOM', id: 214, lat: 19, long: -70.6667, possibleNames: ['DR'] },
	{ country: 'Ecuador', iso2: 'EC', iso3: 'ECU', id: 218, lat: -2, long: -77.5 },
	{ country: 'Egypt', iso2: 'EG', iso3: 'EGY', id: 818, lat: 27, long: 30 },
	{ country: 'El Salvador', iso2: 'SV', iso3: 'SLV', id: 222, lat: 13.8333, long: -88.9167 },
	{ country: 'Equatorial Guinea', iso2: 'GQ', iso3: 'GNQ', id: 226, lat: 2, long: 10 },
	{ country: 'Eritrea', iso2: 'ER', iso3: 'ERI', id: 232, lat: 15, long: 39 },
	{ country: 'Estonia', iso2: 'EE', iso3: 'EST', id: 233, lat: 59, long: 26 },
	{ country: 'Ethiopia', iso2: 'ET', iso3: 'ETH', id: 231, lat: 8, long: 38 },
	{ country: 'Ethiopia', iso2: 'ET', iso3: 'ETH', id: 231, lat: 8, long: 38 },
	{ country: 'Falkland Islands (Malvinas)', iso2: 'FK', iso3: 'FLK', id: 238, lat: -51.75, long: -59, possibleNames: ['Malvinas'] },
	{ country: 'Faroe Islands', iso2: 'FO', iso3: 'FRO', id: 234, lat: 62, long: -7, possibleNames: ['Faeroe Islands'] },
	{ country: 'Fiji', iso2: 'FJ', iso3: 'FJI', id: 242, lat: -18, long: 175 },
	{ country: 'Finland', iso2: 'FI', iso3: 'FIN', id: 246, lat: 64, long: 26 },
	{ country: 'France', iso2: 'FR', iso3: 'FRA', id: 250, lat: 46, long: 2 },
	{ country: 'French Guiana', iso2: 'GF', iso3: 'GUF', id: 254, lat: 4, long: -53 },
	{ country: 'French Polynesia', iso2: 'PF', iso3: 'PYF', id: 258, lat: -15, long: -140 },
	{ country: 'French Southern Territories', iso2: 'TF', iso3: 'ATF', id: 260, lat: -43, long: 67 },
	{ country: 'Gabon', iso2: 'GA', iso3: 'GAB', id: 266, lat: -1, long: 11.75 },
	{ country: 'Gambia', iso2: 'GM', iso3: 'GMB', id: 270, lat: 13.4667, long: -16.5667 },
	{ country: 'Georgia', iso2: 'GE', iso3: 'GEO', id: 268, lat: 42, long: 43.5 },
	{ country: 'Germany', iso2: 'DE', iso3: 'DEU', id: 276, lat: 51, long: 9 },
	{ country: 'Ghana', iso2: 'GH', iso3: 'GHA', id: 288, lat: 8, long: -2 },
	{ country: 'Gibraltar', iso2: 'GI', iso3: 'GIB', id: 292, lat: 36.1833, long: -5.3667 },
	{ country: 'Greece', iso2: 'GR', iso3: 'GRC', id: 300, lat: 39, long: 22 },
	{ country: 'Greenland', iso2: 'GL', iso3: 'GRL', id: 304, lat: 72, long: -40 },
	{ country: 'Grenada', iso2: 'GD', iso3: 'GRD', id: 308, lat: 12.1167, long: -61.6667 },
	{ country: 'Guadeloupe', iso2: 'GP', iso3: 'GLP', id: 312, lat: 16.25, long: -61.5833 },
	{ country: 'Guam', iso2: 'GU', iso3: 'GUM', id: 316, lat: 13.4667, long: 144.7833 },
	{ country: 'Guatemala', iso2: 'GT', iso3: 'GTM', id: 320, lat: 15.5, long: -90.25 },
	{ country: 'Guernsey', iso2: 'GG', iso3: 'GGY', id: 831, lat: 49.5, long: -2.56 },
	{ country: 'Guinea', iso2: 'GN', iso3: 'GIN', id: 324, lat: 11, long: -10 },
	{ country: 'Guinea-Bissau', iso2: 'GW', iso3: 'GNB', id: 624, lat: 12, long: -15 },
	{ country: 'Guyana', iso2: 'GY', iso3: 'GUY', id: 328, lat: 5, long: -59 },
	{ country: 'Haiti', iso2: 'HT', iso3: 'HTI', id: 332, lat: 19, long: -72.4167 },
	{ country: 'Heard Island and McDonald Islands', iso2: 'HM', iso3: 'HMD', id: 334, lat: -53.1, long: 72.5167 },
	{ country: 'Holy See (Vatican City State)', iso2: 'VA', iso3: 'VAT', id: 336, lat: 41.9, long: 12.45, possibleNames: ['Vatican City'] },
	{ country: 'Honduras', iso2: 'HN', iso3: 'HND', id: 340, lat: 15, long: -86.5 },
	{ country: 'Hong Kong', iso2: 'HK', iso3: 'HKG', id: 344, lat: 22.25, long: 114.1667 },
	{ country: 'Hungary', iso2: 'HU', iso3: 'HUN', id: 348, lat: 47, long: 20 },
	{ country: 'Iceland', iso2: 'IS', iso3: 'ISL', id: 352, lat: 65, long: -18 },
	{ country: 'India', iso2: 'IN', iso3: 'IND', id: 356, lat: 20, long: 77 },
	{ country: 'Indonesia', iso2: 'ID', iso3: 'IDN', id: 360, lat: -5, long: 120 },
	{ country: 'Iran', iso2: 'IR', iso3: 'IRN', id: 364, lat: 32, long: 53, possibleNames: ['Iran, Islamic Republic of'] },
	{ country: 'Iraq', iso2: 'IQ', iso3: 'IRQ', id: 368, lat: 33, long: 44 },
	{ country: 'Ireland', iso2: 'IE', iso3: 'IRL', id: 372, lat: 53, long: -8 },
	{ country: 'Isle of Man', iso2: 'IM', iso3: 'IMN', id: 833, lat: 54.23, long: -4.55 },
	{ country: 'Israel', iso2: 'IL', iso3: 'ISR', id: 376, lat: 31.5, long: 34.75 },
	{ country: 'Italy', iso2: 'IT', iso3: 'ITA', id: 380, lat: 42.8333, long: 12.8333, possibleNames: ['Italia'] },
	{ country: 'Jamaica', iso2: 'JM', iso3: 'JAM', id: 388, lat: 18.25, long: -77.5 },
	{ country: 'Japan', iso2: 'JP', iso3: 'JPN', id: 392, lat: 36, long: 138, possibleNames: ['Japón'] },
	{ country: 'Jersey', iso2: 'JE', iso3: 'JEY', id: 832, lat: 49.21, long: -2.13 },
	{ country: 'Channel Islands', iso2: 'JE', iso3: 'JEY', id: 832, lat: 49.21, long: -2.13, possibleNames: ['Jersey', 'Guernsey'] },
	{ country: 'Jordan', iso2: 'JO', iso3: 'JOR', id: 400, lat: 31, long: 36 },
	{ country: 'Kazakhstan', iso2: 'KZ', iso3: 'KAZ', id: 398, lat: 48, long: 68 },
	{ country: 'Kenya', iso2: 'KE', iso3: 'KEN', id: 404, lat: 1, long: 38 },
	{ country: 'Kiribati', iso2: 'KI', iso3: 'KIR', id: 296, lat: 1.4167, long: 173 },
	{ country: 'Kosovo', iso2: 'XK', iso3: 'RKS', id: 895, lat: 42.6, long: 20.9 },
	{ country: 'N. Korea', iso2: 'KP', iso3: 'PRK', id: 408, lat: 40, long: 127, possibleNames: ['Korea del Norte', 'North Korea', 'Korea, North', 'Democratic People\'s Republic of Korea'] },
	{ country: 'S. Korea', iso2: 'KR', iso3: 'KOR', id: 410, lat: 37, long: 127.5, possibleNames: ['Korea del Sur', 'South Korea', 'Korea, South', 'Republic of Korea'] },
	{ country: 'Kuwait', iso2: 'KW', iso3: 'KWT', id: 414, lat: 29.3375, long: 47.6581 },
	{ country: 'Kyrgyzstan', iso2: 'KG', iso3: 'KGZ', id: 417, lat: 41, long: 75 },
	{ country: 'Lao People\'s Democratic Republic', iso2: 'LA', iso3: 'LAO', id: 418, lat: 18, long: 105, possibleNames: ['Laos'] },
	{ country: 'Latvia', iso2: 'LV', iso3: 'LVA', id: 428, lat: 57, long: 25 },
	{ country: 'Lebanon', iso2: 'LB', iso3: 'LBN', id: 422, lat: 33.8333, long: 35.8333 },
	{ country: 'Lesotho', iso2: 'LS', iso3: 'LSO', id: 426, lat: -29.5, long: 28.5 },
	{ country: 'Liberia', iso2: 'LR', iso3: 'LBR', id: 430, lat: 6.5, long: -9.5 },
	{ country: 'Libyan Arab Jamahiriya', iso2: 'LY', iso3: 'LBY', id: 434, lat: 25, long: 17, possibleNames: ['Libya', 'Libia'] },
	{ country: 'Liechtenstein', iso2: 'LI', iso3: 'LIE', id: 438, lat: 47.1667, long: 9.5333 },
	{ country: 'Lithuania', iso2: 'LT', iso3: 'LTU', id: 440, lat: 56, long: 24 },
	{ country: 'Luxembourg', iso2: 'LU', iso3: 'LUX', id: 442, lat: 49.75, long: 6.1667 },
	{ country: 'Macao', iso2: 'MO', iso3: 'MAC', id: 446, lat: 22.1667, long: 113.55 },
	{ country: 'Macedonia', iso2: 'MK', iso3: 'MKD', id: 807, lat: 41.8333, long: 22, possibleNames: ['North Macedonia', 'Macedonia, the former Yugoslav Republic of'] },
	{ country: 'Madagascar', iso2: 'MG', iso3: 'MDG', id: 450, lat: -20, long: 47 },
	{ country: 'Malawi', iso2: 'MW', iso3: 'MWI', id: 454, lat: -13.5, long: 34 },
	{ country: 'Malaysia', iso2: 'MY', iso3: 'MYS', id: 458, lat: 2.5, long: 112.5 },
	{ country: 'Maldives', iso2: 'MV', iso3: 'MDV', id: 462, lat: 3.25, long: 73 },
	{ country: 'Mali', iso2: 'ML', iso3: 'MLI', id: 466, lat: 17, long: -4 },
	{ country: 'Malta', iso2: 'MT', iso3: 'MLT', id: 470, lat: 35.8333, long: 14.5833 },
	{ country: 'Marshall Islands', iso2: 'MH', iso3: 'MHL', id: 584, lat: 9, long: 168 },
	{ country: 'Martinique', iso2: 'MQ', iso3: 'MTQ', id: 474, lat: 14.6667, long: -61 },
	{ country: 'Mauritania', iso2: 'MR', iso3: 'MRT', id: 478, lat: 20, long: -12 },
	{ country: 'Mauritius', iso2: 'MU', iso3: 'MUS', id: 480, lat: -20.2833, long: 57.55 },
	{ country: 'Mayotte', iso2: 'YT', iso3: 'MYT', id: 175, lat: -12.8333, long: 45.1667 },
	{ country: 'Mexico', iso2: 'MX', iso3: 'MEX', id: 484, lat: 23, long: -102 },
	{ country: 'Micronesia, Federated States of', iso2: 'FM', iso3: 'FSM', id: 583, lat: 6.9167, long: 158.25 },
	{ country: 'Moldova, Republic of', iso2: 'MD', iso3: 'MDA', id: 498, lat: 47, long: 29, possibleNames: ['moldova'] },
	{ country: 'Monaco', iso2: 'MC', iso3: 'MCO', id: 492, lat: 43.7333, long: 7.4 },
	{ country: 'Mongolia', iso2: 'MN', iso3: 'MNG', id: 496, lat: 46, long: 105 },
	{ country: 'Montenegro', iso2: 'ME', iso3: 'MNE', id: 499, lat: 42, long: 19 },
	{ country: 'Montserrat', iso2: 'MS', iso3: 'MSR', id: 500, lat: 16.75, long: -62.2 },
	{ country: 'Morocco', iso2: 'MA', iso3: 'MAR', id: 504, lat: 32, long: -5 },
	{ country: 'Mozambique', iso2: 'MZ', iso3: 'MOZ', id: 508, lat: -18.25, long: 35 },
	{ country: 'Myanmar', iso2: 'MM', iso3: 'MMR', id: 104, lat: 22, long: 98 },
	{ country: 'Burma', iso2: 'MM', iso3: 'MMR', id: 104, lat: 22, long: 98 },
	{ country: 'Namibia', iso2: 'NA', iso3: 'NAM', id: 516, lat: -22, long: 17 },
	{ country: 'Nauru', iso2: 'NR', iso3: 'NRU', id: 520, lat: -0.5333, long: 166.9167 },
	{ country: 'Nepal', iso2: 'NP', iso3: 'NPL', id: 524, lat: 28, long: 84 },
	{ country: 'Netherlands', iso2: 'NL', iso3: 'NLD', id: 528, lat: 52.5, long: 5.75 },
	{ country: 'Netherlands Antilles', iso2: 'AN', iso3: 'ANT', id: 530, lat: 12.25, long: -68.75 },
	{ country: 'New Caledonia', iso2: 'NC', iso3: 'NCL', id: 540, lat: -21.5, long: 165.5 },
	{ country: 'New Zealand', iso2: 'NZ', iso3: 'NZL', id: 554, lat: -41, long: 174 },
	{ country: 'Nicaragua', iso2: 'NI', iso3: 'NIC', id: 558, lat: 13, long: -85 },
	{ country: 'Niger', iso2: 'NE', iso3: 'NER', id: 562, lat: 16, long: 8 },
	{ country: 'Nigeria', iso2: 'NG', iso3: 'NGA', id: 566, lat: 10, long: 8 },
	{ country: 'Niue', iso2: 'NU', iso3: 'NIU', id: 570, lat: -19.0333, long: -169.8667 },
	{ country: 'Norfolk Island', iso2: 'NF', iso3: 'NFK', id: 574, lat: -29.0333, long: 167.95 },
	{ country: 'Northern Mariana Islands', iso2: 'MP', iso3: 'MNP', id: 580, lat: 15.2, long: 145.75 },
	{ country: 'Norway', iso2: 'NO', iso3: 'NOR', id: 578, lat: 62, long: 10 },
	{ country: 'Oman', iso2: 'OM', iso3: 'OMN', id: 512, lat: 21, long: 57 },
	{ country: 'Pakistan', iso2: 'PK', iso3: 'PAK', id: 586, lat: 30, long: 70 },
	{ country: 'Palau', iso2: 'PW', iso3: 'PLW', id: 585, lat: 7.5, long: 134.5 },
	{ country: 'Palestinian Territory, Occupied', iso2: 'PS', iso3: 'PSE', id: 275, lat: 32, long: 35.25, possibleNames: ['Palestine'] },
	{ country: 'Panama', iso2: 'PA', iso3: 'PAN', id: 591, lat: 9, long: -80 },
	{ country: 'Papua New Guinea', iso2: 'PG', iso3: 'PNG', id: 598, lat: -6, long: 147 },
	{ country: 'Paraguay', iso2: 'PY', iso3: 'PRY', id: 600, lat: -23, long: -58 },
	{ country: 'Peru', iso2: 'PE', iso3: 'PER', id: 604, lat: -10, long: -76 },
	{ country: 'Philippines', iso2: 'PH', iso3: 'PHL', id: 608, lat: 13, long: 122 },
	{ country: 'Pitcairn', iso2: 'PN', iso3: 'PCN', id: 612, lat: -24.7, long: -127.4 },
	{ country: 'Poland', iso2: 'PL', iso3: 'POL', id: 616, lat: 52, long: 20 },
	{ country: 'Portugal', iso2: 'PT', iso3: 'PRT', id: 620, lat: 39.5, long: -8 },
	{ country: 'Puerto Rico', iso2: 'PR', iso3: 'PRI', id: 630, lat: 18.25, long: -66.5 },
	{ country: 'Qatar', iso2: 'QA', iso3: 'QAT', id: 634, lat: 25.5, long: 51.25 },
	{ country: 'Réunion', iso2: 'RE', iso3: 'REU', id: 638, lat: -21.1, long: 55.6, possibleNames: ['Reunion'] },
	{ country: 'Romania', iso2: 'RO', iso3: 'ROU', id: 642, lat: 46, long: 25 },
	{ country: 'Russia', iso2: 'RU', iso3: 'RUS', id: 643, lat: 60, long: 100, possibleNames: ['Russian Federation'] },
	{ country: 'Rwanda', iso2: 'RW', iso3: 'RWA', id: 646, lat: -2, long: 30 },
	{ country: 'St. Barth', iso2: 'BL', iso3: 'BLM', id: 652, lat: 17.89, long: -62.82 },
	{ country: 'Saint Helena, Ascension and Tristan da Cunha', iso2: 'SH', iso3: 'SHN', id: 654, lat: -15.9333, long: -5.7 },
	{ country: 'Saint Kitts and Nevis', iso2: 'KN', iso3: 'KNA', id: 659, lat: 17.3333, long: -62.75 },
	{ country: 'Saint Lucia', iso2: 'LC', iso3: 'LCA', id: 662, lat: 13.8833, long: -61.1333 },
	{ country: 'Saint Pierre and Miquelon', iso2: 'PM', iso3: 'SPM', id: 666, lat: 46.8333, long: -56.3333 },
	{ country: 'Saint Martin', iso2: 'MF', iso3: 'MAF', id: 663, lat: 18.11, long: -63.03 },
	{ country: 'Sint Maarten', iso2: 'SX', iso3: 'SXM', id: 534, lat: 18.02, long: -63.06 },
	{ country: 'Saint Vincent and the Grenadines', iso2: 'VC', iso3: 'VCT', id: 670, lat: 13.25, long: -61.2, possibleNames: ['Saint Vincent & the Grenadines', 'St. Vincent and the Grenadines', 'St. Vincent Grenadines'] },
	{ country: 'Samoa', iso2: 'WS', iso3: 'WSM', id: 882, lat: -13.5833, long: -172.3333 },
	{ country: 'San Marino', iso2: 'SM', iso3: 'SMR', id: 674, lat: 43.7667, long: 12.4167 },
	{ country: 'Sao Tome and Principe', iso2: 'ST', iso3: 'STP', id: 678, lat: 1, long: 7 },
	{ country: 'Saudi Arabia', iso2: 'SA', iso3: 'SAU', id: 682, lat: 25, long: 45 },
	{ country: 'Senegal', iso2: 'SN', iso3: 'SEN', id: 686, lat: 14, long: -14 },
	{ country: 'Serbia', iso2: 'RS', iso3: 'SRB', id: 688, lat: 44, long: 21 },
	{ country: 'Seychelles', iso2: 'SC', iso3: 'SYC', id: 690, lat: -4.5833, long: 55.6667 },
	{ country: 'Sierra Leone', iso2: 'SL', iso3: 'SLE', id: 694, lat: 8.5, long: -11.5 },
	{ country: 'Singapore', iso2: 'SG', iso3: 'SGP', id: 702, lat: 1.3667, long: 103.8 },
	{ country: 'Slovakia', iso2: 'SK', iso3: 'SVK', id: 703, lat: 48.6667, long: 19.5 },
	{ country: 'Slovenia', iso2: 'SI', iso3: 'SVN', id: 705, lat: 46, long: 15 },
	{ country: 'Solomon Islands', iso2: 'SB', iso3: 'SLB', id: 90, lat: -8, long: 159 },
	{ country: 'Somalia', iso2: 'SO', iso3: 'SOM', id: 706, lat: 10, long: 49 },
	{ country: 'South Africa', iso2: 'ZA', iso3: 'ZAF', id: 710, lat: -29, long: 24 },
	{ country: 'South Georgia and the South Sandwich Islands', iso2: 'GS', iso3: 'SGS', id: 239, lat: -54.5, long: -37 },
	{ country: 'Spain', iso2: 'ES', iso3: 'ESP', id: 724, lat: 40, long: -4, possibleNames: ['España'] },
	{ country: 'Sri Lanka', iso2: 'LK', iso3: 'LKA', id: 144, lat: 7, long: 81 },
	{ country: 'Sudan', iso2: 'SD', iso3: 'SDN', id: 736, lat: 15, long: 30 },
	{ country: 'Suriname', iso2: 'SR', iso3: 'SUR', id: 740, lat: 4, long: -56 },
	{ country: 'Svalbard and Jan Mayen', iso2: 'SJ', iso3: 'SJM', id: 744, lat: 78, long: 20 },
	{ country: 'Swaziland', iso2: 'SZ', iso3: 'SWZ', id: 748, lat: -26.5, long: 31.5, possibleNames: ['Esuatini', 'Eswatini'] },
	{ country: 'Sweden', iso2: 'SE', iso3: 'SWE', id: 752, lat: 62, long: 15 },
	{ country: 'Switzerland', iso2: 'CH', iso3: 'CHE', id: 756, lat: 47, long: 8 },
	{ country: 'Syrian Arab Republic', iso2: 'SY', iso3: 'SYR', id: 760, lat: 35, long: 38, possibleNames: ['Syria'] },
	{ country: 'Taiwan, Province of China', iso2: 'TW', iso3: 'TWN', id: 158, lat: 23.5, long: 121 },
	{ country: 'Taiwan', iso2: 'TW', iso3: 'TWN', id: 158, lat: 23.5, long: 121 },
	{ country: 'Tajikistan', iso2: 'TJ', iso3: 'TJK', id: 762, lat: 39, long: 71 },
	{ country: 'Tanzania, United Republic of', iso2: 'TZ', iso3: 'TZA', id: 834, lat: -6, long: 35, possibleNames: ['Tanzania'] },
	{ country: 'Thailand', iso2: 'TH', iso3: 'THA', id: 764, lat: 15, long: 100 },
	{ country: 'Timor-Leste', iso2: 'TL', iso3: 'TLS', id: 626, lat: -8.55, long: 125.5167 },
	{ country: 'Togo', iso2: 'TG', iso3: 'TGO', id: 768, lat: 8, long: 1.1667 },
	{ country: 'Tokelau', iso2: 'TK', iso3: 'TKL', id: 772, lat: -9, long: -172 },
	{ country: 'Tonga', iso2: 'TO', iso3: 'TON', id: 776, lat: -20, long: -175 },
	{ country: 'Trinidad and Tobago', iso2: 'TT', iso3: 'TTO', id: 780, lat: 11, long: -61, possibleNames: ['Trinidad & Tobago'] },
	{ country: 'Tunisia', iso2: 'TN', iso3: 'TUN', id: 788, lat: 34, long: 9 },
	{ country: 'Turkey', iso2: 'TR', iso3: 'TUR', id: 792, lat: 39, long: 35 },
	{ country: 'Turkmenistan', iso2: 'TM', iso3: 'TKM', id: 795, lat: 40, long: 60 },
	{ country: 'Turks and Caicos Islands', iso2: 'TC', iso3: 'TCA', id: 796, lat: 21.75, long: -71.5833, possibleNames: ['Turks and Caicos'] },
	{ country: 'Tuvalu', iso2: 'TV', iso3: 'TUV', id: 798, lat: -8, long: 178 },
	{ country: 'Uganda', iso2: 'UG', iso3: 'UGA', id: 800, lat: 1, long: 32 },
	{ country: 'Ukraine', iso2: 'UA', iso3: 'UKR', id: 804, lat: 49, long: 32 },
	{ country: 'UAE', iso2: 'AE', iso3: 'ARE', id: 784, lat: 24, long: 54, possibleNames: ['United Arab Emirates'] },
	{ country: 'UK', iso2: 'GB', iso3: 'GBR', id: 826, lat: 54, long: -2, possibleNames: ['England', 'United Kingdom'] },
	{ country: 'USA', iso2: 'US', iso3: 'USA', id: 840, lat: 38, long: -97, possibleNames: ['USA', 'America', 'Estados Unidos', 'United States of America'] },
	{ country: 'United States Minor Outlying Islands', iso2: 'UM', iso3: 'UMI', id: 581, lat: 19.2833, long: 166.6 },
	{ country: 'Uruguay', iso2: 'UY', iso3: 'URY', id: 858, lat: -33, long: -56 },
	{ country: 'Uzbekistan', iso2: 'UZ', iso3: 'UZB', id: 860, lat: 41, long: 64 },
	{ country: 'Vanuatu', iso2: 'VU', iso3: 'VUT', id: 548, lat: -16, long: 167 },
	{ country: 'Venezuela, Bolivarian Republic of', iso2: 'VE', iso3: 'VEN', id: 862, lat: 8, long: -66, possibleNames: ['Venezuela'] },
	{ country: 'Vietnam', iso2: 'VN', iso3: 'VNM', id: 704, lat: 16, long: 106, possibleNames: ['Viet Nam'] },
	{ country: 'British Virgin Islands', iso2: 'VG', iso3: 'VGB', id: 92, lat: 18.5, long: -64.5, possibleNames: ['Virgin Islands, British'] },
	{ country: 'U.S. Virgin Islands', iso2: 'VI', iso3: 'VIR', id: 850, lat: 18.3333, long: -64.8333, possibleNames: ['Virgin Islands'] },
	{ country: 'Wallis and Futuna', iso2: 'WF', iso3: 'WLF', id: 876, lat: -13.3, long: -176.2 },
	{ country: 'Western Sahara', iso2: 'EH', iso3: 'ESH', id: 732, lat: 24.5, long: -13 },
	{ country: 'Yemen', iso2: 'YE', iso3: 'YEM', id: 887, lat: 15, long: 48 },
	{ country: 'Zambia', iso2: 'ZM', iso3: 'ZMB', id: 894, lat: -15, long: 30 },
	{ country: 'Zimbabwe', iso2: 'ZW', iso3: 'ZWE', id: 716, lat: -20, long: 30 }
];

/**
 * Get iso2 code from country name
 * @param {string} countryName country name
 * @returns {string}
 */
const getCountryCode = (countryName) => {
	countryData.forEach((element) => {
		if (element.country.toLowerCase() === countryName.toLowerCase()) {
			return element.iso2;
		}
		return true;
	});
	return null;
};

/**
 * Get country name from iso2 code
 * @param {string} countryCode ios2 country code
 * @returns {string}
 */
const getCountryName = (countryCode) => {
	countryData.forEach((element) => {
		if (element.iso2.toLowerCase() === countryCode.toLowerCase()) {
			return element.country;
		}
		return true;
	});
	return null;
};

const getCountryData = (countryNameParam) => {
	const countryName = stringUtils.wordsStandardize(countryNameParam);
	const nullReturn = {
		_id: null,
		country: null,
		iso2: null,
		iso3: null,
		lat: 0,
		long: 0,
		flag: 'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/unknow.png'
	};

	const countryFound = countryData.find(item => {
		if (stringUtils.wordsStandardize(item.country) === countryName
			|| stringUtils.wordsStandardize(item.iso2) === countryName
			|| stringUtils.wordsStandardize(item.iso3) === countryName
			|| item.id === parseInt(countryName)) {
			return true;
		}
		// @buster95: PLEASE DON'T MODIFY THIS CODE
		const synonyms = item.possibleNames ? item.possibleNames : [];
		for (let index = 0; index < synonyms.length; index++) {
			const synonym = synonyms[index];
			if (stringUtils.wordsStandardize(synonym) === countryName) {
				return true;
			}
		}
		return false;
	});

	if (countryFound) {
		return {
			_id: countryFound.id,
			country: countryFound.country,
			iso2: countryFound.iso2,
			iso3: countryFound.iso3,
			lat: countryFound.lat,
			long: countryFound.long,
			flag: `https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/${countryFound.iso2.toLowerCase()}.png`
		};
	}
	return nullReturn;
};

const searchesExcepted = ['UK', 'UAE', 'DR'];
const isCountryException = (value) => {
	for (let index = 0; index < searchesExcepted.length; index++) {
		if (stringUtils.wordsStandardize(value) === stringUtils.wordsStandardize(searchesExcepted[index])) {
			return true;
		}
	}
	return false;
};

module.exports = {
	getCountryCode,
	getCountryName,
	getCountryData,
	isCountryException
};
