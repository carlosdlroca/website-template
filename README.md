# website-template

> A Basic Website Template with Sass/Scss support

## Generate Template

Click the "Use this template" button at the top or below to generate a template of this repository

<button style="background:#2CBE4E; border:none; padding: 9px; border-radius: 5px">
    <a href="/carlosdlroca/website-template/generate" style="color: white">Use This template</a>
</button>

### Stylesheets

There are some placeholder files in the **/layout**, **/pages**, **/themes**, and **/vendors** folders within the sass directory. Replace those with your own files or delete those directories if you dont use them.

#### CSS only

If you only need to use CSS, then delete the imports in the main.scss file and replace them with your css. You will still be able to use

### How to change favicon

Whenever you need to change the favicon icon, replace the default one in the public folder with your own icon, and update the favicon option for the HtmlWebpackPlugin in both the webpack.config and webpack.production files

```javascript
// from
HtmlWebpackPlugin({
    // ... other options
    favicon: path.join(__dirname, "public/icon.svg")
});
/*----------------------------------------------------*/
// to
HtmlWebpackPlugin({
    // ... other options
    favicon: path.join(__dirname, `public/NAME_OF_YOUR_ICON`)
});
```
