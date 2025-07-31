/**
 * 实用工具函数库
 */

// 格式化日期
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  const formats = {
    'YYYY-MM-DD': `${year}-${month}-${day}`,
    'YYYY/MM/DD': `${year}/${month}/${day}`,
    'MM/DD/YYYY': `${month}/${day}/${year}`,
    'YYYY-MM-DD HH:mm:ss': `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
    'MM-DD HH:mm': `${month}-${day} ${hours}:${minutes}`
  }

  return formats[format] || formats['YYYY-MM-DD']
}

// 防抖函数
export function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

// 节流函数
export function throttle(func, limit) {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 深拷贝
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (typeof obj === 'object') {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

// 生成随机ID
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// 获取URL参数
export function getUrlParams(url = window.location.href) {
  const params = new URLSearchParams(new URL(url).search)
  const result = {}
  for (const [key, value] of params) {
    result[key] = value
  }
  return result
}

// 存储相关
export const storage = {
  // 设置 localStorage
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('localStorage set error:', error)
    }
  },

  // 获取 localStorage
  get(key, defaultValue = null) {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch (error) {
      console.error('localStorage get error:', error)
      return defaultValue
    }
  },

  // 删除 localStorage
  remove(key) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('localStorage remove error:', error)
    }
  },

  // 清空 localStorage
  clear() {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('localStorage clear error:', error)
    }
  }
}

// 数字格式化
export function formatNumber(num, precision = 2) {
  if (isNaN(num)) return '0'
  
  if (num >= 1e9) {
    return (num / 1e9).toFixed(precision) + 'B'
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(precision) + 'M'
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(precision) + 'K'
  }
  
  return num.toString()
}

// 验证相关
export const validate = {
  // 邮箱验证
  email(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  },

  // 手机号验证（中国）
  phone(phone) {
    const re = /^1[3-9]\d{9}$/
    return re.test(phone)
  },

  // 身份证验证（简单）
  idCard(idCard) {
    const re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    return re.test(idCard)
  },

  // URL验证
  url(url) {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }
}

// 设备检测
export const device = {
  // 是否为移动设备
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },

  // 是否为iOS
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  },

  // 是否为Android
  isAndroid() {
    return /Android/.test(navigator.userAgent)
  },

  // 获取浏览器信息
  getBrowser() {
    const ua = navigator.userAgent
    if (ua.includes('Chrome')) return 'Chrome'
    if (ua.includes('Firefox')) return 'Firefox'
    if (ua.includes('Safari')) return 'Safari'
    if (ua.includes('Edge')) return 'Edge'
    return 'Unknown'
  }
}