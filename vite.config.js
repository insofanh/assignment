// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                product: resolve(__dirname, 'Blog.html'),
                detail: resolve(__dirname, 'work.html'),
                signin: resolve(__dirname, 'workdetail.html'),
                
            }
        }
    }
})