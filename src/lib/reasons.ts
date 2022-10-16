export const REASONS_TO_DEPLOY = [
	'กดไปสิ รออะไร',
	'คุณได้สิทธิ์นั้นเดี๋ยวนี้',
	'จัดไปเลยเพื่อน',
	'ลุย',
	'กดเลย ผมรับผิดชอบเอง 🔥',
	'ไป ไป ไป ไป!',
	'โอกาสแบบนี้ไม่ได้มีบ๊อยบ่อย',
	'ส่งฮอลคูลไป ❄️',
	'ปล่อยไปตามหัวใจ',
	'เอาเลย',
	'จัดไปแบบเบิ้มๆ',
	'โอเค',
	'ไม่มีไรหรอก แก้นิดเดียว',
	'พังก็แค่แก้ เรื่องจิ๊บๆ',
	'ไปเทสต์บน Production กันเถอะ',
	'LGTM',
	'ใส่เต็มข้อ ล่อเต็มแข้ง',
	'👍👍👍',
	'เห็นควรด้วย',
	'คนเราเกิดหนเดียว ตายหนเดียว',
	'สุดท้ายก็ต้อง Deploy อยู่ดี ไม่ต้องผัดหรอก',
	'เหนื่อยอีกแปบเดียว ถ้าเสร็จก็สบายแล้ว',
	'ไม่มีเหตุผลที่ไม่ต้อง Deploy หนิ',
	'ได้ชื่อว่า Developer ต้องเคย Nuke Prod ซักครั้งนึง',
	'ทำ OT ก็ไม่เลวนะ',
	'คนจริงสิงห์ Production',
	'ปฎิเสธได้ด้วยหรอ Business จะให้เอาขึ้น',
  	'เอาขึ้นไปก่อนละกัน',
	'ได้้ฤกษ์แล้ว ลุยยยยยย',
	'จัดไปเลยลูกพี่',
	'Prod ก็แค่ชื่อ Environment รอไรล่ะ ลุยย',
	'อย่าช้าไอ่น้อง!',
	'รีบๆหน่อยพี่รออยู่'
];

export const COMMON_REASONS_TO_NOT_DEPLOY = [
	'ยังอยากนอนอยู่ไหม?',
	'ถามเพื่อนก่อน',
	'อยากยิงยาวเรอะวันนี้?',
	'บอกหัวหน้าว่าเจอบั๊ัก แล้วกลับบ้านเถอะ',
	'ไม่แนะนำ',
	'ไม่ใช่วันนี้',
	'เอาจริงเหรอ คิดใหม่ได้นะ',
	'มั่ย',
	'ไม่ หายใจเข้าลึกๆ นับหนึ่งถึงสิบ แล้วลองใหม่',
	'ไม่แนะนำให้ Deploy วันนี้',
	'ไม่',
	'ม่ายยยยย',
	'ทำไมล่ะ?',
	'เทสต์ผ่านหรือยัง?',
	'¯\\_(ツ)_/¯',
	'😹',
	'🤯🤯🤯',
	'ไปกินไอติมดีกว่าม้าง 🍦',
	'ต่อหน้าฉันเธอทำอย่างนั้นได้อย่างไร? 🥺',
	'ใจร่มๆ นะ',
	'บ้าไปแล้วเหรอ',
	'คิดยังไง ถึงอยากทำงานวันหยุดต่อน่ะ',
	'เฮ้ย ตื่นๆ',
	'ใจเย็นๆ',
	'รับผิดชอบเองนะ',
	'อยู่ดีไม่ว่าดี',
	'อย่าทำแบบนี้เลย แบบนี้เลย',
	'ไม่รู้ ไม่รู้ ไม่รู้',
	'วันนี้ดวงกาลกิณี ไม่ควร Deploy',
	'วันหลังเหอะ',
	'Deploy วันนี้ = บาป',
	'อย่าหาทำ',
	'จะรีบไปไหน',
	'เช็คให้ดีอีกรอบไหม',
	'เบาได้เบา',
  	'ขออีกสักนิดเหอะว่ะ',
	'ไม่ไหวอย่าฝืน',
	'พระเครื่องไม่พร้อมรอเช่าใหม่ก่อนดีกว่าค่อย Deploy',
	'พักก๊อนนน',
	'ใจเย็นๆพ่อหนุ่ม หได้กลับบ้านช้าน้าา'
];

export const FRIDAY_REASONS = [
	...COMMON_REASONS_TO_NOT_DEPLOY,
	'ไม่ล่ะ วันนี้วันศุกร์นะ',
	'Deploy วันจันทร์แทนดีไหม?',
	'Deploy วันจันทร์สิ มีเวลาแก้ถึงวันศุกร์นู่น',
	'Deploy วันศุกร์ = บาป',
	'Deploy ศุกร์ ได้สนุกไปถึงวันจันทร์',
	'วันศุกร์แล้วนะ กลับบ้านเถอะ',
	'Deploy ศุกร์ ได้เปิดคอมถึงวันจันทร์เลยนะ'
];

export const WEEKEND_REASONS = [
	...COMMON_REASONS_TO_NOT_DEPLOY,
	'เมาแล้ว กลับบ้านเถอะ',
	'Deploy วันจันทร์แทนดีไหม?',
	'กินเบียร์แทนไหม?',
	'การดื่มสุราทำให้สมรรถภาพเสื่อม',
	'Deploy วันศุกร์ไปแล้วสินะ เลยต้องมาแก้วันหยุดแบบนี้ไง',
	'บอกแล้วว่า Deploy วันจันทร์ก็ไม่เชื่อ',
	'Deploy วันจันทร์สิ มีเวลาแก้ถึงวันศุกร์นู่น',
	'วันพระวันเจ้าไม่เว้นกันเล้ยยยย',
	'ถามจริง? 🤯',
	'พักก่อนเนอะ ค่อย Deploy วันทำงาน',
	'พักก่อนนนน เดี๋ยว Incident เข้าตอนดู Netflix นะ'
];
