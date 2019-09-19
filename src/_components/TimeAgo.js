import { format, render, cancel, register } from 'timeago.js';
export function TimeAgo(time) {
	const localeFunc = (number, index, total_sec) => {
	    return [
	      ['Vừa xong', 'right now'],
	      ['%s Giây trước', 'in %s seconds'],
	      ['1 Phút trước', 'in 1 minute'],
	      ['%s Phút trước', 'in %s minutes'],
	      ['1 hour ago', 'in 1 hour'],
	      ['%s Giờ trước', 'in %s hours'],
	      ['1 Ngày trước', 'in 1 day'],
	      ['%s Ngày trước', 'in %s days'],
	      ['1 Tuần trước', 'in 1 week'],
	      ['%s Tuần trước', 'in %s weeks'],
	      ['1 Tuần trước', 'in 1 month'],
	      ['%s Tháng trước', 'in %s months'],
	      ['1 Năm trước', 'in 1 year'],
	      ['%s Năm trước', 'in %s years']
	    ][index];
    };
    // register your locale with timeago
    register('my-locale', localeFunc);

    // use it
    // format('2016-06-12', 'my-locale');
    return format(time, 'my-locale');
}