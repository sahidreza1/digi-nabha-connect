# Nabha Digital Learning Platform

A professional, responsive website for rural education in Punjab, built with pure HTML, CSS, and JavaScript.

## Files Included

- `index.html` - Main website page
- `styles.css` - All styling and design system
- `script.js` - Interactive functionality
- `README.md` - This file

## How to Use

1. **Download all files** to your local device
2. **Open `index.html`** in any web browser
3. **No server required** - works offline!

## Adding Class-Specific Pages

To add individual class pages, modify the `navigateToClass()` function in `script.js`:

### Option 1: Separate HTML Files
```javascript
function navigateToClass(grade) {
    window.location.href = `class-${grade}.html`;
}
```
Then create files like: `class-6.html`, `class-7.html`, etc.

### Option 2: External Links
```javascript
function navigateToClass(grade) {
    window.open(`https://your-platform.com/class-${grade}`, '_blank');
}
```

### Option 3: Query Parameters
```javascript
function navigateToClass(grade) {
    window.location.href = `index.html?class=${grade}`;
}
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #3b82f6;
    --secondary: #10b981;
    --accent: #f59e0b;
}
```

### Content
- **Classes**: Modify the `classData` array in `script.js`
- **Features**: Modify the `features` array in `script.js`
- **Contact Info**: Edit the footer section in `index.html`

### Images
Replace the hero image URL in `index.html`:
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

## Browser Compatibility

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- No build process required

## Mobile Responsive

The design is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Features

✅ Professional educational design  
✅ Class selection (6-12)  
✅ Feature highlights  
✅ Contact information  
✅ Smooth animations  
✅ Mobile responsive  
✅ SEO optimized  
✅ Offline capable  
✅ Fast loading  

## Support

For customizations or additional features, you can:
1. Edit the CSS for styling changes
2. Modify JavaScript for functionality
3. Add new HTML sections as needed

The code is clean, commented, and easy to understand!