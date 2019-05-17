	// thanks to @Roman from StackOverflow
export const throttle = (callback, limit) => {
	let timeoutHandler = 'null'
	return (...args) => {
		if (timeoutHandler === 'null') {
		  timeoutHandler = setTimeout(() => {            
		    callback(...args)
		    timeoutHandler = 'null'
		  }, limit)
		}
	}
}