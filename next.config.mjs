/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        /**
         * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
         * Module parse failed: Unexpected character '�' (1:0)" error
         */
        config.resolve.alias.canvas = false;

        config.module.rules.push({
            test: /\.pdf$/i,
            type: "asset/source",
        });

        return config;
    },
    env: {
        resume: "/aaron_torres_resume.pdf",
    },
};

export default nextConfig;
