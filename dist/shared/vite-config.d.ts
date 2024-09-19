export declare const getConfig: () => {
    root: string;
    plugins: import("vite").PluginOption[][];
    build: {
        outDir: string;
        emptyOutDir: boolean;
        cssCodeSplit: boolean;
    };
    resolve: {
        preserveSymlinks: boolean;
        alias: {
            find: RegExp;
            replacement: string;
        }[];
    };
};
export default getConfig;
