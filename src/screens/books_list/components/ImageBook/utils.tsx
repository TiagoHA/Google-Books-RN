export const imageBookDefault =
  'https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwjqopHTx7vfAhVHj5AKHV6SCvYQjRx6BAgBEAU&url=https%3A%2F%2Fsmartmobilestudio.com%2Fdocumentation%2Fget-the-book%2F&psig=AOvVaw3IcJOpE9PasMTpprCjmIGR&ust=154584717244054'

export function cutText(text: String = '', maxLetters: number = 40) {
  if (text.length <= 0) {
    return ''
  } else if (text.length >= maxLetters) {
    return `${text.substring(0, maxLetters)}...`
  }
  return text
}
