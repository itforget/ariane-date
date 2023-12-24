/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Adicione a regra para lidar com arquivos de áudio
        config.module.rules.push({
          test: /\.(mp3|wav)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'static/audio', // Onde os arquivos de áudio serão armazenados no diretório 'public'
                publicPath: '/_next/static/audio', // Caminho público para os arquivos de áudio
              },
            },
          ],
        });
    
        // Se estiver no lado do servidor (server-side rendering), precisamos dizer ao Webpack para não processar arquivos de áudio no servidor
        if (!isServer) {
          config.resolve.fallback.fs = false;
        }
    
        return config;
      },
}

module.exports = nextConfig
