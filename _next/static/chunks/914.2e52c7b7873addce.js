(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [914], {
        50914: function(e, t, f) {
            "use strict";
            f.r(t), f.d(t, {
                getClientSideQuoteResult: function() {
                    return nt
                }
            });
            var n, a, i, r, s, o, d, u, c, l, p, h, b, y, m, T, I = f(21076),
                g = f(40516),
                v = f(74001),
                C = f.n(v),
                E = f(95356);
            class A {
                constructor(e) {
                    this.nodeCache = e
                }
                async get(e) {
                    return this.nodeCache.get(e)
                }
                async set(e, t) {
                    return this.nodeCache.set(e, t)
                }
                async has(e) {
                    return this.nodeCache.has(e)
                }
            }
            let S = new class {
                constructor() {
                    this.ERROR_MESSAGE = 'NullLogger does not support. Instantiate a valid logger using "setGlobalLogger"', this.src = !0
                }
                addStream(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                addSerializers(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                child(e, t) {
                    return this
                }
                reopenFileStreams() {
                    throw Error(this.ERROR_MESSAGE)
                }
                level(e) {}
                levels(e, t) {}
                trace(...e) {
                    return !0
                }
                debug(...e) {
                    return !0
                }
                info(...e) {
                    return !0
                }
                warn(...e) {
                    return !0
                }
                error(...e) {
                    return !0
                }
                fatal(...e) {
                    return !0
                }
                addListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                on(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                once(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                removeListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                off(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                removeAllListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                setMaxListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                getMaxListeners() {
                    throw Error(this.ERROR_MESSAGE)
                }
                listeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                rawListeners(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                emit(e, ...t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                listenerCount(e) {
                    throw Error(this.ERROR_MESSAGE)
                }
                prependListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                prependOnceListener(e, t) {
                    throw Error(this.ERROR_MESSAGE)
                }
                eventNames() {
                    throw Error(this.ERROR_MESSAGE)
                }
            };
            class O {
                constructor(e, t, f) {
                    this.chainId = e, this.gasPriceProvider = t, this.cache = f, this.GAS_KEY = e => `gasPrice-${e}`
                }
                async getGasPrice() {
                    let e = await this.cache.get(this.GAS_KEY(this.chainId));
                    if (e) return S.info({
                        cachedGasPrice: e
                    }, `Got gas station price from local cache: ${e.gasPriceWei}.`), e;
                    S.info("Gas station price local cache miss.");
                    let t = await this.gasPriceProvider.getGasPrice();
                    return await this.cache.set(this.GAS_KEY(this.chainId), t), t
                }
            }
            var k = f(81630),
                w = f.n(k),
                P = f(2890),
                M = f.n(P);
            (n = c || (c = {})).Seconds = "Seconds", n.Microseconds = "Microseconds", n.Milliseconds = "Milliseconds", n.Bytes = "Bytes", n.Kilobytes = "Kilobytes", n.Megabytes = "Megabytes", n.Gigabytes = "Gigabytes", n.Terabytes = "Terabytes", n.Bits = "Bits", n.Kilobits = "Kilobits", n.Megabits = "Megabits", n.Gigabits = "Gigabits", n.Terabits = "Terabits", n.Percent = "Percent", n.Count = "Count", n.BytesPerSecond = "Bytes/Second", n.KilobytesPerSecond = "Kilobytes/Second", n.MegabytesPerSecond = "Megabytes/Second", n.GigabytesPerSecond = "Gigabytes/Second", n.TerabytesPerSecond = "Terabytes/Second", n.BitsPerSecond = "Bits/Second", n.KilobitsPerSecond = "Kilobits/Second", n.MegabitsPerSecond = "Megabits/Second", n.GigabitsPerSecond = "Gigabits/Second", n.TerabitsPerSecond = "Terabits/Second", n.CountPerSecond = "Count/Second", n.None = "None";
            class x {}
            let R = new class extends x {
                constructor(e) {
                    super(), this.log = S.child(e || {})
                }
                setProperty(e, t) {
                    this.log = this.log.child({
                        [e]: t
                    })
                }
                putDimensions(e) {
                    this.log = this.log.child(e)
                }
                putMetric(e, t, f) {
                    this.log.info({
                        key: e,
                        value: t,
                        unit: f
                    }, `[Metric]: ${e}: ${t} | ${f||""}`)
                }
            };
            class D {
                constructor(e, t, f) {
                    this.tokenCache = f, this.CACHE_KEY = e => `token-list-token-${this.chainId}/${this.tokenList.name}/${this.tokenList.timestamp}/${this.tokenList.version}/${e.address.toLowerCase()}/${e.decimals}/${e.symbol}/${e.name}`, this.chainId = e, this.tokenList = t, this.chainToTokenInfos = M().reduce(this.tokenList.tokens, (e, t) => {
                        let f = t.chainId.toString();
                        return e[f] || (e[f] = []), e[f].push(t), e
                    }, {}), this.chainSymbolToTokenInfo = M().mapValues(this.chainToTokenInfos, e => M().keyBy(e, "symbol")), this.chainAddressToTokenInfo = M().mapValues(this.chainToTokenInfos, e => M().keyBy(e, e => e.address.toLowerCase()))
                }
                static async fromTokenListURI(e, t, f) {
                    let n = Date.now(),
                        a = await this.buildTokenList(t);
                    return R.putMetric("TokenListLoad", Date.now() - n, c.Milliseconds), new D(e, a, f)
                }
                static async buildTokenList(e) {
                    S.info(`Getting tokenList from ${e}.`);
                    let t = await w().get(e);
                    S.info(`Got tokenList from ${e}.`);
                    let {
                        data: f,
                        status: n
                    } = t;
                    if (200 != n) throw S.error({
                        response: t
                    }, `Unabled to get token list from ${e}.`), Error(`Unable to get token list from ${e}`);
                    return f
                }
                static async fromTokenList(e, t, f) {
                    let n = Date.now(),
                        a = new D(e, t, f);
                    return R.putMetric("TokenListLoad", Date.now() - n, c.Milliseconds), a
                }
                async getTokens(e) {
                    let t = {},
                        f = {};
                    for (let n of e) {
                        let e = await this.getTokenByAddress(n);
                        e && (t[n.toLowerCase()] = e, e.symbol && (f[e.symbol.toLowerCase()] = e))
                    }
                    return {
                        getTokenByAddress: e => t[e.toLowerCase()],
                        getTokenBySymbol: e => f[e.toLowerCase()],
                        getAllTokens: () => Object.values(t)
                    }
                }
                async getTokenBySymbol(e) {
                    let t = e;
                    if ("ETH" == e && (t = "WETH"), !this.chainSymbolToTokenInfo[this.chainId.toString()]) return;
                    let f = this.chainSymbolToTokenInfo[this.chainId.toString()][t];
                    if (!f) return;
                    let n = await this.buildToken(f);
                    return n
                }
                async getTokenByAddress(e) {
                    if (!this.chainAddressToTokenInfo[this.chainId.toString()]) return;
                    let t = this.chainAddressToTokenInfo[this.chainId.toString()][e.toLowerCase()];
                    if (!t) return;
                    let f = await this.buildToken(t);
                    return f
                }
                async buildToken(e) {
                    let t = this.CACHE_KEY(e),
                        f = await this.tokenCache.get(t);
                    if (f) return f;
                    let n = new E.Token(this.chainId, e.address, e.decimals, e.symbol, e.name);
                    return await this.tokenCache.set(t, n), n
                }
            }
            var B = f(38304);
            f(25566), E.ChainId.MAINNET, E.ChainId.OPTIMISM, E.ChainId.OPTIMISM_GOERLI, E.ChainId.ARBITRUM_ONE, E.ChainId.ARBITRUM_GOERLI, E.ChainId.POLYGON, E.ChainId.POLYGON_MUMBAI, E.ChainId.GOERLI, E.ChainId.SEPOLIA, E.ChainId.CELO_ALFAJORES, E.ChainId.CELO, E.ChainId.BNB, E.ChainId.AVALANCHE, E.ChainId.BASE;
            let L = [E.ChainId.MAINNET, E.ChainId.GOERLI, E.ChainId.SEPOLIA],
                _ = [E.ChainId.OPTIMISM, E.ChainId.OPTIMISM_GOERLI, E.ChainId.ARBITRUM_ONE, E.ChainId.ARBITRUM_GOERLI, E.ChainId.BASE, E.ChainId.BASE_GOERLI],
                N = [E.ChainId.MAINNET, E.ChainId.GOERLI, E.ChainId.OPTIMISM, E.ChainId.ARBITRUM_ONE, E.ChainId.POLYGON, E.ChainId.POLYGON_MUMBAI],
                F = e => {
                    switch (e) {
                        case 1:
                            return E.ChainId.MAINNET;
                        case 5:
                            return E.ChainId.GOERLI;
                        case 11155111:
                            return E.ChainId.SEPOLIA;
                        case 56:
                            return E.ChainId.BNB;
                        case 10:
                            return E.ChainId.OPTIMISM;
                        case 420:
                            return E.ChainId.OPTIMISM_GOERLI;
                        case 42161:
                            return E.ChainId.ARBITRUM_ONE;
                        case 421613:
                            return E.ChainId.ARBITRUM_GOERLI;
                        case 137:
                            return E.ChainId.POLYGON;
                        case 80001:
                            return E.ChainId.POLYGON_MUMBAI;
                        case 42220:
                            return E.ChainId.CELO;
                        case 44787:
                            return E.ChainId.CELO_ALFAJORES;
                        case 100:
                            return E.ChainId.GNOSIS;
                        case 1284:
                            return E.ChainId.MOONBEAM;
                        case 43114:
                            return E.ChainId.AVALANCHE;
                        case 8453:
                            return E.ChainId.BASE;
                        case 84531:
                            return E.ChainId.BASE_GOERLI;
                        default:
                            throw Error(`Unknown chain id: ${e}`)
                    }
                };
            (a = l || (l = {})).MAINNET = "mainnet", a.GOERLI = "goerli", a.SEPOLIA = "sepolia", a.OPTIMISM = "optimism-mainnet", a.OPTIMISM_GOERLI = "optimism-goerli", a.ARBITRUM_ONE = "arbitrum-mainnet", a.ARBITRUM_GOERLI = "arbitrum-goerli", a.POLYGON = "polygon-mainnet", a.POLYGON_MUMBAI = "polygon-mumbai", a.CELO = "celo-mainnet", a.CELO_ALFAJORES = "celo-alfajores", a.GNOSIS = "gnosis-mainnet", a.MOONBEAM = "moonbeam-mainnet", a.BNB = "bnb-mainnet", a.AVALANCHE = "avalanche-mainnet", a.BASE = "base-mainnet", a.BASE_GOERLI = "base-goerli", (i = p || (p = {})).ETHER = "ETH", i.MATIC = "MATIC", i.CELO = "CELO", i.GNOSIS = "XDAI", i.MOONBEAM = "GLMR", i.BNB = "BNB", i.AVALANCHE = "AVAX", E.ChainId.MAINNET, E.ChainId.GOERLI, E.ChainId.SEPOLIA, E.ChainId.OPTIMISM, E.ChainId.OPTIMISM_GOERLI, E.ChainId.ARBITRUM_ONE, E.ChainId.ARBITRUM_GOERLI, E.ChainId.POLYGON, E.ChainId.POLYGON_MUMBAI, E.ChainId.CELO, E.ChainId.CELO_ALFAJORES, E.ChainId.GNOSIS, E.ChainId.MOONBEAM, E.ChainId.BNB, E.ChainId.AVALANCHE, E.ChainId.BASE, E.ChainId.MAINNET, p.ETHER, E.ChainId.GOERLI, p.ETHER, E.ChainId.SEPOLIA, p.ETHER, E.ChainId.OPTIMISM, p.ETHER, E.ChainId.OPTIMISM_GOERLI, p.ETHER, E.ChainId.ARBITRUM_ONE, p.ETHER, E.ChainId.ARBITRUM_GOERLI, p.ETHER, E.ChainId.POLYGON, p.MATIC, E.ChainId.POLYGON_MUMBAI, p.MATIC, E.ChainId.CELO, p.CELO, E.ChainId.CELO_ALFAJORES, p.CELO, E.ChainId.GNOSIS, p.GNOSIS, E.ChainId.MOONBEAM, p.MOONBEAM, E.ChainId.BNB, p.BNB, E.ChainId.AVALANCHE, p.AVALANCHE, E.ChainId.BASE, p.ETHER;
            let U = e => {
                switch (e) {
                    case 1:
                        return l.MAINNET;
                    case 5:
                        return l.GOERLI;
                    case 11155111:
                        return l.SEPOLIA;
                    case 56:
                        return l.BNB;
                    case 10:
                        return l.OPTIMISM;
                    case 420:
                        return l.OPTIMISM_GOERLI;
                    case 42161:
                        return l.ARBITRUM_ONE;
                    case 421613:
                        return l.ARBITRUM_GOERLI;
                    case 137:
                        return l.POLYGON;
                    case 80001:
                        return l.POLYGON_MUMBAI;
                    case 42220:
                        return l.CELO;
                    case 44787:
                        return l.CELO_ALFAJORES;
                    case 100:
                        return l.GNOSIS;
                    case 1284:
                        return l.MOONBEAM;
                    case 43114:
                        return l.AVALANCHE;
                    case 8453:
                        return l.BASE;
                    case 84531:
                        return l.BASE_GOERLI;
                    default:
                        throw Error(`Unknown chain id: ${e}`)
                }
            };
            Object.values(E.ChainId).map(e => e.toString());
            let G = {
                [E.ChainId.MAINNET]: new E.Token(1, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.GOERLI]: new E.Token(5, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.SEPOLIA]: new E.Token(11155111, "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.BNB]: new E.Token(56, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB"),
                [E.ChainId.OPTIMISM]: new E.Token(E.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.OPTIMISM_GOERLI]: new E.Token(E.ChainId.OPTIMISM_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.ARBITRUM_ONE]: new E.Token(E.ChainId.ARBITRUM_ONE, "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.ARBITRUM_GOERLI]: new E.Token(E.ChainId.ARBITRUM_GOERLI, "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.POLYGON]: new E.Token(E.ChainId.POLYGON, "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", 18, "WMATIC", "Wrapped MATIC"),
                [E.ChainId.POLYGON_MUMBAI]: new E.Token(E.ChainId.POLYGON_MUMBAI, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", 18, "WMATIC", "Wrapped MATIC"),
                [E.ChainId.CELO]: new E.Token(E.ChainId.CELO, "0x471EcE3750Da237f93B8E339c536989b8978a438", 18, "CELO", "Celo native asset"),
                [E.ChainId.CELO_ALFAJORES]: new E.Token(E.ChainId.CELO_ALFAJORES, "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9", 18, "CELO", "Celo native asset"),
                [E.ChainId.GNOSIS]: new E.Token(E.ChainId.GNOSIS, "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d", 18, "WXDAI", "Wrapped XDAI on Gnosis"),
                [E.ChainId.MOONBEAM]: new E.Token(E.ChainId.MOONBEAM, "0xAcc15dC74880C9944775448304B263D191c6077F", 18, "WGLMR", "Wrapped GLMR"),
                [E.ChainId.AVALANCHE]: new E.Token(E.ChainId.AVALANCHE, "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", 18, "WAVAX", "Wrapped AVAX"),
                [E.ChainId.BASE]: new E.Token(E.ChainId.BASE, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"),
                [E.ChainId.BASE_GOERLI]: new E.Token(E.ChainId.BASE_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether")
            };
            class q extends E.Ether {
                get wrapped() {
                    if (this.chainId in G) return G[this.chainId];
                    throw Error("Unsupported chain ID")
                }
                static onChain(e) {
                    var t;
                    return null !== (t = this._cachedExtendedEther[e]) && void 0 !== t ? t : this._cachedExtendedEther[e] = new q(e)
                }
            }
            q._cachedExtendedEther = {}, E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].tickLensAddress, E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].nonfungiblePositionManagerAddress;
            let $ = E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].swapRouter02Address;
            E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].v3MigratorAddress;
            let V = { ...Y(B.FACTORY_ADDRESS),
                    [E.ChainId.CELO]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO].v3CoreFactoryAddress,
                    [E.ChainId.CELO_ALFAJORES]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
                    [E.ChainId.OPTIMISM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
                    [E.ChainId.SEPOLIA]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.SEPOLIA].v3CoreFactoryAddress,
                    [E.ChainId.ARBITRUM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
                    [E.ChainId.BNB]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].v3CoreFactoryAddress,
                    [E.ChainId.AVALANCHE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.AVALANCHE].v3CoreFactoryAddress,
                    [E.ChainId.BASE_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE_GOERLI].v3CoreFactoryAddress,
                    [E.ChainId.BASE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE].v3CoreFactoryAddress
                },
                H = { ...Y("0x61fFE014bA17989E743c5F6cB21bF9697530B21e"),
                    [E.ChainId.CELO]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO].quoterAddress,
                    [E.ChainId.CELO_ALFAJORES]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO_ALFAJORES].quoterAddress,
                    [E.ChainId.OPTIMISM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.OPTIMISM_GOERLI].quoterAddress,
                    [E.ChainId.SEPOLIA]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.SEPOLIA].quoterAddress,
                    [E.ChainId.ARBITRUM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.ARBITRUM_GOERLI].quoterAddress,
                    [E.ChainId.BNB]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].quoterAddress,
                    [E.ChainId.AVALANCHE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.AVALANCHE].quoterAddress,
                    [E.ChainId.BASE_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE_GOERLI].quoterAddress,
                    [E.ChainId.BASE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE].quoterAddress
                },
                j = {
                    [E.ChainId.MAINNET]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.MAINNET].v1MixedRouteQuoterAddress,
                    [E.ChainId.GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.GOERLI].v1MixedRouteQuoterAddress
                },
                W = { ...Y("0x1F98415757620B543A52E61c46B32eB19261F984"),
                    [E.ChainId.CELO]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO].multicallAddress,
                    [E.ChainId.CELO_ALFAJORES]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.CELO_ALFAJORES].multicallAddress,
                    [E.ChainId.OPTIMISM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.OPTIMISM_GOERLI].multicallAddress,
                    [E.ChainId.SEPOLIA]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.SEPOLIA].multicallAddress,
                    [E.ChainId.ARBITRUM_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.ARBITRUM_GOERLI].multicallAddress,
                    [E.ChainId.BNB]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BNB].multicallAddress,
                    [E.ChainId.AVALANCHE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.AVALANCHE].multicallAddress,
                    [E.ChainId.BASE_GOERLI]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE_GOERLI].multicallAddress,
                    [E.ChainId.BASE]: E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.BASE].multicallAddress
                },
                Q = e => e == E.ChainId.BNB ? $ : "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";

            function Y(e, t = []) {
                return N.concat(t).reduce((t, f) => (t[f] = e, t), {})
            }
            E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.ARBITRUM_ONE].tickLensAddress, E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.MAINNET].nonfungiblePositionManagerAddress, E.CHAIN_TO_ADDRESSES_MAP[E.ChainId.MAINNET].v3MigratorAddress, E.ChainId.MAINNET, new E.Token(E.ChainId.MAINNET, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether"), E.ChainId.GOERLI, new E.Token(E.ChainId.GOERLI, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether"), E.ChainId.SEPOLIA, new E.Token(E.ChainId.SEPOLIA, "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", 18, "WETH", "Wrapped Ether"), E.ChainId.OPTIMISM, new E.Token(E.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), E.ChainId.OPTIMISM_GOERLI, new E.Token(E.ChainId.OPTIMISM_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), E.ChainId.ARBITRUM_ONE, new E.Token(E.ChainId.ARBITRUM_ONE, "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", 18, "WETH", "Wrapped Ether"), E.ChainId.ARBITRUM_GOERLI, new E.Token(E.ChainId.ARBITRUM_GOERLI, "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3", 18, "WETH", "Wrapped Ether"), E.ChainId.BASE_GOERLI, new E.Token(E.ChainId.BASE_GOERLI, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether"), E.ChainId.BASE, new E.Token(E.ChainId.BASE, "0x4200000000000000000000000000000000000006", 18, "WETH", "Wrapped Ether");
            var X = f(94e3),
                z = f.n(X);
            class K extends E.CurrencyAmount {}

            function J(e) {
                switch (e) {
                    case "10000":
                        return B.FeeAmount.HIGH;
                    case "3000":
                        return B.FeeAmount.MEDIUM;
                    case "500":
                        return B.FeeAmount.LOW;
                    case "100":
                        return B.FeeAmount.LOWEST;
                    default:
                        throw Error(`Fee amount ${e} not supported.`)
                }
            }

            function Z(e) {
                switch (e) {
                    case B.FeeAmount.HIGH:
                        return "10000";
                    case B.FeeAmount.MEDIUM:
                        return "3000";
                    case B.FeeAmount.LOW:
                        return "500";
                    case B.FeeAmount.LOWEST:
                        return "100";
                    default:
                        throw Error(`Fee amount ${e} not supported.`)
                }
            }
            var ee = f(716),
                et = f(71008);
            let ef = e => {
                    let t = [],
                        f = e.protocol === ee.Protocol.V3 ? e.tokenPath : e.path,
                        n = M().map(f, e => `${e.symbol}`),
                        a = e.protocol === ee.Protocol.V3 || e.protocol === ee.Protocol.MIXED ? e.pools : e.pairs,
                        i = M().map(a, e => `${e instanceof B.Pool?` -- ${e.fee/1e4}% [${B.Pool.getAddress(e.token0,e.token1,e.fee,void 0,V[e.chainId])}]`:` -- [${et.Pair.getAddress(e.token0,e.token1)}]`} --> `);
                    for (let e = 0; e < n.length; e++) t.push(n[e]), e < i.length && t.push(i[e]);
                    return t.join("")
                },
                en = e => {
                    let t = M().reduce(e, (e, t) => e.add(t.amount), K.fromRawAmount(e[0].amount.currency, 0)),
                        f = M().map(e, ({
                            protocol: e,
                            route: f,
                            amount: n
                        }) => {
                            let a = n.divide(t),
                                i = new E.Percent(a.numerator, a.denominator);
                            return `[${e==ee.Protocol.MIXED?"V2 + V3":e}] ${i.toFixed(2)}% = ${ef(f)}`
                        });
                    return M().join(f, ", ")
                },
                ea = e => `${e.token0.symbol}/${e.token1.symbol}${e instanceof B.Pool?`/${e.fee/1e4}%`:""}`;
            var ei = f(98291),
                er = f(94287),
                es = f(28410);
            let eo = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class ed {
                static createInterface() {
                    return new ei.vU(eo)
                }
                static connect(e, t) {
                    return new es.Contract(e, eo, t)
                }
            }
            ed.abi = eo;
            let eu = new E.Token(E.ChainId.MAINNET, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "USDC", "USD//C"),
                ec = new E.Token(E.ChainId.MAINNET, "0xdAC17F958D2ee523a2206206994597C13D831ec7", 6, "USDT", "Tether USD"),
                el = new E.Token(E.ChainId.MAINNET, "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 8, "WBTC", "Wrapped BTC"),
                ep = new E.Token(E.ChainId.MAINNET, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18, "DAI", "Dai Stablecoin"),
                eh = new E.Token(E.ChainId.MAINNET, "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", 18, "FEI", "Fei USD");
            new E.Token(E.ChainId.MAINNET, "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", 18, "UNI", "Uniswap");
            let eb = new E.Token(E.ChainId.MAINNET, "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", 18, "AAVE", "Aave Token"),
                ey = new E.Token(E.ChainId.MAINNET, "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32", 18, "LDO", "Lido DAO Token"),
                em = new E.Token(E.ChainId.SEPOLIA, "0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5", 18, "USDC", "USDC Token"),
                eT = new E.Token(E.ChainId.SEPOLIA, "0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8", 18, "DAI", "DAI Token"),
                eI = new E.Token(E.ChainId.GOERLI, "0x07865c6e87b9f70255377e024ace6630c1eaa37f", 6, "USDC", "USD//C"),
                eg = new E.Token(E.ChainId.GOERLI, "0xe583769738b6dd4e7caf8451050d1948be717679", 18, "USDT", "Tether USD"),
                ev = new E.Token(E.ChainId.GOERLI, "0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9", 8, "WBTC", "Wrapped BTC"),
                eC = new E.Token(E.ChainId.GOERLI, "0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844", 18, "DAI", "Dai Stablecoin");
            new E.Token(E.ChainId.GOERLI, "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", 18, "UNI", "Uni token");
            let eE = new E.Token(E.ChainId.OPTIMISM, "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", 6, "USDC", "USD//C"),
                eA = new E.Token(E.ChainId.OPTIMISM, "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", 6, "USDT", "Tether USD"),
                eS = new E.Token(E.ChainId.OPTIMISM, "0x68f180fcCe6836688e9084f035309E29Bf0A2095", 8, "WBTC", "Wrapped BTC"),
                eO = new E.Token(E.ChainId.OPTIMISM, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                ek = new E.Token(E.ChainId.OPTIMISM, "0x4200000000000000000000000000000000000042", 18, "OP", "Optimism"),
                ew = new E.Token(E.ChainId.OPTIMISM_GOERLI, "0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E", 6, "USDC", "USD//C"),
                eP = new E.Token(E.ChainId.OPTIMISM_GOERLI, "0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE", 6, "USDT", "Tether USD"),
                eM = new E.Token(E.ChainId.OPTIMISM_GOERLI, "0xe0a592353e81a94Db6E3226fD4A99F881751776a", 8, "WBTC", "Wrapped BTC"),
                ex = new E.Token(E.ChainId.OPTIMISM_GOERLI, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                eR = new E.Token(E.ChainId.ARBITRUM_ONE, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 6, "USDC", "USD//C"),
                eD = new E.Token(E.ChainId.ARBITRUM_ONE, "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", 6, "USDT", "Tether USD"),
                eB = new E.Token(E.ChainId.ARBITRUM_ONE, "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", 8, "WBTC", "Wrapped BTC"),
                eL = new E.Token(E.ChainId.ARBITRUM_ONE, "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", 18, "DAI", "Dai Stablecoin"),
                e_ = new E.Token(E.ChainId.ARBITRUM_ONE, "0x912CE59144191C1204E64559FE8253a0e49E6548", 18, "ARB", "Arbitrum");
            new E.Token(E.ChainId.ARBITRUM_GOERLI, "0x0000000000000000000000000000000000000000", 18, "DAI", "Dai Stablecoin");
            let eN = new E.Token(E.ChainId.ARBITRUM_GOERLI, "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892", 6, "USDC", "USD//C"),
                eF = new E.Token(E.ChainId.POLYGON, "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", 18, "WMATIC", "Wrapped MATIC"),
                eU = new E.Token(E.ChainId.POLYGON, "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", 18, "WETH", "Wrapped Ether"),
                eG = new E.Token(E.ChainId.POLYGON, "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", 6, "USDC", "USD//C");
            new E.Token(E.ChainId.POLYGON, "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", 18, "DAI", "Dai Stablecoin");
            let eq = new E.Token(E.ChainId.POLYGON_MUMBAI, "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", 18, "WMATIC", "Wrapped MATIC");
            new E.Token(E.ChainId.POLYGON_MUMBAI, "0xe11a86849d99f524cac3e7a0ec1241828e332c62", 6, "USDC", "USD//C");
            let e$ = new E.Token(E.ChainId.POLYGON_MUMBAI, "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f", 18, "DAI", "Dai Stablecoin");
            new E.Token(E.ChainId.POLYGON_MUMBAI, "0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa", 18, "WETH", "Wrapped Ether");
            let eV = new E.Token(E.ChainId.BNB, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC"),
                eH = new E.Token(E.ChainId.BNB, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "BUSD"),
                ej = new E.Token(E.ChainId.BNB, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "DAI"),
                eW = new E.Token(E.ChainId.BNB, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "ETH"),
                eQ = new E.Token(E.ChainId.BNB, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "USDC"),
                eY = new E.Token(E.ChainId.BNB, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "USDT"),
                eX = new E.Token(E.ChainId.CELO, "0x471EcE3750Da237f93B8E339c536989b8978a438", 18, "CELO", "Celo native asset"),
                ez = new E.Token(E.ChainId.CELO, "0xE4fE50cdD716522A56204352f00AA110F731932d", 18, "DAI", "Dai Stablecoin"),
                eK = new E.Token(E.ChainId.CELO, "0x765DE816845861e75A25fCA122bb6898B8B1282a", 18, "CUSD", "Celo Dollar Stablecoin"),
                eJ = new E.Token(E.ChainId.CELO, "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73", 18, "CEUR", "Celo Euro Stablecoin"),
                eZ = new E.Token(E.ChainId.CELO_ALFAJORES, "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9", 18, "CELO", "Celo native asset"),
                e0 = new E.Token(E.ChainId.CELO_ALFAJORES, "0x7d91E51C8F218f7140188A155f5C75388630B6a8", 18, "DAI", "Dai Stablecoin"),
                e1 = new E.Token(E.ChainId.CELO_ALFAJORES, "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1", 18, "CUSD", "Celo Dollar Stablecoin"),
                e5 = new E.Token(E.ChainId.CELO_ALFAJORES, "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F", 18, "CEUR", "Celo Euro Stablecoin"),
                e6 = new E.Token(E.ChainId.AVALANCHE, "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", 18, "DAI.e", "DAI.e Token"),
                e8 = new E.Token(E.ChainId.AVALANCHE, "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", 6, "USDC", "USDC Token"),
                e2 = new E.Token(E.ChainId.BASE, "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", 6, "USDbC", "USD Base Coin");
            new E.Token(E.ChainId.BASE_GOERLI, "0x853154e2A5604E5C74a2546E2871Ad44932eB92C", 6, "USDbC", "USD Base Coin");
            let e3 = new E.Token(E.ChainId.GNOSIS, "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83", 6, "USDC", "USDC from Ethereum on Gnosis"),
                e9 = new E.Token(E.ChainId.GNOSIS, "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d", 18, "WXDAI", "Wrapped XDAI on Gnosis"),
                e4 = new E.Token(E.ChainId.GNOSIS, "0x8e5bbbb09ed1ebde8674cda39a0c169401db4252", 8, "WBTC", "Wrapped BTC from Ethereum on Gnosis"),
                e7 = new E.Token(E.ChainId.MOONBEAM, "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b", 6, "USDC", "USD Coin bridged using Multichain"),
                te = new E.Token(E.ChainId.MOONBEAM, "0xAcc15dC74880C9944775448304B263D191c6077F", 18, "WGLMR", "Wrapped GLMR"),
                tt = new E.Token(E.ChainId.MOONBEAM, "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b", 6, "DAI", "Dai on moonbeam bridged using Multichain"),
                tf = new E.Token(E.ChainId.MOONBEAM, "0x922D641a426DcFFaeF11680e5358F34d97d112E1", 8, "WBTC", "Wrapped BTC bridged using Multichain");
            class tn {
                constructor(e, t) {
                    this.chainId = e, this.multicall2Provider = t
                }
                async getTokenSymbol(e, t) {
                    let f;
                    let n = !1;
                    try {
                        f = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                            addresses: e,
                            contractInterface: ed.createInterface(),
                            functionName: "symbol",
                            providerConfig: t
                        })
                    } catch (i) {
                        S.error({
                            addresses: e
                        }, `TokenProvider.getTokenSymbol[string] failed with error ${i}. Trying with bytes32.`);
                        let a = new ei.vU([{
                            inputs: [],
                            name: "symbol",
                            outputs: [{
                                internalType: "bytes32",
                                name: "",
                                type: "bytes32"
                            }],
                            stateMutability: "view",
                            type: "function"
                        }]);
                        try {
                            f = await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                                addresses: e,
                                contractInterface: a,
                                functionName: "symbol",
                                providerConfig: t
                            }), n = !0
                        } catch (t) {
                            throw S.fatal({
                                addresses: e
                            }, `TokenProvider.getTokenSymbol[bytes32] failed with error ${t}.`), Error("[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.")
                        }
                    }
                    return {
                        result: f,
                        isBytes32: n
                    }
                }
                async getTokenDecimals(e, t) {
                    return this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: ed.createInterface(),
                        functionName: "decimals",
                        providerConfig: t
                    })
                }
                async getTokens(e, t) {
                    let f = {},
                        n = {},
                        a = M()(e).map(e => e.toLowerCase()).uniq().value();
                    if (a.length > 0) {
                        let [e, i] = await Promise.all([this.getTokenSymbol(a, t), this.getTokenDecimals(a, t)]), r = e.isBytes32, {
                            results: s
                        } = e.result, {
                            results: o
                        } = i;
                        for (let e = 0; e < a.length; e++) {
                            let t = a[e],
                                i = s[e],
                                d = o[e];
                            if (!(null == i ? void 0 : i.success) || !(null == d ? void 0 : d.success)) {
                                S.info({
                                    symbolResult: i,
                                    decimalResult: d
                                }, `Dropping token with address ${t} as symbol or decimal are invalid`);
                                continue
                            }
                            let u = r ? (0, er.F)(i.result[0]) : i.result[0],
                                c = d.result[0];
                            f[t.toLowerCase()] = new E.Token(this.chainId, t, c, u), n[u.toLowerCase()] = f[t.toLowerCase()]
                        }
                        S.info(`Got token symbol and decimals for ${Object.values(f).length} out of ${a.length} tokens on-chain ${t?`as of: ${null==t?void 0:t.blockNumber}`:""}`)
                    }
                    return {
                        getTokenByAddress: e => f[e.toLowerCase()],
                        getTokenBySymbol: e => n[e.toLowerCase()],
                        getAllTokens: () => Object.values(f)
                    }
                }
            }
            let ta = {
                [E.ChainId.MAINNET]: {
                    WETH: G[E.ChainId.MAINNET],
                    USDC: eu,
                    USDT: ec,
                    WBTC: el,
                    DAI: ep,
                    RING: new E.Token(E.ChainId.MAINNET, "0x9469D013805bFfB7D3DEBe5E7839237e535ec483", 18, "RING", "RING")
                },
                [E.ChainId.SEPOLIA]: {
                    USDC: em
                },
                [E.ChainId.OPTIMISM]: {
                    USDC: eE,
                    USDT: eA,
                    WBTC: eS,
                    DAI: eO
                },
                [E.ChainId.OPTIMISM_GOERLI]: {
                    USDC: ew,
                    USDT: eP,
                    WBTC: eM,
                    DAI: ex
                },
                [E.ChainId.ARBITRUM_ONE]: {
                    USDC: eR,
                    USDT: eD,
                    WBTC: eB,
                    DAI: eL
                },
                [E.ChainId.ARBITRUM_GOERLI]: {
                    USDC: eN
                },
                [E.ChainId.POLYGON]: {
                    WMATIC: eF,
                    USDC: eG
                },
                [E.ChainId.POLYGON_MUMBAI]: {
                    WMATIC: eq,
                    DAI: e$
                },
                [E.ChainId.CELO]: {
                    CELO: eX,
                    CUSD: eK,
                    CEUR: eJ,
                    DAI: ez
                },
                [E.ChainId.CELO_ALFAJORES]: {
                    CELO: eZ,
                    CUSD: e1,
                    CEUR: e1,
                    DAI: e0
                },
                [E.ChainId.GNOSIS]: {
                    WXDAI: G[E.ChainId.GNOSIS],
                    USDC_ETHEREUM_GNOSIS: e3
                },
                [E.ChainId.MOONBEAM]: {
                    USDC: e7,
                    DAI: tt,
                    WBTC: tf,
                    WGLMR: G[E.ChainId.MOONBEAM]
                },
                [E.ChainId.BNB]: {
                    USDC: eQ,
                    USDT: eY,
                    BUSD: eH,
                    ETH: eW,
                    DAI: ej,
                    BTC: eV,
                    WBNB: G[E.ChainId.BNB]
                },
                [E.ChainId.AVALANCHE]: {
                    USDC: e8,
                    DAI: e6,
                    WAVAX: G[E.ChainId.AVALANCHE]
                },
                [E.ChainId.BASE]: {
                    USDC: e2,
                    WETH: G[E.ChainId.BASE]
                }
            };
            class ti {
                constructor(e, t, f, n) {
                    this.chainId = e, this.tokenCache = t, this.primaryTokenProvider = f, this.fallbackTokenProvider = n, this.CACHE_KEY = (e, t) => `token-${e}-${t}`
                }
                async getTokens(e) {
                    let t = ta[this.chainId];
                    if (t)
                        for (let e of Object.values(t)) await this.tokenCache.set(this.CACHE_KEY(this.chainId, e.address.toLowerCase()), e);
                    let f = {},
                        n = {},
                        a = M()(e).map(e => e.toLowerCase()).uniq().value(),
                        i = [],
                        r = [];
                    for (let e of a) await this.tokenCache.has(this.CACHE_KEY(this.chainId, e)) ? (f[e.toLowerCase()] = await this.tokenCache.get(this.CACHE_KEY(this.chainId, e)), n[f[e].symbol] = await this.tokenCache.get(this.CACHE_KEY(this.chainId, e))) : i.push(e);
                    if (S.info({
                            addressesToFindInPrimary: i
                        }, `Found ${a.length-i.length} out of ${a.length} tokens in local cache. ${i.length>0?`Checking primary token provider for ${i.length} tokens`:""}
      `), i.length > 0) {
                        let e = await this.primaryTokenProvider.getTokens(i);
                        for (let t of i) {
                            let a = e.getTokenByAddress(t);
                            a ? (f[t.toLowerCase()] = a, n[f[t].symbol] = a, await this.tokenCache.set(this.CACHE_KEY(this.chainId, t.toLowerCase()), f[t])) : r.push(t)
                        }
                        S.info({
                            addressesToFindInSecondary: r
                        }, `Found ${i.length-r.length} tokens in primary. ${this.fallbackTokenProvider?`Checking secondary token provider for ${r.length} tokens`:"No fallback token provider specified. About to return."}`)
                    }
                    if (this.fallbackTokenProvider && r.length > 0) {
                        let e = await this.fallbackTokenProvider.getTokens(r);
                        for (let t of r) {
                            let a = e.getTokenByAddress(t);
                            a && (f[t.toLowerCase()] = a, n[f[t].symbol] = a, await this.tokenCache.set(this.CACHE_KEY(this.chainId, t.toLowerCase()), f[t]))
                        }
                    }
                    return {
                        getTokenByAddress: e => f[e.toLowerCase()],
                        getTokenBySymbol: e => n[e.toLowerCase()],
                        getAllTokens: () => Object.values(f)
                    }
                }
            }
            var tr = f(92598);
            class ts {}
            class to extends ts {
                constructor(e, t = 50, f = 4) {
                    super(), this.provider = e, this.priorityFeePercentile = t, this.blocksToConsider = f
                }
                async getGasPrice() {
                    let e = await this.provider.send("eth_feeHistory", [tr.O$.from(this.blocksToConsider).toHexString().replace("0x0", "0x"), "latest", [this.priorityFeePercentile]]),
                        t = {
                            baseFeePerGas: M().map(e.baseFeePerGas, e => tr.O$.from(e)),
                            gasUsedRatio: e.gasUsedRatio,
                            oldestBlock: tr.O$.from(e.oldestBlock),
                            reward: M().map(e.reward, e => tr.O$.from(e[0]))
                        },
                        f = t.baseFeePerGas[t.baseFeePerGas.length - 1],
                        n = M().reduce(t.reward, (e, t) => e.add(t), tr.O$.from(0)).div(t.reward.length);
                    S.info({
                        feeHistory: t,
                        feeHistoryReadable: {
                            baseFeePerGas: M().map(t.baseFeePerGas, e => e.toString()),
                            oldestBlock: t.oldestBlock.toString(),
                            reward: M().map(t.reward, e => e.toString())
                        },
                        nextBlockBaseFeePerGas: f.toString(),
                        averagePriorityFeePerGas: n.toString()
                    }, "Got fee history from provider and computed gas estimate");
                    let a = f.add(n),
                        i = t.oldestBlock.add(this.blocksToConsider);
                    return S.info(`Estimated gas price in wei: ${a} as of block ${i.toString()}`), {
                        gasPriceWei: a
                    }
                }
            }
            var td = f(46795),
                tu = f(59691),
                tc = f(38148),
                tl = f.n(tc),
                tp = f(31199),
                th = f.n(tp);
            let tb = [{
                inputs: [{
                    internalType: "address[]",
                    name: "tokens",
                    type: "address[]"
                }, {
                    internalType: "address[]",
                    name: "baseTokens",
                    type: "address[]"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "batchValidate",
                outputs: [{
                    internalType: "enum ITokenValidator.Status[]",
                    name: "",
                    type: "uint8[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "baseTokens",
                    type: "address[]"
                }, {
                    internalType: "uint256",
                    name: "amountToBorrow",
                    type: "uint256"
                }],
                name: "validate",
                outputs: [{
                    internalType: "enum ITokenValidator.Status",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class ty {
                static createInterface() {
                    return new ei.vU(tb)
                }
                static connect(e, t) {
                    return new es.Contract(e, tb, t)
                }
            }
            ty.abi = tb;
            let tm = new Set(["0x777e2ae845272a2f540ebf6a3d03734a5a8f618e"]);
            (r = h || (h = {}))[r.UNKN = 0] = "UNKN", r[r.FOT = 1] = "FOT", r[r.STF = 2] = "STF";
            class tT {
                constructor(e, t, f, n = "0xb5ee1690b7dcc7859771148d0889be838fe108e0", a = 1e6, i = "1000", r = tm) {
                    this.chainId = e, this.multicall2Provider = t, this.tokenValidationCache = f, this.tokenValidatorAddress = n, this.gasLimitPerCall = a, this.amountToFlashBorrow = i, this.allowList = r, this.CACHE_KEY = (e, t) => `token-${e}-${t}`, this.BASES = [G[this.chainId].address]
                }
                async validateTokens(e, t) {
                    let f = M().keyBy(e, "address"),
                        n = M()(e).map(e => e.address).uniq().value(),
                        a = [],
                        i = {};
                    for (let e of n) await this.tokenValidationCache.has(this.CACHE_KEY(this.chainId, e)) ? i[e.toLowerCase()] = await this.tokenValidationCache.get(this.CACHE_KEY(this.chainId, e)) : a.push(e);
                    S.info(`Got token validation results for ${n.length-a.length} tokens from cache. Getting ${a.length} on-chain.`);
                    let r = M()(a).map(e => [e, this.BASES, this.amountToFlashBorrow]).value(),
                        s = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                            address: this.tokenValidatorAddress,
                            contractInterface: ty.createInterface(),
                            functionName: "validate",
                            functionParams: r,
                            providerConfig: t,
                            additionalConfig: {
                                gasLimitPerCallOverride: this.gasLimitPerCall
                            }
                        });
                    for (let e = 0; e < s.results.length; e++) {
                        let t = s.results[e],
                            n = a[e],
                            r = f[n];
                        if (this.allowList.has(r.address.toLowerCase())) {
                            i[r.address.toLowerCase()] = h.UNKN, await this.tokenValidationCache.set(this.CACHE_KEY(this.chainId, r.address.toLowerCase()), i[r.address.toLowerCase()]);
                            continue
                        }
                        if (!t.success) {
                            S.info({
                                result: t
                            }, `Failed to validate token ${r.symbol}`);
                            continue
                        }
                        let o = t.result[0];
                        i[r.address.toLowerCase()] = o, await this.tokenValidationCache.set(this.CACHE_KEY(this.chainId, r.address.toLowerCase()), i[r.address.toLowerCase()])
                    }
                    return {
                        getValidationByToken: e => i[e.address.toLowerCase()]
                    }
                }
            }
            let tI = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Burn",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                name: "Mint",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Swap",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve0",
                    type: "uint112"
                }, {
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve1",
                    type: "uint112"
                }],
                name: "Sync",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [],
                name: "DOMAIN_SEPARATOR",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "MINIMUM_LIQUIDITY",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "PERMIT_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "burn",
                outputs: [{
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "factory",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "getReserves",
                outputs: [{
                    internalType: "uint112",
                    name: "reserve0",
                    type: "uint112"
                }, {
                    internalType: "uint112",
                    name: "reserve1",
                    type: "uint112"
                }, {
                    internalType: "uint32",
                    name: "blockTimestampLast",
                    type: "uint32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "kLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "mint",
                outputs: [{
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }],
                name: "nonces",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "permit",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "price0CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "price1CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "skim",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }],
                name: "swap",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "sync",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "token0",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "token1",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class tg {
                static createInterface() {
                    return new ei.vU(tI)
                }
                static connect(e, t) {
                    return new es.Contract(e, tI, t)
                }
            }
            tg.abi = tI;
            class tv {
                constructor(e, t, f = {
                    retries: 2,
                    minTimeout: 50,
                    maxTimeout: 500
                }) {
                    this.chainId = e, this.multicall2Provider = t, this.retryOptions = f, this.POOL_ADDRESS_CACHE = {}
                }
                async getPools(e, t) {
                    let f = new Set,
                        n = [],
                        a = [];
                    for (let t of e) {
                        let [e, i] = t, {
                            poolAddress: r,
                            token0: s,
                            token1: o
                        } = this.getPoolAddress(e, i);
                        f.has(r) || (f.add(r), n.push([s, o]), a.push(r))
                    }
                    S.debug(`getPools called with ${e.length} token pairs. Deduped down to ${f.size}`), R.putMetric("V2_RPC_POOL_RPC_CALL", 1, c.None);
                    let i = await this.getPoolsData(a, "getReserves", t);
                    S.info(`Got reserves for ${f.size} pools ${(null==t?void 0:t.blockNumber)?`as of block: ${await (null==t?void 0:t.blockNumber)}.`:""}`);
                    let r = {},
                        s = [];
                    for (let e = 0; e < a.length; e++) {
                        let t = i[e];
                        if (!(null == t ? void 0 : t.success)) {
                            let [t, f] = n[e];
                            s.push([t, f]);
                            continue
                        }
                        let [f, o] = n[e], {
                            reserve0: d,
                            reserve1: u
                        } = t.result, c = new et.Pair(K.fromRawAmount(f, d.toString()), K.fromRawAmount(o, u.toString())), l = a[e];
                        r[l] = c
                    }
                    s.length > 0 && S.info({
                        invalidPools: M().map(s, ([e, t]) => `${e.symbol}/${t.symbol}`)
                    }, `${s.length} pools invalid after checking their slot0 and liquidity results. Dropping.`);
                    let o = M().map(Object.values(r), ea);
                    return S.debug({
                        poolStrs: o
                    }, `Found ${o.length} valid pools`), {
                        getPool: (e, t) => {
                            let {
                                poolAddress: f
                            } = this.getPoolAddress(e, t);
                            return r[f]
                        },
                        getPoolByAddress: e => r[e],
                        getAllPools: () => Object.values(r)
                    }
                }
                getPoolAddress(e, t) {
                    let [f, n] = e.sortsBefore(t) ? [e, t] : [t, e], a = `${this.chainId}/${f.address}/${n.address}`, i = this.POOL_ADDRESS_CACHE[a];
                    if (i) return {
                        poolAddress: i,
                        token0: f,
                        token1: n
                    };
                    let r = et.Pair.getAddress(f, n);
                    return this.POOL_ADDRESS_CACHE[a] = r, {
                        poolAddress: r,
                        token0: f,
                        token1: n
                    }
                }
                async getPoolsData(e, t, f) {
                    let {
                        results: n,
                        blockNumber: a
                    } = await tl()(async () => this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: tg.createInterface(),
                        functionName: t,
                        providerConfig: f
                    }), this.retryOptions);
                    return S.debug(`Pool data fetched as of block ${a}`), n
                }
            }
            let tC = [{
                inputs: [],
                name: "getPricesInWei",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }];
            class tE {
                static createInterface() {
                    return new ei.vU(tC)
                }
                static connect(e, t) {
                    return new es.Contract(e, tC, t)
                }
            }
            tE.abi = tC;
            let tA = [{
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "DecimalsUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "GasPriceUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "L1BaseFeeUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "OverheadUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "ScalarUpdated",
                type: "event"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "gasPrice",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "getL1Fee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes"
                }],
                name: "getL1GasUsed",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "l1BaseFee",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "overhead",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "scalar",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_decimals",
                    type: "uint256"
                }],
                name: "setDecimals",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_gasPrice",
                    type: "uint256"
                }],
                name: "setGasPrice",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_baseFee",
                    type: "uint256"
                }],
                name: "setL1BaseFee",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_overhead",
                    type: "uint256"
                }],
                name: "setOverhead",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_scalar",
                    type: "uint256"
                }],
                name: "setScalar",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class tS {
                static createInterface() {
                    return new ei.vU(tA)
                }
                static connect(e, t) {
                    return new es.Contract(e, tA, t)
                }
            }
            tS.abi = tA;
            class tO {
                constructor(e, t, f) {
                    if (this.chainId = e, this.multicall2Provider = t, e !== E.ChainId.OPTIMISM && e !== E.ChainId.BASE) throw Error("This data provider is used only on optimism networks.");
                    this.gasOracleAddress = null != f ? f : "0x420000000000000000000000000000000000000F"
                }
                async getGasData() {
                    var e, t, f, n;
                    let a = await this.multicall2Provider.callMultipleFunctionsOnSameContract({
                        address: this.gasOracleAddress,
                        contractInterface: tS.createInterface(),
                        functionNames: ["l1BaseFee", "scalar", "decimals", "overhead"]
                    });
                    if (!(null === (e = a.results[0]) || void 0 === e ? void 0 : e.success) || !(null === (t = a.results[1]) || void 0 === t ? void 0 : t.success) || !(null === (f = a.results[2]) || void 0 === f ? void 0 : f.success) || !(null === (n = a.results[3]) || void 0 === n ? void 0 : n.success)) throw S.info({
                        results: a.results
                    }, "Failed to get gas constants data from the optimism gas oracle"), Error("Failed to get gas constants data from the optimism gas oracle");
                    let {
                        result: i
                    } = a.results[0], {
                        result: r
                    } = a.results[1], {
                        result: s
                    } = a.results[2], {
                        result: o
                    } = a.results[3];
                    return {
                        l1BaseFee: i[0],
                        scalar: r[0],
                        decimals: s[0],
                        overhead: o[0]
                    }
                }
            }
            class tk {
                constructor(e, t, f) {
                    this.chainId = e, this.provider = t, this.gasFeesAddress = f || "0x000000000000000000000000000000000000006C"
                }
                async getGasData() {
                    let e = tE.connect(this.gasFeesAddress, this.provider),
                        t = await e.getPricesInWei();
                    return {
                        perL2TxFee: t[0],
                        perL1CalldataFee: t[1],
                        perArbGasTotal: t[5]
                    }
                }
            }
            let tw = [{
                inputs: [],
                name: "feeGrowthGlobal0X128",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "feeGrowthGlobal1X128",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "liquidity",
                outputs: [{
                    internalType: "uint128",
                    name: "",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }],
                name: "observations",
                outputs: [{
                    internalType: "uint32",
                    name: "blockTimestamp",
                    type: "uint32"
                }, {
                    internalType: "int56",
                    name: "tickCumulative",
                    type: "int56"
                }, {
                    internalType: "uint160",
                    name: "secondsPerLiquidityCumulativeX128",
                    type: "uint160"
                }, {
                    internalType: "bool",
                    name: "initialized",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "key",
                    type: "bytes32"
                }],
                name: "positions",
                outputs: [{
                    internalType: "uint128",
                    name: "_liquidity",
                    type: "uint128"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthInside0LastX128",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthInside1LastX128",
                    type: "uint256"
                }, {
                    internalType: "uint128",
                    name: "tokensOwed0",
                    type: "uint128"
                }, {
                    internalType: "uint128",
                    name: "tokensOwed1",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "protocolFees",
                outputs: [{
                    internalType: "uint128",
                    name: "token0",
                    type: "uint128"
                }, {
                    internalType: "uint128",
                    name: "token1",
                    type: "uint128"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "slot0",
                outputs: [{
                    internalType: "uint160",
                    name: "sqrtPriceX96",
                    type: "uint160"
                }, {
                    internalType: "int24",
                    name: "tick",
                    type: "int24"
                }, {
                    internalType: "uint16",
                    name: "observationIndex",
                    type: "uint16"
                }, {
                    internalType: "uint16",
                    name: "observationCardinality",
                    type: "uint16"
                }, {
                    internalType: "uint16",
                    name: "observationCardinalityNext",
                    type: "uint16"
                }, {
                    internalType: "uint8",
                    name: "feeProtocol",
                    type: "uint8"
                }, {
                    internalType: "bool",
                    name: "unlocked",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "int16",
                    name: "wordPosition",
                    type: "int16"
                }],
                name: "tickBitmap",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "int24",
                    name: "tick",
                    type: "int24"
                }],
                name: "ticks",
                outputs: [{
                    internalType: "uint128",
                    name: "liquidityGross",
                    type: "uint128"
                }, {
                    internalType: "int128",
                    name: "liquidityNet",
                    type: "int128"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthOutside0X128",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "feeGrowthOutside1X128",
                    type: "uint256"
                }, {
                    internalType: "int56",
                    name: "tickCumulativeOutside",
                    type: "int56"
                }, {
                    internalType: "uint160",
                    name: "secondsPerLiquidityOutsideX128",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "secondsOutside",
                    type: "uint32"
                }, {
                    internalType: "bool",
                    name: "initialized",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }];
            class tP {
                static createInterface() {
                    return new ei.vU(tw)
                }
                static connect(e, t) {
                    return new es.Contract(e, tw, t)
                }
            }
            tP.abi = tw;
            class tM {
                constructor(e, t, f = {
                    retries: 2,
                    minTimeout: 50,
                    maxTimeout: 500
                }) {
                    this.chainId = e, this.multicall2Provider = t, this.retryOptions = f, this.POOL_ADDRESS_CACHE = {}
                }
                async getPools(e, t) {
                    let f = new Set,
                        n = [],
                        a = [];
                    for (let t of e) {
                        let [e, i, r] = t, {
                            poolAddress: s,
                            token0: o,
                            token1: d
                        } = this.getPoolAddress(e, i, r);
                        f.has(s) || (f.add(s), n.push([o, d, r]), a.push(s))
                    }
                    S.debug(`getPools called with ${e.length} token pairs. Deduped down to ${f.size}`);
                    let [i, r] = await Promise.all([this.getPoolsData(a, "slot0", t), this.getPoolsData(a, "liquidity", t)]);
                    S.info(`Got liquidity and slot0s for ${f.size} pools ${(null==t?void 0:t.blockNumber)?`as of block: ${null==t?void 0:t.blockNumber}.`:""}`);
                    let s = {},
                        o = [];
                    for (let e = 0; e < a.length; e++) {
                        let t = i[e],
                            f = r[e];
                        if (!(null == t ? void 0 : t.success) || !(null == f ? void 0 : f.success) || t.result.sqrtPriceX96.eq(0)) {
                            let [t, f, a] = n[e];
                            o.push([t, f, a]);
                            continue
                        }
                        let [d, u, c] = n[e], l = t.result, p = f.result[0], h = new B.Pool(d, u, c, l.sqrtPriceX96.toString(), p.toString(), l.tick), b = a[e];
                        s[b] = h
                    }
                    o.length > 0 && S.info({
                        invalidPools: M().map(o, ([e, t, f]) => `${e.symbol}/${t.symbol}/${f/1e4}%`)
                    }, `${o.length} pools invalid after checking their slot0 and liquidity results. Dropping.`);
                    let d = M().map(Object.values(s), ea);
                    return S.debug({
                        poolStrs: d
                    }, `Found ${d.length} valid pools`), {
                        getPool: (e, t, f) => {
                            let {
                                poolAddress: n
                            } = this.getPoolAddress(e, t, f);
                            return s[n]
                        },
                        getPoolByAddress: e => s[e],
                        getAllPools: () => Object.values(s)
                    }
                }
                getPoolAddress(e, t, f) {
                    let [n, a] = e.sortsBefore(t) ? [e, t] : [t, e], i = `${this.chainId}/${n.address}/${a.address}/${f}`, r = this.POOL_ADDRESS_CACHE[i];
                    if (r) return {
                        poolAddress: r,
                        token0: n,
                        token1: a
                    };
                    let s = (0, B.computePoolAddress)({
                        factoryAddress: V[this.chainId],
                        tokenA: n,
                        tokenB: a,
                        fee: f
                    });
                    return this.POOL_ADDRESS_CACHE[i] = s, {
                        poolAddress: s,
                        token0: n,
                        token1: a
                    }
                }
                async getPoolsData(e, t, f) {
                    let {
                        results: n,
                        blockNumber: a
                    } = await tl()(async () => this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses: e,
                        contractInterface: tP.createInterface(),
                        functionName: t,
                        providerConfig: f
                    }), this.retryOptions);
                    return S.debug(`Pool data fetched as of block ${a}`), n
                }
            }
            let tx = [{
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_spender",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_from",
                    type: "address"
                }, {
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "balance",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "_to",
                    type: "address"
                }, {
                    name: "_value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }, {
                    name: "_spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                payable: !0,
                stateMutability: "payable",
                type: "fallback"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }];
            class tR {
                static createInterface() {
                    return new ei.vU(tx)
                }
                static connect(e, t) {
                    return new es.Contract(e, tx, t)
                }
            }
            tR.abi = tx;
            var tD = f(1633);

            function tB(e, t, f, n) {
                let a = M().filter(n, e => e.protocol === ee.Protocol.V3),
                    i = M().filter(n, e => e.protocol === ee.Protocol.V2),
                    r = M().filter(n, e => e.protocol === ee.Protocol.MIXED),
                    s = M().map(a, n => {
                        let {
                            route: a,
                            amount: i,
                            quote: r
                        } = n;
                        if (f == E.TradeType.EXACT_INPUT) {
                            let f = K.fromFractionalAmount(e, i.numerator, i.denominator),
                                n = K.fromFractionalAmount(t, r.numerator, r.denominator),
                                s = new B.Route(a.pools, f.currency, n.currency);
                            return {
                                routev3: s,
                                inputAmount: f,
                                outputAmount: n
                            }
                        } {
                            let f = K.fromFractionalAmount(e, r.numerator, r.denominator),
                                n = K.fromFractionalAmount(t, i.numerator, i.denominator),
                                s = new B.Route(a.pools, f.currency, n.currency);
                            return {
                                routev3: s,
                                inputAmount: f,
                                outputAmount: n
                            }
                        }
                    }),
                    o = M().map(i, n => {
                        let {
                            route: a,
                            amount: i,
                            quote: r
                        } = n;
                        if (f == E.TradeType.EXACT_INPUT) {
                            let f = K.fromFractionalAmount(e, i.numerator, i.denominator),
                                n = K.fromFractionalAmount(t, r.numerator, r.denominator),
                                s = new et.Route(a.pairs, f.currency, n.currency);
                            return {
                                routev2: s,
                                inputAmount: f,
                                outputAmount: n
                            }
                        } {
                            let f = K.fromFractionalAmount(e, r.numerator, r.denominator),
                                n = K.fromFractionalAmount(t, i.numerator, i.denominator),
                                s = new et.Route(a.pairs, f.currency, n.currency);
                            return {
                                routev2: s,
                                inputAmount: f,
                                outputAmount: n
                            }
                        }
                    }),
                    d = M().map(r, n => {
                        let {
                            route: a,
                            amount: i,
                            quote: r
                        } = n;
                        if (f != E.TradeType.EXACT_INPUT) throw Error("Mixed routes are only supported for exact input trades");
                        let s = K.fromFractionalAmount(e, i.numerator, i.denominator),
                            o = K.fromFractionalAmount(t, r.numerator, r.denominator),
                            d = new ee.MixedRouteSDK(a.pools, s.currency, o.currency);
                        return {
                            mixedRoute: d,
                            inputAmount: s,
                            outputAmount: o
                        }
                    }),
                    u = new ee.Trade({
                        v2Routes: o,
                        v3Routes: s,
                        mixedRoutes: d,
                        tradeType: f
                    });
                return u
            }

            function tL(e, t, f) {
                if (t.type == y.UNIVERSAL_ROUTER) return { ...tD.SwapRouter.swapERC20CallParameters(e, t),
                    to: (0, tD.UNIVERSAL_ROUTER_ADDRESS)(f)
                };
                if (t.type == y.SWAP_ROUTER_02) {
                    let {
                        recipient: n,
                        slippageTolerance: a,
                        deadline: i,
                        inputTokenPermit: r
                    } = t;
                    return { ...ee.SwapRouter.swapCallParameters(e, {
                            recipient: n,
                            slippageTolerance: a,
                            deadlineOrPreviousBlockhash: i,
                            inputTokenPermit: r
                        }),
                        to: Q(f)
                    }
                }
                throw Error(`Unsupported swap type ${t}`)
            }
            async function t_(e, t) {
                let f = e.chainId,
                    n = G[f],
                    a = await t.getPools([
                        [n, e]
                    ]),
                    i = a.getPool(n, e);
                return !i || i.reserve0.equalTo(0) || i.reserve1.equalTo(0) ? (S.error({
                    weth: n,
                    token: e,
                    reserve0: null == i ? void 0 : i.reserve0.toExact(),
                    reserve1: null == i ? void 0 : i.reserve1.toExact()
                }, `Could not find a valid WETH V2 pool with ${e.symbol} for computing gas costs.`), null) : i
            }
            async function tN(e, t, f) {
                let n = G[e.chainId],
                    a = M()([B.FeeAmount.HIGH, B.FeeAmount.MEDIUM, B.FeeAmount.LOW, B.FeeAmount.LOWEST]).map(t => [n, e, t]).value(),
                    i = await t.getPools(a, f),
                    r = M()([B.FeeAmount.HIGH, B.FeeAmount.MEDIUM, B.FeeAmount.LOW, B.FeeAmount.LOWEST]).map(t => i.getPool(n, e, t)).compact().value();
                if (0 == r.length) return S.error({
                    pools: r
                }, `Could not find a ${n.symbol} pool with ${e.symbol} for computing gas costs.`), null;
                let s = r.reduce((e, t) => z().greaterThan(e.liquidity, t.liquidity) ? e : t);
                return s
            }
            async function tF(e, t, f) {
                let n = tX[e],
                    a = G[e];
                if (!n) throw Error(`Could not find a USD token for computing gas costs on ${e}`);
                let i = M()([B.FeeAmount.HIGH, B.FeeAmount.MEDIUM, B.FeeAmount.LOW, B.FeeAmount.LOWEST]).flatMap(e => M().map(n, t => [a, t, e])).value(),
                    r = await t.getPools(i, f),
                    s = M()([B.FeeAmount.HIGH, B.FeeAmount.MEDIUM, B.FeeAmount.LOW, B.FeeAmount.LOWEST]).flatMap(e => {
                        let t = [];
                        for (let f of n) {
                            let n = r.getPool(a, f, e);
                            n && t.push(n)
                        }
                        return t
                    }).compact().value();
                if (0 == s.length) {
                    let e = `Could not find a USD/${a.symbol} pool for computing gas costs.`;
                    throw S.error({
                        pools: s
                    }, e), Error(e)
                }
                let o = s.reduce((e, t) => z().greaterThan(e.liquidity, t.liquidity) ? e : t);
                return o
            }

            function tU(e, t) {
                let f = e.slice(2).match(/.{1,2}/g),
                    n = f.length,
                    a = 0;
                for (let e = 0; e < n; e += 1) {
                    let t = parseInt(f[e], 16);
                    0 == t ? a += 4 : a += 16
                }
                let i = t.add(a);
                return i.add(1088)
            }
            let tG = {
                name: "Unsupported Token List",
                timestamp: "2021-01-05T20:47:02.923Z",
                version: {
                    major: 1,
                    minor: 0,
                    patch: 0
                },
                tags: {},
                logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
                keywords: ["uniswap", "unsupported", "broken"],
                tokens: [{
                    name: "USD Token",
                    address: "0xd233d1f6fd11640081abb8db125f722b5dc729dc",
                    symbol: "USD",
                    decimals: 9,
                    chainId: 1,
                    logoURI: ""
                }, {
                    name: "UNI HODL",
                    address: "0x4bf5dc91E2555449293D7824028Eb8Fe5879B689",
                    symbol: "UniH",
                    decimals: 18,
                    chainId: 1,
                    logoURI: ""
                }, {
                    name: "Gold Tether",
                    address: "0x4922a015c4407F87432B179bb209e125432E4a2A",
                    symbol: "XAUt",
                    decimals: 6,
                    chainId: 1,
                    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"
                }, {
                    name: "Grump Cat",
                    address: "0x93B2FfF814FCaEFFB01406e80B4Ecd89Ca6A021b",
                    symbol: "GRUMPY",
                    decimals: 9,
                    chainId: 1,
                    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"
                }, {
                    name: "apeUSD-UMA Synthetic USD (Dec 2021)",
                    address: "0xfA5e27893aee4805283D86e4283Da64F8c72dd56",
                    symbol: "apeUSD-UMA-DEC21",
                    decimals: 18,
                    chainId: 1,
                    logoURI: ""
                }, {
                    chainId: 1,
                    address: "0xc6b11850241c5127eab73af4b6c68bc267cbbff4",
                    name: "oWETHp Put 360 DEC2520",
                    symbol: "oWETH-360P-12/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oYFIp Put 25000 OCT0220",
                    address: "0x452b421be5b30f0c6ad8c3f03c06bdaab4f5c56c",
                    symbol: "oYFI-25000P-10/02/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 360 OCT3020",
                    address: "0x0578779e746d7186253a36cf651ea786acfcf087",
                    symbol: "oWETH-360P-10/30/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "ETHc Call 500 OCT3020",
                    address: "0xf9aba2e43fb19184408ea3b572a0fd672946f87b",
                    symbol: "oETH-500C-10/30/20",
                    decimals: 6
                }, {
                    chainId: 1,
                    name: "oBALp Put 22 OCT0220",
                    address: "0xdb0991dfc7e828b5a2837dc82d68e16490562c8d",
                    symbol: "oBAL-22P-10/02/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oCOMPp Put 150 SEP2520",
                    address: "0xe951ebe6b4420ab3f4844cf36dedd263d095b416",
                    symbol: "oCOMP-150P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oCRVp Put 3 SEP252020",
                    address: "0x9215bd49b59748419eac6bad9dbe247df06ebdb9",
                    symbol: "oCRV-3P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHp Put 180 SEP2520",
                    address: "0xE3A2c34Fa2F59ffa95C4ACd1E5663633d45Bc3AD",
                    symbol: "oETH-180P-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHc Call 400 SEP2520",
                    address: "0x05977EBC26825C0CD6097E0Ad7204721516711Eb",
                    symbol: "oETH-400C-09/25/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 380 SEP1820",
                    address: "0x31f88266301b08631f9f0e33fd5c43c2a5d1e5b2",
                    symbol: "oWETH-380P-09/18/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oYFIp Put 8500 SEP1820",
                    address: "0xd1cec2f67fdc4c60e0963515dfc3343f31e32e47",
                    symbol: "oYFI-8500P-09/18/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 370 SEP1120",
                    address: "0x15844029b2c2bf24506e9937739a9a912f1e4354",
                    symbol: "oWETH-370P-09/11/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oWETHp Put 400 SEP0420",
                    address: "0x5562c33c383f6386be4f6dcdbd35a3a99bbcfde6",
                    symbol: "oWETH-400P-09/04/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "oETHp Put 200 AUG2820",
                    address: "0x3CBFC1397deF0602c2d211c70A1c0c38CEDB5448",
                    symbol: "oWETH-400P-09/04/20",
                    decimals: 7
                }, {
                    chainId: 1,
                    name: "Opyn cDai Insurance",
                    symbol: "ocDai",
                    address: "0x98cc3bd6af1880fcfda17ac477b2f612980e5e33",
                    decimals: 8
                }, {
                    chainId: 1,
                    name: "Opyn cUSDC Insurance",
                    symbol: "ocUSDC",
                    address: "0x8ED9f862363fFdFD3a07546e618214b6D59F03d4",
                    decimals: 8
                }, {
                    chainId: 1,
                    address: "0x176C674Ee533C6139B0dc8b458D72A93dCB3e705",
                    symbol: "iAAVE",
                    name: "Synth Inverse Aave",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iAAVE.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x8A8079c7149B8A1611e5C5d978DCA3bE16545F83",
                    symbol: "iADA",
                    name: "Synth Inverse Cardano",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iADA.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xAFD870F32CE54EfdBF677466B612bf8ad164454B",
                    symbol: "iBNB",
                    name: "Synth Inverse Binance Coin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iBNB.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xD6014EA05BDe904448B743833dDF07c3C7837481",
                    symbol: "iBTC",
                    name: "Synth Inverse Bitcoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iBTC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d",
                    symbol: "iCEX",
                    name: "Synth Inverse Centralised Exchange Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iCEX.svg",
                    tags: ["index", "inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x6345728B1ccE16E6f8C509950b5c84FFF88530d9",
                    symbol: "iCOMP",
                    name: "Synth Inverse Compound",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iCOMP.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xCB98f42221b2C251A4E74A1609722eE09f0cc08E",
                    symbol: "iDASH",
                    name: "Synth Inverse Dash",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDASH.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x14d10003807AC60d07BB0ba82cAeaC8d2087c157",
                    symbol: "iDEFI",
                    name: "Synth Inverse DeFi Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDEFI.svg",
                    tags: ["index", "inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x46a97629C9C1F58De6EC18C7F536e7E6d6A6ecDe",
                    symbol: "iDOT",
                    name: "Synth Inverse Polkadot",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iDOT.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4",
                    symbol: "iEOS",
                    name: "Synth Inverse EOS",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iEOS.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xd50c1746D835d2770dDA3703B69187bFfeB14126",
                    symbol: "iETC",
                    name: "Synth Inverse Ethereum Classic",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iETC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xA9859874e1743A32409f75bB11549892138BBA1E",
                    symbol: "iETH",
                    name: "Synth Inverse Ether",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iETH.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01",
                    symbol: "iLINK",
                    name: "Synth Inverse Chainlink",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iLINK.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x79da1431150C9b82D2E5dfc1C68B33216846851e",
                    symbol: "iLTC",
                    name: "Synth Inverse Litecoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iLTC.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xA5a5DF41883Cdc00c4cCC6E8097130535399d9a3",
                    symbol: "iOIL",
                    name: "Synth Inverse Perpetual Oil Futures",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iOIL.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x0fEd38108bdb8e62ef7b5680E8E0726E2F29e0De",
                    symbol: "iREN",
                    name: "Synth Inverse Ren",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iREN.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xC5807183a9661A533CB08CbC297594a0B864dc12",
                    symbol: "iTRX",
                    name: "Synth Inverse TRON",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iTRX.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x36A00FF9072570eF4B9292117850B8FE08d96cce",
                    symbol: "iUNI",
                    name: "Synth Inverse Uniswap",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iUNI.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x4AdF728E2Df4945082cDD6053869f51278fae196",
                    symbol: "iXMR",
                    name: "Synth Inverse Monero",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXMR.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6",
                    symbol: "iXRP",
                    name: "Synth Inverse Ripple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXRP.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x8deef89058090ac5655A99EEB451a4f9183D1678",
                    symbol: "iXTZ",
                    name: "Synth Inverse Tezos",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iXTZ.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0x592244301CeA952d6daB2fdC1fE6bd9E53917306",
                    symbol: "iYFI",
                    name: "Synth Inverse yearn.finance",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/iYFI.svg",
                    tags: ["inverse", "synth"]
                }, {
                    chainId: 1,
                    address: "0xcD39b5434a0A92cf47D1F567a7dF84bE356814F0",
                    symbol: "s1INCH",
                    name: "Synth 1inch",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/s1INCH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x7537AAe01f3B218DAE75e10d952473823F961B87",
                    symbol: "sAAPL",
                    name: "Synth Apple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAAPL.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076",
                    symbol: "sAAVE",
                    name: "Synth Aave",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAAVE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xe36E2D3c7c34281FA3bC737950a68571736880A1",
                    symbol: "sADA",
                    name: "Synth Cardano",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sADA.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x9CF7E61853ea30A41b02169391b393B901eac457",
                    symbol: "sAMZN",
                    name: "Synth Amazon",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAMZN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xF48e200EAF9906362BB1442fca31e0835773b8B4",
                    symbol: "sAUD",
                    name: "Synth Australian Dollars",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sAUD.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848",
                    symbol: "sBNB",
                    name: "Synth Binance Coin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sBNB.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
                    symbol: "sBTC",
                    name: "Synth Bitcoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sBTC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xeABACD844A196D7Faf3CE596edeBF9900341B420",
                    symbol: "sCEX",
                    name: "Synth Centralised Exchange Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCEX.svg",
                    tags: ["index", "synth"]
                }, {
                    chainId: 1,
                    address: "0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d",
                    symbol: "sCHF",
                    name: "Synth Swiss Franc",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCHF.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x9EeF4CA7aB9fa8bc0650127341C2d3F707a40f8A",
                    symbol: "sCOIN",
                    name: "Synth Coinbase",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCOIN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xEb029507d3e043DD6C87F2917C4E82B902c35618",
                    symbol: "sCOMP",
                    name: "Synth Compound",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCOMP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD38aEb759891882e78E957c80656572503D8c1B1",
                    symbol: "sCRV",
                    name: "Synth Curve DAO Token",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sCRV.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6",
                    symbol: "sDASH",
                    name: "Synth Dash",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDASH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B",
                    symbol: "sDEFI",
                    name: "Synth DeFi Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDEFI.svg",
                    tags: ["index", "synth"]
                }, {
                    chainId: 1,
                    address: "0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6",
                    symbol: "sDOT",
                    name: "Synth Polkadot",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sDOT.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x88C8Cf3A212c0369698D13FE98Fcb76620389841",
                    symbol: "sEOS",
                    name: "Synth EOS",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sEOS.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x22602469d704BfFb0936c7A7cfcD18f7aA269375",
                    symbol: "sETC",
                    name: "Synth Ethereum Classic",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sETC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
                    symbol: "sETH",
                    name: "Synth Ether",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sETH.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
                    symbol: "sEUR",
                    name: "Synth Euros",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sEUR.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xf50B5e535F62a56A9BD2d8e2434204E726c027Fa",
                    symbol: "sFB",
                    name: "Synth Facebook",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sFB.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x23348160D7f5aca21195dF2b70f28Fce2B0be9fC",
                    symbol: "sFTSE",
                    name: "Synth FTSE 100 Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sFTSE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F",
                    symbol: "sGBP",
                    name: "Synth Pound Sterling",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sGBP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xC63B8ECCE56aB9C46184eC6aB85e4771fEa4c8AD",
                    symbol: "sGOOG",
                    name: "Synth Alphabet",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sGOOG.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d",
                    symbol: "sJPY",
                    name: "Synth Japanese Yen",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sJPY.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B",
                    symbol: "sKRW",
                    name: "Synth South Korean Won",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sKRW.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6",
                    symbol: "sLINK",
                    name: "Synth Chainlink",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sLINK.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xC14103C2141E842e228FBaC594579e798616ce7A",
                    symbol: "sLTC",
                    name: "Synth Litecoin",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sLTC.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x745a824D6aBBD236AA794b5530062778A6Ad7523",
                    symbol: "sMSFT",
                    name: "Synth Microsoft",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sMSFT.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5A7E3c07604EB515C16b36cd51906a65f021F609",
                    symbol: "sNFLX",
                    name: "Synth Netflix",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sNFLX.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x757de3ac6B830a931eF178C6634c5C551773155c",
                    symbol: "sNIKKEI",
                    name: "Synth Nikkei 225 Index",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sNIKKEI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x6d16cF3EC5F763d4d99cB0B0b110eefD93B11B56",
                    symbol: "sOIL",
                    name: "Synth Perpetual Oil Futures",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sOIL.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xD31533E8d0f3DF62060e94B3F1318137bB6E3525",
                    symbol: "sREN",
                    name: "Synth Ren",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sREN.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x0352557B007A4Aae1511C114409b932F06F9E2f4",
                    symbol: "sRUNE",
                    name: "Synth THORChain",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sRUNE.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xf2E08356588EC5cd9E437552Da87C0076b4970B0",
                    symbol: "sTRX",
                    name: "Synth TRON",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sTRX.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x918dA91Ccbc32B7a6A0cc4eCd5987bbab6E31e6D",
                    symbol: "sTSLA",
                    name: "Synth Tesla",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sTSLA.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x30635297E450b930f8693297eBa160D9e6c8eBcf",
                    symbol: "sUNI",
                    name: "Synth Uniswap",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sUNI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x6A22e5e94388464181578Aa7A6B869e00fE27846",
                    symbol: "sXAG",
                    name: "Synth Silver Ounce",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXAG.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
                    symbol: "sXAU",
                    name: "Synth Gold Ounce",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXAU.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x5299d6F7472DCc137D7f3C4BcfBBB514BaBF341A",
                    symbol: "sXMR",
                    name: "Synth Monero",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXMR.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c",
                    symbol: "sXRP",
                    name: "Synth Ripple",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXRP.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd",
                    symbol: "sXTZ",
                    name: "Synth Tezos",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sXTZ.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x992058B7DB08F9734d84485bfbC243C4ee6954A7",
                    symbol: "sYFI",
                    name: "Synth yearn.finance",
                    decimals: 18,
                    logoURI: "https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.10/synths/sYFI.svg",
                    tags: ["synth"]
                }, {
                    chainId: 1,
                    address: "0x81ab848898b5ffD3354dbbEfb333D5D183eEDcB5",
                    name: "yUSD Synthetic Expiring 1 September 2020",
                    symbol: "yUSDSEP20",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xB2FdD60AD80ca7bA89B9BAb3b5336c2601C020b4",
                    name: "yUSD Synthetic Expiring 1 October 2020",
                    symbol: "yUSDOCT20",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x208d174775dc39fe18b1b374972f77ddec6c0f73",
                    name: "uUSDrBTC Synthetic Expiring 1 Oct 2020",
                    symbol: "uUSDrBTC-OCT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf06ddacf71e2992e2122a1a0168c6967afdf63ce",
                    name: "uUSDrBTC Synthetic Expiring 31 Dec 2020",
                    symbol: "uUSDrBTC-DEC",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xd16c79c8a39d44b2f3eb45d2019cd6a42b03e2a9",
                    name: "uUSDwETH Synthetic Expiring 31 Dec 2020",
                    symbol: "uUSDwETH-DEC",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x3d995510f8d82c2ea341845932b5ddde0bead9a3",
                    name: "uGAS-JAN21 Token Expiring 31 Jan 2021",
                    symbol: "uGAS-JAN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x90f802c7e8fb5d40b0de583e34c065a3bd2020d8",
                    name: "YD-ETH-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "YD-ETH-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x002f0b1a71c5730cf2f4da1970a889207bdb6d0d",
                    name: "YD-BTC-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "YD-BTC-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x1062ad0e59fa67fa0b27369113098cc941dd0d5f",
                    name: "UMA 35 Call Expirying 30 Apr 2021",
                    symbol: "UMAc35-0421",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf93340b1a3adf7eedcaec25fae8171d4b736e89f",
                    name: "pxUSD Synthetic USD Expiring 1 April 2021",
                    symbol: "pxUSD_MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x84bd083b1c8bf929f39c98bc17cf518f40154f58",
                    name: "Mario Cash Synthetic Token Expiring 15 January 2021",
                    symbol: "Mario Cash-JAN-2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x81fab276aec924fbde190cf379783526d413cf70",
                    name: "uGAS-FEB21 Token Expiring 28 Feb 2021",
                    symbol: "uGAS-FEB21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4e110603e70b0b5f1c403ee543b37e1f1244cf28",
                    name: "uGAS-MAR21 Token Expiring 31 Mar 2021",
                    symbol: "uGAS-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xcf55a7f92d5e0c6683debbc1fc20c0a6e056df13",
                    name: "Zelda Elastic Cash",
                    symbol: "Zelda Elastic Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x654eebac62240e6c56bab5f6adf7cfa74a894510",
                    name: "Zelda Spring Nuts Cash",
                    symbol: "Zelda Spring Nuts Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xa48920cc1ad85d8ea13af5d7be180c0338c306dd",
                    name: "Zelda Summer Nuts Cash",
                    symbol: "Zelda Summer Nuts Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x249a198d59b57fda5dda90630febc86fd8c7594c",
                    name: "Zelda Whirlwind Cash",
                    symbol: "Zelda Whirlwind Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x5ed1406873c9eb91f6f9a67ac4e152387c1132e7",
                    name: "Zelda Reinforced Cash",
                    symbol: "Zelda Reinforced Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x8104c9f13118320eefe5fbea8a44d600b85981ef",
                    name: "Mini Mario Summer Cash",
                    symbol: "Mini Mario Summer Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x69746c719e59674b147df25f50e7cfa0673cb625",
                    name: "Mini Mario Spring Cash",
                    symbol: "Mini Mario Spring Cash",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x6b1257641d18791141f025eab36fb567c4b564ff",
                    name: "Bitcoin Dominance Token 31 March 2021",
                    symbol: "BTCDOM-MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4e83b6287588a96321b2661c5e041845ff7814af",
                    name: "Altcoin Dominance Token 31 March 2021",
                    symbol: "ALTDOM-MAR2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x59fec83ec709c893aedd1a144cf1828eb04127cd",
                    name: "pxGOLD Synthetic GOLD Expiring 31 May 2021",
                    symbol: "pxGOLD_MAY2021",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x89337BFb7938804c3776C9FB921EccAf5ab76758",
                    name: "Compound Annualized Rate Future Expiring 28 March 2021",
                    symbol: "CAR-USDC-MAR21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xec58d3aefc9aaa2e0036fa65f70d569f49d9d1ed",
                    name: "uSTONKS Index Token April 2021",
                    symbol: "uSTONKS_APR21",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xa6B9d7E3d76cF23549293Fb22c488E0Ea591A44e",
                    name: "uGAS-JUN21 Token Expiring 30 Jun 2021",
                    symbol: "uGAS-JUN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xe813b65da6c38a04591aed3f082d32db7d53c382",
                    name: "Yield Dollar [WETH Dec 2021]",
                    symbol: "YD-ETH-DEC21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4b606e9eb2228c70f44453afe5a73e1fea258ce1",
                    name: "pxUSD Synthetic USD Expiring 31 Mar 2022",
                    symbol: "pxUSD_MAR2022",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x5247c0db4044fb6f97f32c7e1b48758019a5a912",
                    name: "pxGOLD Synthetic Gold Expiring 31 Mar 2022",
                    symbol: "pxGOLD_MAR2022",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x56fb1acaff95c0b6ebcd17c8361a63d98b1a5a11",
                    name: "uForex CNYUSD Synthetic Token April 2021",
                    symbol: "uCNYUSD-APR",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xd49fa405dce086c65d66ca1ca41f8e98583812b4",
                    name: "uForex EURUSD Synthetic Token April 2021",
                    symbol: "uEURUSD-APR",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0x29dddacba3b231ee8d673dd0f0fa759ea145561b",
                    name: "DEFI_PULSE_TOTAL_TVL Synthetic Token Expiring 15 April 2021",
                    symbol: "TVL_ALL_APRIL15",
                    decimals: 6
                }, {
                    chainId: 1,
                    address: "0xcbe430927370e95b4b10cfc702c6017ec7abefc3",
                    name: "Yield Dollar [WETH Jun 2021]",
                    symbol: "YD-ETH-JUN21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x4b7fb448df91c8ed973494f8c8c4f12daf3a8521",
                    name: "Yield Dollar [renBTC Jun 2021]",
                    symbol: "YD-BTC-JUN21",
                    decimals: 8
                }, {
                    chainId: 1,
                    address: "0x3108c33b6fb38efedaefd8b5f7ca01d5f5c7372d",
                    name: "Yield Dollar UMA 21",
                    symbol: "yUMA21",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7",
                    name: "Mirrored Amazon",
                    symbol: "MAMZN",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x31c63146a635EB7465e5853020b39713AC356991",
                    name: "M US Oil",
                    symbol: "MUSO",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x59A921Db27Dd6d4d974745B7FfC5c33932653442",
                    name: "M Google",
                    symbol: "MGOOGL",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86",
                    name: "Mirrored ProShares",
                    symbol: "MVIXY",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72",
                    name: "Mirrored Alibaba",
                    symbol: "MBABA",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x0e99cC0535BB6251F6679Fa6E65d6d3b430e840B",
                    name: "Mirrored Facebook",
                    symbol: "MFB",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x13B02c8dE71680e71F0820c996E4bE43c2F57d15",
                    name: "Mirrored Invesco QQ",
                    symbol: "MQQQ",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7",
                    name: "Mirrored Microsoft",
                    symbol: "MMSFT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676",
                    name: "Mirrored iShares Si",
                    symbol: "MSLV",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x21cA39943E91d704678F5D00b6616650F066fD63",
                    name: "Mirrored Tesla",
                    symbol: "MTSLA",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0xe82bbB62fA81d0701643d1675FB50ec52fD3Df92",
                    name: "DYDX Token",
                    symbol: "DYDX",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
                    name: "sETH",
                    symbol: "Synth Ether",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0x298B9B95708152ff6968aafd889c6586e9169f1D",
                    name: "sBTC",
                    symbol: "Synth Bitcoin",
                    decimals: 18
                }, {
                    chainId: 10,
                    address: "0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
                    name: "sLINK",
                    symbol: "Synth Link",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x6B60eE11b73230045cF9095E6e43AE9Ea638e172",
                    name: "Shatner",
                    symbol: "SHAT",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x7277a44D1325D81Ac58893002a1B40a41bea43fe",
                    name: "FAANG Index",
                    symbol: "FAANG",
                    decimals: 18
                }, {
                    chainId: 1,
                    address: "0x76175599887730786bdA1545D0D7AcE8737fEBB1",
                    name: "ENS DAO",
                    symbol: "ENS",
                    decimals: 18
                }]
            };
            class tq extends B.Route {
                constructor() {
                    super(...arguments), this.protocol = ee.Protocol.V3
                }
            }
            class t$ extends et.Route {
                constructor() {
                    super(...arguments), this.protocol = ee.Protocol.V2
                }
            }
            class tV extends ee.MixedRouteSDK {
                constructor() {
                    super(...arguments), this.protocol = ee.Protocol.MIXED
                }
            }(s = b || (b = {}))[s.SUCCESS = 1] = "SUCCESS", s[s.NO_ROUTE_FOUND = 2] = "NO_ROUTE_FOUND", s[s.NO_SWAP_NEEDED = 3] = "NO_SWAP_NEEDED", (o = y || (y = {}))[o.UNIVERSAL_ROUTER = 0] = "UNIVERSAL_ROUTER", o[o.SWAP_ROUTER_02 = 1] = "SWAP_ROUTER_02";
            let tH = e => {
                switch (e) {
                    case E.ChainId.OPTIMISM:
                    case E.ChainId.OPTIMISM_GOERLI:
                    case E.ChainId.BASE:
                    case E.ChainId.BASE_GOERLI:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 2,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 3
                            },
                            maxSwapsPerPath: 3,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 10,
                            forceCrossProtocol: !1
                        };
                    case E.ChainId.ARBITRUM_ONE:
                    case E.ChainId.ARBITRUM_GOERLI:
                    case E.ChainId.CELO:
                    case E.ChainId.CELO_ALFAJORES:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 2,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 2
                            },
                            maxSwapsPerPath: 2,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 25,
                            forceCrossProtocol: !1
                        };
                    default:
                        return {
                            v2PoolSelection: {
                                topN: 3,
                                topNDirectSwaps: 1,
                                topNTokenInOut: 5,
                                topNSecondHop: 2,
                                topNWithEachBaseToken: 2,
                                topNWithBaseToken: 6
                            },
                            v3PoolSelection: {
                                topN: 2,
                                topNDirectSwaps: 2,
                                topNTokenInOut: 3,
                                topNSecondHop: 1,
                                topNWithEachBaseToken: 3,
                                topNWithBaseToken: 5
                            },
                            maxSwapsPerPath: 3,
                            minSplits: 1,
                            maxSplits: 7,
                            distributionPercent: 5,
                            forceCrossProtocol: !1
                        }
                }
            };
            var tj = f(88178),
                tW = f.n(tj),
                tQ = f(64116),
                tY = f.n(tQ);
            let tX = {
                [E.ChainId.MAINNET]: [ep, eu, ec],
                [E.ChainId.ARBITRUM_ONE]: [eL, eR, eD],
                [E.ChainId.OPTIMISM]: [eO, eE, eA],
                [E.ChainId.OPTIMISM_GOERLI]: [ex, ew, eP],
                [E.ChainId.ARBITRUM_GOERLI]: [eN],
                [E.ChainId.GOERLI]: [eC, eI, eg, ev],
                [E.ChainId.SEPOLIA]: [em, eT],
                [E.ChainId.POLYGON]: [eG],
                [E.ChainId.POLYGON_MUMBAI]: [e$],
                [E.ChainId.CELO]: [eK],
                [E.ChainId.CELO_ALFAJORES]: [e1],
                [E.ChainId.GNOSIS]: [e3],
                [E.ChainId.MOONBEAM]: [e7],
                [E.ChainId.BNB]: [eY, eQ, ej],
                [E.ChainId.AVALANCHE]: [e6, e8],
                [E.ChainId.BASE]: [e2]
            };
            class tz {}
            class tK {}
            let tJ = tr.O$.from(0),
                tZ = e => {
                    switch (e) {
                        case E.ChainId.MAINNET:
                        case E.ChainId.GOERLI:
                        case E.ChainId.SEPOLIA:
                        case E.ChainId.OPTIMISM:
                        case E.ChainId.OPTIMISM_GOERLI:
                        case E.ChainId.BNB:
                        case E.ChainId.AVALANCHE:
                        case E.ChainId.BASE:
                        case E.ChainId.BASE_GOERLI:
                            return tr.O$.from(2e3);
                        case E.ChainId.ARBITRUM_ONE:
                        case E.ChainId.ARBITRUM_GOERLI:
                            return tr.O$.from(5e3);
                        case E.ChainId.POLYGON:
                        case E.ChainId.POLYGON_MUMBAI:
                        case E.ChainId.CELO:
                        case E.ChainId.CELO_ALFAJORES:
                        case E.ChainId.GNOSIS:
                        case E.ChainId.MOONBEAM:
                            return tr.O$.from(2e3)
                    }
                },
                t0 = e => {
                    switch (e) {
                        case E.ChainId.MAINNET:
                        case E.ChainId.GOERLI:
                        case E.ChainId.SEPOLIA:
                        case E.ChainId.BNB:
                        case E.ChainId.AVALANCHE:
                        case E.ChainId.OPTIMISM:
                        case E.ChainId.OPTIMISM_GOERLI:
                        case E.ChainId.BASE:
                        case E.ChainId.BASE_GOERLI:
                        case E.ChainId.ARBITRUM_ONE:
                        case E.ChainId.ARBITRUM_GOERLI:
                        case E.ChainId.POLYGON:
                        case E.ChainId.POLYGON_MUMBAI:
                        case E.ChainId.CELO:
                        case E.ChainId.CELO_ALFAJORES:
                        case E.ChainId.GNOSIS:
                        case E.ChainId.MOONBEAM:
                            return tr.O$.from(31e3)
                    }
                },
                t1 = e => {
                    switch (e) {
                        case E.ChainId.MAINNET:
                        case E.ChainId.GOERLI:
                        case E.ChainId.SEPOLIA:
                        case E.ChainId.BNB:
                        case E.ChainId.OPTIMISM:
                        case E.ChainId.OPTIMISM_GOERLI:
                        case E.ChainId.AVALANCHE:
                        case E.ChainId.BASE:
                        case E.ChainId.BASE_GOERLI:
                        case E.ChainId.ARBITRUM_ONE:
                        case E.ChainId.ARBITRUM_GOERLI:
                        case E.ChainId.POLYGON:
                        case E.ChainId.POLYGON_MUMBAI:
                        case E.ChainId.CELO:
                        case E.ChainId.CELO_ALFAJORES:
                        case E.ChainId.GNOSIS:
                        case E.ChainId.MOONBEAM:
                            return tr.O$.from(8e4)
                    }
                },
                t5 = e => tr.O$.from(15e3),
                t6 = (e, t) => {
                    let f = t.tokenPath,
                        n = tr.O$.from(0);
                    return e == E.ChainId.MAINNET && (f.some(e => e.equals(eb)) && (n = n.add(15e4)), f.some(e => e.equals(ey)) && (n = n.add(15e4))), n
                };
            class t8 extends tK {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    pools: f,
                    amountToken: n,
                    quoteToken: a,
                    l2GasDataProvider: i
                }) {
                    let r = i ? await i.getGasData() : void 0,
                        s = f.usdPool,
                        o = async t => {
                            let n = {
                                    type: y.UNIVERSAL_ROUTER,
                                    recipient: "0x0000000000000000000000000000000000000001",
                                    deadlineOrPreviousBlockhash: 100,
                                    slippageTolerance: new E.Percent(5, 1e4)
                                },
                                i = tr.O$.from(0),
                                o = tr.O$.from(0),
                                d = [E.ChainId.OPTIMISM, E.ChainId.OPTIMISM_GOERLI, E.ChainId.BASE, E.ChainId.BASE_GOERLI];
                            d.includes(e) ? [i, o] = this.calculateOptimismToL1SecurityFee(t, n, r) : (e == E.ChainId.ARBITRUM_ONE || e == E.ChainId.ARBITRUM_GOERLI) && ([i, o] = this.calculateArbitrumToL1SecurityFee(t, n, r));
                            let u = G[e],
                                c = K.fromRawAmount(u, o.toString()),
                                l = s.token0.address == u.address ? s.token0Price : s.token1Price,
                                p = l.quote(c),
                                h = c;
                            if (!a.equals(u)) {
                                let e = f.nativeQuoteTokenV3Pool;
                                if (e) {
                                    let t = e.token0.address == u.address ? e.token0Price : e.token1Price;
                                    h = t.quote(c)
                                } else S.info("Could not find a pool to convert the cost into the quote token"), h = K.fromRawAmount(a, 0)
                            }
                            return {
                                gasUsedL1: i,
                                gasCostL1USD: p,
                                gasCostL1QuoteToken: h
                            }
                        },
                        d = G[e];
                    if (a.equals(d)) return {
                        estimateGasCost: f => {
                            let {
                                totalGasCostNativeCurrency: n,
                                baseGasUse: a
                            } = this.estimateGas(f, t, e), i = s.token0.address == d.address, r = i ? s.token0Price : s.token1Price, o = r.quote(n);
                            return {
                                gasEstimate: a,
                                gasCostInToken: n,
                                gasCostInUSD: o
                            }
                        },
                        calculateL1GasFees: o
                    };
                    let u = f.nativeQuoteTokenV3Pool,
                        c = null;
                    n.equals(d) || (c = f.nativeAmountTokenV3Pool);
                    let l = s.token0.address == d.address ? s.token1 : s.token0;
                    return {
                        estimateGasCost: (f => {
                            let i;
                            let {
                                totalGasCostNativeCurrency: r,
                                baseGasUse: o
                            } = this.estimateGas(f, t, e), p = null;
                            if (u) {
                                let e = u.token0.address == d.address,
                                    t = e ? u.token0Price : u.token1Price;
                                try {
                                    p = t.quote(r)
                                } catch (e) {
                                    throw S.info({
                                        nativeTokenPriceBase: t.baseCurrency,
                                        nativeTokenPriceQuote: t.quoteCurrency,
                                        gasCostInEth: r.currency
                                    }, "Debug eth price token issue"), e
                                }
                            } else S.info(`Unable to find ${d.symbol} pool with the quote token, ${a.symbol} to produce gas adjusted costs. Using amountToken to calculate gas costs.`);
                            if (c) {
                                let e = new E.Price(f.amount.currency, f.quote.currency, f.amount.quotient, f.quote.quotient),
                                    t = c.token0.address == d.address,
                                    n = t ? c.token0Price : c.token1Price,
                                    a = n.quote(r),
                                    i = e.quote(a);
                                (null === p || i.lessThan(p.asFraction)) && (S.info({
                                    nativeAmountTokenPrice: n.toSignificant(6),
                                    gasCostInTermsOfQuoteToken: p ? p.toExact() : 0,
                                    gasCostInTermsOfAmountToken: a.toExact(),
                                    executionPrice: e.toSignificant(6),
                                    syntheticGasCostInTermsOfQuoteToken: i.toSignificant(6)
                                }, "New gasCostInTermsOfQuoteToken calculated with synthetic quote token price is less than original"), p = i)
                            }
                            let h = s.token0.address == d.address,
                                b = h ? s.token0Price : s.token1Price;
                            try {
                                i = b.quote(r)
                            } catch (e) {
                                throw S.info({
                                    usdT1: s.token0.symbol,
                                    usdT2: s.token1.symbol,
                                    gasCostInNativeToken: r.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return null === p ? (S.info(`Unable to find ${d.symbol} pool with the quote token, ${a.symbol}, or amount Token, ${n.symbol} to produce gas adjusted costs. Route will not account for gas.`), {
                                gasEstimate: o,
                                gasCostInToken: K.fromRawAmount(a, 0),
                                gasCostInUSD: K.fromRawAmount(l, 0)
                            }) : {
                                gasEstimate: o,
                                gasCostInToken: p,
                                gasCostInUSD: i
                            }
                        }).bind(this),
                        calculateL1GasFees: o
                    }
                }
                estimateGas(e, t, f) {
                    let n = tr.O$.from(Math.max(1, M().sum(e.initializedTicksCrossedList))),
                        a = tr.O$.from(e.route.pools.length),
                        i = t1(f).mul(a);
                    a.eq(1) && (i = i.add(t5(f)));
                    let r = t6(f, e.route),
                        s = t0(f).mul(n),
                        o = tJ.mul(0),
                        d = tZ(f).add(i).add(r).add(s).add(o),
                        u = t.mul(d),
                        c = G[f],
                        l = K.fromRawAmount(c, u.toString());
                    return {
                        totalGasCostNativeCurrency: l,
                        totalInitializedTicksCrossed: n,
                        baseGasUse: d
                    }
                }
                calculateOptimismToL1SecurityFee(e, t, f) {
                    let {
                        l1BaseFee: n,
                        scalar: a,
                        decimals: i,
                        overhead: r
                    } = f, s = e[0], o = s.tradeType == E.TradeType.EXACT_INPUT ? s.amount.currency : s.quote.currency, d = s.tradeType == E.TradeType.EXACT_INPUT ? s.quote.currency : s.amount.currency, u = tB(o, d, s.tradeType, e), c = tL(u, t, E.ChainId.OPTIMISM).calldata, l = tU(c, r), p = l.mul(n), h = p.mul(a), b = tr.O$.from(10).pow(i), y = h.div(b);
                    return [l, y]
                }
                calculateArbitrumToL1SecurityFee(e, t, f) {
                    let {
                        perL2TxFee: n,
                        perL1CalldataFee: a
                    } = f, i = e[0], r = i.tradeType == E.TradeType.EXACT_INPUT ? i.amount.currency : i.quote.currency, s = i.tradeType == E.TradeType.EXACT_INPUT ? i.quote.currency : i.amount.currency, o = tB(r, s, i.tradeType, e), d = tL(o, t, E.ChainId.ARBITRUM_ONE).calldata, u = tU(d, tr.O$.from(0)), c = u.mul(a);
                    return [u, c = c.add(n)]
                }
            }
            async function t2(e, t, f, n, a, i, r) {
                let s = Date.now(),
                    {
                        forceMixedRoutes: o
                    } = i;
                if (o && (S.info({
                        forceMixedRoutes: o
                    }, "Forcing mixed routes by filtering out other route types"), !(f = M().filter(f, e => e.protocol === ee.Protocol.MIXED)))) return null;
                let d = {};
                for (let e of f) d[e.percent] || (d[e.percent] = []), d[e.percent].push(e);
                R.putMetric("BuildRouteWithValidQuoteObjects", Date.now() - s, c.Milliseconds);
                let u = await t3(n, d, t, a, e => e.quoteAdjustedForGas, i, r);
                if (!u) return null;
                let {
                    routes: l
                } = u, p = M().reduce(l, (e, t) => e.add(t.amount), K.fromRawAmount(l[0].amount.currency, 0)), h = e.subtract(p);
                return h.greaterThan(0) && (S.info({
                    missingAmount: h.quotient.toString()
                }, "Optimal route's amounts did not equal exactIn/exactOut total. Adding missing amount to last route in array."), l[l.length - 1].amount = l[l.length - 1].amount.add(h)), S.info({
                    routes: en(l),
                    numSplits: l.length,
                    amount: e.toExact(),
                    quote: u.quote.toExact(),
                    quoteGasAdjusted: u.quoteGasAdjusted.toFixed(Math.min(u.quoteGasAdjusted.currency.decimals, 2)),
                    estimatedGasUSD: u.estimatedGasUsedUSD.toFixed(Math.min(u.estimatedGasUsedUSD.currency.decimals, 2)),
                    estimatedGasToken: u.estimatedGasUsedQuoteToken.toFixed(Math.min(u.estimatedGasUsedQuoteToken.currency.decimals, 2))
                }, `Found best swap route. ${l.length} split.`), u
            }
            async function t3(e, t, f, n, a, i, r) {
                var s;
                let o, d;
                let u = M().mapValues(t, t => t.sort((t, f) => e == E.TradeType.EXACT_INPUT ? a(t).greaterThan(a(f)) ? -1 : 1 : a(t).lessThan(a(f)) ? -1 : 1)),
                    l = e == E.TradeType.EXACT_INPUT ? (e, t) => e.greaterThan(t) : (e, t) => e.lessThan(t),
                    p = e => {
                        let t = e[0];
                        for (let f = 1; f < e.length; f++) t = t.add(e[f]);
                        return t
                    },
                    h = new(tW())(Array, (e, t) => l(e.quote, t.quote) ? -1 : 1, 3),
                    {
                        minSplits: b,
                        maxSplits: y,
                        forceCrossProtocol: m
                    } = i;
                if (!u[100] || b > 1 || m) S.info({
                    percentToSortedQuotes: M().mapValues(u, e => e.length)
                }, "Did not find a valid route without any splits. Continuing search anyway.");
                else
                    for (let e of (o = a(u[100][0]), d = [u[100][0]], u[100].slice(0, 5))) h.push({
                        quote: a(e),
                        routes: [e]
                    });
                let T = new(tY());
                for (let e = f.length; e >= 0; e--) {
                    let t = f[e];
                    u[t] && (T.enqueue({
                        curRoutes: [u[t][0]],
                        percentIndex: e,
                        remainingPercent: 100 - t,
                        special: !1
                    }), u[t] && u[t][1] && T.enqueue({
                        curRoutes: [u[t][1]],
                        percentIndex: e,
                        remainingPercent: 100 - t,
                        special: !0
                    }))
                }
                let I = 1,
                    g = Date.now();
                for (; T.size > 0;) {
                    R.putMetric(`Split${I}Done`, Date.now() - g, c.Milliseconds), g = Date.now(), S.info({
                        top5: M().map(Array.from(h.consume()), e => `${e.quote.toExact()} (${M()(e.routes).map(e=>e.toString()).join(", ")})`),
                        onQueue: T.size
                    }, `Top 3 with ${I} splits`), h.clear();
                    let t = T.size;
                    if (++I >= 3 && d && d.length < I - 1) break;
                    if (I > y) {
                        S.info("Max splits reached. Stopping search."), R.putMetric("MaxSplitsHitReached", 1, c.Count);
                        break
                    }
                    for (; t > 0;) {
                        t--;
                        let {
                            remainingPercent: i,
                            curRoutes: s,
                            percentIndex: y,
                            special: g
                        } = T.dequeue();
                        for (let t = y; t >= 0; t--) {
                            let y = f[t];
                            if (y > i || !u[y]) continue;
                            let v = u[y],
                                C = t9(s, v, m);
                            if (!C) continue;
                            let A = i - y,
                                S = [...s, C];
                            if (0 == A && I >= b) {
                                let t = M().map(S, e => a(e)),
                                    f = p(t),
                                    i = K.fromRawAmount(f.currency, 0);
                                if (_.includes(n)) {
                                    let e = S.every(e => e.protocol == ee.Protocol.V3);
                                    if (void 0 != r && e) {
                                        let e = await r.calculateL1GasFees(S);
                                        i = e.gasCostL1QuoteToken
                                    } else throw Error("Can't compute L1 gas fees.")
                                }
                                let s = e == E.TradeType.EXACT_INPUT ? f.subtract(i) : f.add(i);
                                h.push({
                                    quote: s,
                                    routes: S
                                }), (!o || l(s, o)) && (o = s, d = S, g && R.putMetric("BestSwapNotPickingBestForPercent", 1, c.Count))
                            } else T.enqueue({
                                curRoutes: S,
                                remainingPercent: A,
                                percentIndex: t,
                                special: g
                            })
                        }
                    }
                }
                if (!d) {
                    S.info("Could not find a valid swap");
                    return
                }
                let v = Date.now(),
                    C = p(M().map(d, e => e.quoteAdjustedForGas)),
                    A = M()(d).map(e => e.gasEstimate).reduce((e, t) => e.add(t), tr.O$.from(0));
                if (!tX[n] || !tX[n][0]) throw Error(`Could not find a USD token for computing gas costs on ${n}`);
                let O = tX[n][0],
                    k = O.decimals,
                    w = {
                        gasUsedL1: tr.O$.from(0),
                        gasCostL1USD: K.fromRawAmount(O, 0),
                        gasCostL1QuoteToken: K.fromRawAmount(null === (s = d[0]) || void 0 === s ? void 0 : s.quoteToken, 0)
                    };
                if (_.includes(n)) {
                    let e = d.every(e => e.protocol == ee.Protocol.V3);
                    if (void 0 != r && e) w = await r.calculateL1GasFees(d);
                    else throw Error("Can't compute L1 gas fees.")
                }
                let {
                    gasCostL1USD: P,
                    gasCostL1QuoteToken: x
                } = w, D = M()(d).map(e => {
                    let t = k - e.gasCostInUSD.currency.decimals;
                    return 0 == t ? K.fromRawAmount(O, e.gasCostInUSD.quotient) : K.fromRawAmount(O, z().multiply(e.gasCostInUSD.quotient, z().exponentiate(z().BigInt(10), z().BigInt(t))))
                }).value(), B = p(D);
                if (B.currency != P.currency) {
                    let e = k - P.currency.decimals;
                    B = B.add(K.fromRawAmount(O, z().multiply(P.quotient, z().exponentiate(z().BigInt(10), z().BigInt(e)))))
                } else B = B.add(P);
                S.info({
                    estimatedGasUsedUSD: B.toExact(),
                    normalizedUsdToken: O,
                    routeUSDGasEstimates: M().map(d, e => `${e.percent}% ${ef(e.route)} ${e.gasCostInUSD.toExact()}`),
                    flatL1GasCostUSD: P.toExact()
                }, "USD gas estimates of best route");
                let L = p(M().map(d, e => e.gasCostInToken)).add(x),
                    N = p(M().map(d, e => e.quote));
                if (e == E.TradeType.EXACT_INPUT) {
                    let e = C.subtract(x);
                    C = e
                } else {
                    let e = C.add(x);
                    C = e
                }
                let F = d.sort((e, t) => t.amount.greaterThan(e.amount) ? 1 : -1);
                return R.putMetric("PostSplitDone", Date.now() - v, c.Milliseconds), {
                    quote: N,
                    quoteGasAdjusted: C,
                    estimatedGasUsed: A,
                    estimatedGasUsedUSD: B,
                    estimatedGasUsedQuoteToken: L,
                    routes: F
                }
            }
            let t9 = (e, t, f) => {
                    let n = new Set,
                        a = M()(e).flatMap(e => e.poolAddresses).value();
                    for (let e of a) n.add(e);
                    let i = new Set,
                        r = M()(e).flatMap(e => e.protocol).uniq().value();
                    for (let e of r) i.add(e);
                    for (let e of t) {
                        let {
                            poolAddresses: t,
                            protocol: a
                        } = e;
                        if (t.some(e => n.has(e))) continue;
                        let r = f && 1 == i.size;
                        if (!(r && i.has(a))) return e
                    }
                    return null
                },
                t4 = tr.O$.from(135e3),
                t7 = tr.O$.from(5e4);
            class fe extends tz {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    poolProvider: f,
                    token: n
                }) {
                    if (n.equals(G[e])) {
                        let n = await this.getHighestLiquidityUSDPool(e, f);
                        return {
                            estimateGasCost: f => {
                                let {
                                    gasCostInEth: a,
                                    gasUse: i
                                } = this.estimateGas(f, t, e), r = n.token0.address == G[e].address, s = r ? n.token0Price : n.token1Price, o = s.quote(a);
                                return {
                                    gasEstimate: i,
                                    gasCostInToken: a,
                                    gasCostInUSD: o
                                }
                            }
                        }
                    }
                    let a = await this.getEthPool(e, n, f);
                    a || S.info("Unable to find ETH pool with the quote token to produce gas adjusted costs. Route will not account for gas.");
                    let i = await this.getHighestLiquidityUSDPool(e, f);
                    return {
                        estimateGasCost: f => {
                            let r, s;
                            let o = i.token0.address == G[e].address ? i.token1 : i.token0,
                                {
                                    gasCostInEth: d,
                                    gasUse: u
                                } = this.estimateGas(f, t, e);
                            if (!a) return {
                                gasEstimate: u,
                                gasCostInToken: K.fromRawAmount(n, 0),
                                gasCostInUSD: K.fromRawAmount(o, 0)
                            };
                            let c = a.token0.address == G[e].address,
                                l = c ? a.token0Price : a.token1Price;
                            try {
                                r = l.quote(d)
                            } catch (e) {
                                throw S.error({
                                    ethTokenPriceBase: l.baseCurrency,
                                    ethTokenPriceQuote: l.quoteCurrency,
                                    gasCostInEth: d.currency
                                }, "Debug eth price token issue"), e
                            }
                            let p = i.token0.address == G[e].address,
                                h = p ? i.token0Price : i.token1Price;
                            try {
                                s = h.quote(d)
                            } catch (e) {
                                throw S.error({
                                    usdT1: i.token0.symbol,
                                    usdT2: i.token1.symbol,
                                    gasCostInEthToken: d.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return {
                                gasEstimate: u,
                                gasCostInToken: r,
                                gasCostInUSD: s
                            }
                        }
                    }
                }
                estimateGas(e, t, f) {
                    let n = e.route.pairs.length,
                        a = t4.add(t7.mul(n - 1)),
                        i = t.mul(a),
                        r = G[f],
                        s = K.fromRawAmount(r, i.toString());
                    return {
                        gasCostInEth: s,
                        gasUse: a
                    }
                }
                async getEthPool(e, t, f) {
                    let n = G[e],
                        a = await f.getPools([
                            [n, t]
                        ]),
                        i = a.getPool(n, t);
                    return !i || i.reserve0.equalTo(0) || i.reserve1.equalTo(0) ? (S.error({
                        weth: n,
                        token: t,
                        reserve0: null == i ? void 0 : i.reserve0.toExact(),
                        reserve1: null == i ? void 0 : i.reserve1.toExact()
                    }, `Could not find a valid WETH pool with ${t.symbol} for computing gas costs.`), null) : i
                }
                async getHighestLiquidityUSDPool(e, t) {
                    let f = tX[e];
                    if (!f) throw Error(`Could not find a USD token for computing gas costs on ${e}`);
                    let n = M().map(f, t => [t, G[e]]),
                        a = await t.getPools(n),
                        i = a.getAllPools(),
                        r = M().filter(i, e => e.reserve0.greaterThan(0) && e.reserve1.greaterThan(0));
                    if (0 == r.length) throw S.error({
                        pools: r
                    }, "Could not find a USD/WETH pool for computing gas costs."), Error("Can't find USD/WETH pool for computing gas costs.");
                    let s = M().maxBy(r, t => t.token0.equals(G[e]) ? parseFloat(t.reserve0.toSignificant(2)) : parseFloat(t.reserve1.toSignificant(2)));
                    return s
                }
            }
            class ft extends tK {
                constructor() {
                    super()
                }
                async buildGasModel({
                    chainId: e,
                    gasPriceWei: t,
                    pools: f,
                    quoteToken: n,
                    v2poolProvider: a
                }) {
                    let i;
                    let r = f.usdPool,
                        s = G[e];
                    if (n.equals(s)) return {
                        estimateGasCost: f => {
                            let {
                                totalGasCostNativeCurrency: n,
                                baseGasUse: a
                            } = this.estimateGas(f, t, e), i = r.token0.address == s.address, o = i ? r.token0Price : r.token1Price, d = o.quote(n);
                            return {
                                gasEstimate: a,
                                gasCostInToken: n,
                                gasCostInUSD: d
                            }
                        }
                    };
                    let o = f.nativeQuoteTokenV3Pool;
                    a && (i = await t_(n, a));
                    let d = r.token0.address == s.address ? r.token1 : r.token0;
                    return {
                        estimateGasCost: (f => {
                            let a, u;
                            let {
                                totalGasCostNativeCurrency: c,
                                baseGasUse: l
                            } = this.estimateGas(f, t, e);
                            if (!o && !i) return S.info(`Unable to find ${s.symbol} pool with the quote token, ${n.symbol} to produce gas adjusted costs. Route will not account for gas.`), {
                                gasEstimate: l,
                                gasCostInToken: K.fromRawAmount(n, 0),
                                gasCostInUSD: K.fromRawAmount(d, 0)
                            };
                            let p = (!o || z().equal(o.liquidity, z().BigInt(0))) && i ? i : o,
                                h = p.token0.address == s.address,
                                b = h ? p.token0Price : p.token1Price;
                            try {
                                a = b.quote(c)
                            } catch (e) {
                                throw S.info({
                                    nativeTokenPriceBase: b.baseCurrency,
                                    nativeTokenPriceQuote: b.quoteCurrency,
                                    gasCostInEth: c.currency
                                }, "Debug eth price token issue"), e
                            }
                            let y = r.token0.address == s.address,
                                m = y ? r.token0Price : r.token1Price;
                            try {
                                u = m.quote(c)
                            } catch (e) {
                                throw S.info({
                                    usdT1: r.token0.symbol,
                                    usdT2: r.token1.symbol,
                                    gasCostInNativeToken: c.currency.symbol
                                }, "Failed to compute USD gas price"), e
                            }
                            return {
                                gasEstimate: l,
                                gasCostInToken: a,
                                gasCostInUSD: u
                            }
                        }).bind(this)
                    }
                }
                estimateGas(e, t, f) {
                    let n = tr.O$.from(Math.max(1, M().sum(e.initializedTicksCrossedList))),
                        a = tr.O$.from(0),
                        i = e.route,
                        r = (0, ee.partitionMixedRouteByProtocol)(i);
                    r.map(e => {
                        e.every(e => e instanceof B.Pool) ? a = (a = a.add(tZ(f))).add(t1(f).mul(e.length)) : e.every(e => e instanceof et.Pair) && (a = (a = a.add(t4)).add(t7.mul(e.length - 1)))
                    });
                    let s = t0(f).mul(n),
                        o = tJ.mul(0);
                    a = a.add(s).add(o);
                    let d = t.mul(a),
                        u = G[f],
                        c = K.fromRawAmount(u, d.toString());
                    return {
                        totalGasCostNativeCurrency: c,
                        totalInitializedTicksCrossed: n,
                        baseGasUse: a
                    }
                }
            }
            class ff {
                constructor(e, t, f, n) {
                    this.tokenProvider = e, this.chainId = t, this.blockedTokenListProvider = f, this.tokenValidatorProvider = n
                }
                getRoutesThenQuotes(e, t, f, n, a, i, r, s, o) {
                    return this.getRoutes(e, t, i, r).then(e => this.getQuotes(e.routes, f, n, a, i, r, e.candidatePools, s, o))
                }
                async applyTokenValidatorToPools(e, t) {
                    if (!this.tokenValidatorProvider) return e;
                    S.info(`Running token validator on ${e.length} pools`);
                    let f = M().flatMap(e, e => [e.token0, e.token1]),
                        n = await this.tokenValidatorProvider.validateTokens(f),
                        a = M().filter(e, e => {
                            let f = n.getValidationByToken(e.token0),
                                a = n.getValidationByToken(e.token1),
                                i = t(e.token0, f),
                                r = t(e.token1, a);
                            return (i || r) && S.info(`Dropping pool ${ea(e)} because token is invalid. ${e.token0.symbol}: ${f}, ${e.token1.symbol}: ${a}`), !i && !r
                        });
                    return a
                }
            }
            class fn {
                constructor({
                    amount: e,
                    rawQuote: t,
                    percent: f,
                    route: n,
                    gasModel: a,
                    quoteToken: i,
                    tradeType: r,
                    v2PoolProvider: s
                }) {
                    this.protocol = ee.Protocol.V2, this.amount = e, this.rawQuote = t, this.quote = K.fromRawAmount(i, t.toString()), this.percent = f, this.route = n, this.gasModel = a, this.quoteToken = i, this.tradeType = r;
                    let {
                        gasEstimate: o,
                        gasCostInToken: d,
                        gasCostInUSD: u
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = d, this.gasCostInUSD = u, this.gasEstimate = o, this.tradeType == E.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(d);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(d);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = M().map(n.pairs, e => s.getPoolAddress(e.token0, e.token1).poolAddress), this.tokenPath = this.route.path
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${ef(this.route)}`
                }
            }
            class fa {
                constructor({
                    amount: e,
                    rawQuote: t,
                    sqrtPriceX96AfterList: f,
                    initializedTicksCrossedList: n,
                    quoterGasEstimate: a,
                    percent: i,
                    route: r,
                    gasModel: s,
                    quoteToken: o,
                    tradeType: d,
                    v3PoolProvider: u
                }) {
                    this.protocol = ee.Protocol.V3, this.amount = e, this.rawQuote = t, this.sqrtPriceX96AfterList = f, this.initializedTicksCrossedList = n, this.quoterGasEstimate = a, this.quote = K.fromRawAmount(o, t.toString()), this.percent = i, this.route = r, this.gasModel = s, this.quoteToken = o, this.tradeType = d;
                    let {
                        gasEstimate: c,
                        gasCostInToken: l,
                        gasCostInUSD: p
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = l, this.gasCostInUSD = p, this.gasEstimate = c, this.tradeType == E.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(l);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(l);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = M().map(r.pools, e => u.getPoolAddress(e.token0, e.token1, e.fee).poolAddress), this.tokenPath = this.route.tokenPath
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${ef(this.route)}`
                }
            }
            class fi {
                constructor({
                    amount: e,
                    rawQuote: t,
                    sqrtPriceX96AfterList: f,
                    initializedTicksCrossedList: n,
                    quoterGasEstimate: a,
                    percent: i,
                    route: r,
                    mixedRouteGasModel: s,
                    quoteToken: o,
                    tradeType: d,
                    v3PoolProvider: u,
                    v2PoolProvider: c
                }) {
                    this.protocol = ee.Protocol.MIXED, this.amount = e, this.rawQuote = t, this.sqrtPriceX96AfterList = f, this.initializedTicksCrossedList = n, this.quoterGasEstimate = a, this.quote = K.fromRawAmount(o, t.toString()), this.percent = i, this.route = r, this.gasModel = s, this.quoteToken = o, this.tradeType = d;
                    let {
                        gasEstimate: l,
                        gasCostInToken: p,
                        gasCostInUSD: h
                    } = this.gasModel.estimateGasCost(this);
                    if (this.gasCostInToken = p, this.gasCostInUSD = h, this.gasEstimate = l, this.tradeType == E.TradeType.EXACT_INPUT) {
                        let e = this.quote.subtract(p);
                        this.quoteAdjustedForGas = e
                    } else {
                        let e = this.quote.add(p);
                        this.quoteAdjustedForGas = e
                    }
                    this.poolAddresses = M().map(r.pools, e => e instanceof B.Pool ? u.getPoolAddress(e.token0, e.token1, e.fee).poolAddress : c.getPoolAddress(e.token0, e.token1).poolAddress), this.tokenPath = this.route.path
                }
                toString() {
                    return `${this.percent.toFixed(2)}% QuoteGasAdj[${this.quoteAdjustedForGas.toExact()}] Quote[${this.quote.toExact()}] Gas[${this.gasEstimate.toString()}] = ${ef(this.route)}`
                }
            }

            function fr(e, t, f, n, a) {
                var i;
                let r = Array(n.length).fill(!1),
                    s = [],
                    o = (e, t, i, r, d) => {
                        if (!(i.length > a)) {
                            if (i.length > 0 && i[i.length - 1].involvesToken(t)) {
                                s.push(f([...i], e, t));
                                return
                            }
                            for (let f = 0; f < n.length; f++) {
                                if (r[f]) continue;
                                let a = n[f],
                                    s = d || e;
                                if (!a.involvesToken(s)) continue;
                                let u = a.token0.equals(s) ? a.token1 : a.token0;
                                i.push(a), r[f] = !0, o(e, t, i, r, u), r[f] = !1, i.pop()
                            }
                        }
                    };
                return o(e, t, [], r), S.info({
                    routes: s.map(ef),
                    pools: n.map(ea)
                }, `Computed ${s.length} possible routes for type ${null===(i=s[0])||void 0===i?void 0:i.protocol}.`), s
            }
            let fs = {
                [E.ChainId.MAINNET]: [eu, ec, el, ep, G[1], eh],
                [E.ChainId.OPTIMISM]: [eO, eE, eA, eS],
                [E.ChainId.SEPOLIA]: [eT, em],
                [E.ChainId.OPTIMISM_GOERLI]: [ex, ew, eP, eM],
                [E.ChainId.ARBITRUM_ONE]: [eL, eR, eB, eD],
                [E.ChainId.ARBITRUM_GOERLI]: [eN],
                [E.ChainId.POLYGON]: [eG, eF],
                [E.ChainId.POLYGON_MUMBAI]: [e$, eq],
                [E.ChainId.CELO]: [eK, eJ, eX],
                [E.ChainId.CELO_ALFAJORES]: [e1, e5, eZ],
                [E.ChainId.GNOSIS]: [e4, e9, e3],
                [E.ChainId.MOONBEAM]: [tt, e7, tf, te],
                [E.ChainId.BNB]: [ej, eQ, eY],
                [E.ChainId.AVALANCHE]: [e6, e8],
                [E.ChainId.BASE]: [e2]
            };
            async function fo({
                tokenIn: e,
                tokenOut: t,
                routeType: f,
                routingConfig: n,
                subgraphProvider: a,
                tokenProvider: i,
                poolProvider: r,
                blockedTokenListProvider: s,
                chainId: o
            }) {
                var d, u, l, p, h;
                let {
                    blockNumber: b,
                    v3PoolSelection: {
                        topN: y,
                        topNDirectSwaps: m,
                        topNTokenInOut: T,
                        topNSecondHop: I,
                        topNSecondHopForTokenAddress: g,
                        topNWithEachBaseToken: v,
                        topNWithBaseToken: C
                    }
                } = n, A = e.address.toLowerCase(), O = t.address.toLowerCase(), k = Date.now(), w = await a.getPools(e, t, {
                    blockNumber: b
                });
                S.info({
                    samplePools: w.slice(0, 3)
                }, "Got all pools from V3 subgraph provider");
                let P = M().map(w, e => ({ ...e,
                    token0: { ...e.token0,
                        id: e.token0.id.toLowerCase()
                    },
                    token1: { ...e.token1,
                        id: e.token1.id.toLowerCase()
                    }
                }));
                R.putMetric("V3SubgraphPoolsLoad", Date.now() - k, c.Milliseconds);
                let x = P;
                if (s)
                    for (let e of (x = [], P)) {
                        let t = await s.getTokenByAddress(e.token0.id),
                            f = await s.getTokenByAddress(e.token1.id);
                        t || f || x.push(e)
                    }
                let D = M()(x).sortBy(e => -e.tvlUSD).value();
                S.info(`After filtering blocked tokens went from ${P.length} to ${D.length}.`);
                let L = new Set,
                    _ = e => {
                        M()(e).map(e => e.id).forEach(e => L.add(e))
                    },
                    N = null !== (d = fs[o]) && void 0 !== d ? d : [],
                    F = M()(N).flatMap(e => M()(D).filter(t => {
                        let f = e.address.toLowerCase();
                        return t.token0.id == f && t.token1.id == A || t.token1.id == f && t.token0.id == A
                    }).sortBy(e => -e.tvlUSD).slice(0, v).value()).sortBy(e => -e.tvlUSD).slice(0, C).value(),
                    U = M()(N).flatMap(e => M()(D).filter(t => {
                        let f = e.address.toLowerCase();
                        return t.token0.id == f && t.token1.id == O || t.token1.id == f && t.token0.id == O
                    }).sortBy(e => -e.tvlUSD).slice(0, v).value()).sortBy(e => -e.tvlUSD).slice(0, C).value(),
                    q = M()(D).filter(e => !L.has(e.id) && (e.token0.id == A && e.token1.id == O || e.token1.id == A && e.token0.id == O)).slice(0, m).value();
                0 == q.length && m > 0 && (q = M().map([B.FeeAmount.HIGH, B.FeeAmount.MEDIUM, B.FeeAmount.LOW, B.FeeAmount.LOWEST], f => {
                    let {
                        token0: n,
                        token1: a,
                        poolAddress: i
                    } = r.getPoolAddress(e, t, f);
                    return {
                        id: i,
                        feeTier: Z(f),
                        liquidity: "10000",
                        token0: {
                            id: n.address
                        },
                        token1: {
                            id: a.address
                        },
                        tvlETH: 1e4,
                        tvlUSD: 1e4
                    }
                })), _(q);
                let $ = null === (u = G[o]) || void 0 === u ? void 0 : u.address,
                    V = [];
                ((null === (l = G[o]) || void 0 === l ? void 0 : l.symbol) == (null === (p = G[E.ChainId.MAINNET]) || void 0 === p ? void 0 : p.symbol) && "WETH" != t.symbol && "WETH9" != t.symbol && "ETH" != t.symbol || (null === (h = G[o]) || void 0 === h ? void 0 : h.symbol) == eF.symbol && "MATIC" != t.symbol && "WMATIC" != t.symbol) && (V = M()(D).filter(e => f == E.TradeType.EXACT_INPUT ? e.token0.id == $ && e.token1.id == O || e.token1.id == $ && e.token0.id == O : e.token0.id == $ && e.token1.id == A || e.token1.id == $ && e.token0.id == A).slice(0, 1).value()), _(V);
                let H = M()(D).filter(e => !L.has(e.id)).slice(0, y).value();
                _(H);
                let j = M()(D).filter(e => !L.has(e.id) && (e.token0.id == A || e.token1.id == A)).slice(0, T).value();
                _(j);
                let W = M()(D).filter(e => !L.has(e.id) && (e.token0.id == O || e.token1.id == O)).slice(0, T).value();
                _(W);
                let Q = M()(j).map(e => A == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => {
                    var t;
                    return M()(D).filter(t => !L.has(t.id) && (t.token0.id == e || t.token1.id == e)).slice(0, null !== (t = null == g ? void 0 : g.get(e)) && void 0 !== t ? t : I).value()
                }).uniqBy(e => e.id).value();
                _(Q);
                let Y = M()(W).map(e => O == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => {
                    var t;
                    return M()(D).filter(t => !L.has(t.id) && (t.token0.id == e || t.token1.id == e)).slice(0, null !== (t = null == g ? void 0 : g.get(e)) && void 0 !== t ? t : I).value()
                }).uniqBy(e => e.id).value();
                _(Y);
                let X = M()([...F, ...U, ...q, ...V, ...H, ...j, ...W, ...Q, ...Y]).compact().uniqBy(e => e.id).value(),
                    z = M()(X).flatMap(e => [e.token0.id, e.token1.id]).compact().uniq().value();
                S.info(`Getting the ${z.length} tokens within the ${X.length} V3 pools we are considering`);
                let K = await i.getTokens(z, {
                        blockNumber: b
                    }),
                    et = e => {
                        var t, f, n, a;
                        return `${null!==(f=null===(t=K.getTokenByAddress(e.token0.id))||void 0===t?void 0:t.symbol)&&void 0!==f?f:e.token0.id}/${null!==(a=null===(n=K.getTokenByAddress(e.token1.id))||void 0===n?void 0:n.symbol)&&void 0!==a?a:e.token1.id}/${e.feeTier}`
                    };
                S.info({
                    topByBaseWithTokenIn: F.map(et),
                    topByBaseWithTokenOut: U.map(et),
                    topByTVL: H.map(et),
                    topByTVLUsingTokenIn: j.map(et),
                    topByTVLUsingTokenOut: W.map(et),
                    topByTVLUsingTokenInSecondHops: Q.map(et),
                    topByTVLUsingTokenOutSecondHops: Y.map(et),
                    top2DirectSwap: q.map(et),
                    top2EthQuotePool: V.map(et)
                }, "V3 Candidate Pools");
                let ef = M().map(X, e => {
                        let t;
                        let f = K.getTokenByAddress(e.token0.id),
                            n = K.getTokenByAddress(e.token1.id);
                        try {
                            t = J(e.feeTier)
                        } catch (t) {
                            S.info({
                                subgraphPool: e
                            }, `Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${e.feeTier} because fee tier not supported`);
                            return
                        }
                        if (!f || !n) {
                            S.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${t} because ${f?e.token1.id:e.token0.id} not found by token provider`);
                            return
                        }
                        return [f, n, t]
                    }),
                    en = M().compact(ef),
                    ea = Date.now(),
                    ei = await r.getPools(en, {
                        blockNumber: b
                    });
                R.putMetric("V3PoolsLoad", Date.now() - ea, c.Milliseconds);
                let er = {
                    protocol: ee.Protocol.V3,
                    selections: {
                        topByBaseWithTokenIn: F,
                        topByBaseWithTokenOut: U,
                        topByDirectSwapPool: q,
                        topByEthQuoteTokenPool: V,
                        topByTVL: H,
                        topByTVLUsingTokenIn: j,
                        topByTVLUsingTokenOut: W,
                        topByTVLUsingTokenInSecondHops: Q,
                        topByTVLUsingTokenOutSecondHops: Y
                    }
                };
                return {
                    poolAccessor: ei,
                    candidatePools: er,
                    subgraphPools: X
                }
            }
            async function fd({
                tokenIn: e,
                tokenOut: t,
                routeType: f,
                routingConfig: n,
                subgraphProvider: a,
                tokenProvider: i,
                poolProvider: r,
                blockedTokenListProvider: s,
                chainId: o
            }) {
                var d;
                let {
                    blockNumber: u,
                    v2PoolSelection: {
                        topN: l,
                        topNDirectSwaps: p,
                        topNTokenInOut: h,
                        topNSecondHop: b,
                        topNWithEachBaseToken: y,
                        topNWithBaseToken: m
                    }
                } = n, T = e.address.toLowerCase(), I = t.address.toLowerCase(), g = Date.now(), v = await a.getPools(e, t, {
                    blockNumber: u
                }), C = M().map(v, e => ({ ...e,
                    token0: { ...e.token0,
                        id: e.token0.id.toLowerCase()
                    },
                    token1: { ...e.token1,
                        id: e.token1.id.toLowerCase()
                    }
                }));
                R.putMetric("V2SubgraphPoolsLoad", Date.now() - g, c.Milliseconds);
                let A = C;
                if (s)
                    for (let e of (A = [], C)) {
                        let t = await s.getTokenByAddress(e.token0.id),
                            f = await s.getTokenByAddress(e.token1.id);
                        t || f || A.push(e)
                    }
                let O = M()(A).sortBy(e => -e.reserve).value();
                S.info(`After filtering blocked tokens went from ${C.length} to ${O.length}.`);
                let k = new Set,
                    w = e => {
                        M()(e).map(e => e.id).forEach(e => k.add(e))
                    },
                    P = null !== (d = fs[o]) && void 0 !== d ? d : [],
                    x = M()(P).flatMap(e => M()(O).filter(t => {
                        let f = e.address.toLowerCase();
                        return t.token0.id == f && t.token1.id == T || t.token1.id == f && t.token0.id == T
                    }).sortBy(e => -e.reserve).slice(0, y).value()).sortBy(e => -e.reserve).slice(0, m).value(),
                    D = M()(P).flatMap(e => M()(O).filter(t => {
                        let f = e.address.toLowerCase();
                        return t.token0.id == f && t.token1.id == I || t.token1.id == f && t.token0.id == I
                    }).sortBy(e => -e.reserve).slice(0, y).value()).sortBy(e => -e.reserve).slice(0, m).value(),
                    B = [];
                if (0 != p) {
                    let {
                        token0: f,
                        token1: n,
                        poolAddress: a
                    } = r.getPoolAddress(e, t);
                    B = [{
                        id: a,
                        token0: {
                            id: f.address
                        },
                        token1: {
                            id: n.address
                        },
                        supply: 1e4,
                        reserve: 1e4,
                        reserveUSD: 1e4
                    }]
                }
                w(B);
                let L = G[o].address,
                    _ = [];
                "WETH" != t.symbol && "WETH9" != t.symbol && "ETH" != t.symbol && (_ = M()(O).filter(e => f == E.TradeType.EXACT_INPUT ? e.token0.id == L && e.token1.id == I || e.token1.id == L && e.token0.id == I : e.token0.id == L && e.token1.id == T || e.token1.id == L && e.token0.id == T).slice(0, 1).value()), w(_);
                let N = M()(O).filter(e => !k.has(e.id)).slice(0, l).value();
                w(N);
                let F = M()(O).filter(e => !k.has(e.id) && (e.token0.id == T || e.token1.id == T)).slice(0, h).value();
                w(F);
                let U = M()(O).filter(e => !k.has(e.id) && (e.token0.id == I || e.token1.id == I)).slice(0, h).value();
                w(U);
                let q = M()(F).map(e => T == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => M()(O).filter(t => !k.has(t.id) && (t.token0.id == e || t.token1.id == e)).slice(0, b).value()).uniqBy(e => e.id).value();
                w(q);
                let $ = M()(U).map(e => I == e.token0.id ? e.token1.id : e.token0.id).flatMap(e => M()(O).filter(t => !k.has(t.id) && (t.token0.id == e || t.token1.id == e)).slice(0, b).value()).uniqBy(e => e.id).value();
                w($);
                let V = M()([...x, ...D, ...B, ..._, ...N, ...F, ...U, ...q, ...$]).compact().uniqBy(e => e.id).value(),
                    H = M()(V).flatMap(e => [e.token0.id, e.token1.id]).compact().uniq().value();
                S.info(`Getting the ${H.length} tokens within the ${V.length} V2 pools we are considering`);
                let j = await i.getTokens(H, {
                        blockNumber: u
                    }),
                    W = e => {
                        var t, f, n, a;
                        return `${null!==(f=null===(t=j.getTokenByAddress(e.token0.id))||void 0===t?void 0:t.symbol)&&void 0!==f?f:e.token0.id}/${null!==(a=null===(n=j.getTokenByAddress(e.token1.id))||void 0===n?void 0:n.symbol)&&void 0!==a?a:e.token1.id}`
                    };
                S.info({
                    topByBaseWithTokenIn: x.map(W),
                    topByBaseWithTokenOut: D.map(W),
                    topByTVL: N.map(W),
                    topByTVLUsingTokenIn: F.map(W),
                    topByTVLUsingTokenOut: U.map(W),
                    topByTVLUsingTokenInSecondHops: q.map(W),
                    topByTVLUsingTokenOutSecondHops: $.map(W),
                    top2DirectSwap: B.map(W),
                    top2EthQuotePool: _.map(W)
                }, "V2 Candidate pools");
                let Q = M().map(V, e => {
                        let t = j.getTokenByAddress(e.token0.id),
                            f = j.getTokenByAddress(e.token1.id);
                        if (!t || !f) {
                            S.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}`);
                            return
                        }
                        return [t, f]
                    }),
                    Y = M().compact(Q),
                    X = Date.now(),
                    z = await r.getPools(Y, {
                        blockNumber: u
                    });
                R.putMetric("V2PoolsLoad", Date.now() - X, c.Milliseconds);
                let K = {
                    protocol: ee.Protocol.V2,
                    selections: {
                        topByBaseWithTokenIn: x,
                        topByBaseWithTokenOut: D,
                        topByDirectSwapPool: B,
                        topByEthQuoteTokenPool: _,
                        topByTVL: N,
                        topByTVLUsingTokenIn: F,
                        topByTVLUsingTokenOut: U,
                        topByTVLUsingTokenInSecondHops: q,
                        topByTVLUsingTokenOutSecondHops: $
                    }
                };
                return {
                    poolAccessor: z,
                    candidatePools: K,
                    subgraphPools: V
                }
            }
            async function fu({
                tokenIn: e,
                tokenOut: t,
                routeType: f,
                routingConfig: n,
                v3subgraphProvider: a,
                v2subgraphProvider: i,
                tokenProvider: r,
                v3poolProvider: s,
                v2poolProvider: o,
                blockedTokenListProvider: d,
                chainId: u
            }) {
                let {
                    blockNumber: c
                } = n, {
                    subgraphPools: l,
                    candidatePools: p
                } = await fo({
                    tokenIn: e,
                    tokenOut: t,
                    tokenProvider: r,
                    blockedTokenListProvider: d,
                    poolProvider: s,
                    routeType: f,
                    subgraphProvider: a,
                    routingConfig: n,
                    chainId: u
                }), {
                    subgraphPools: h,
                    candidatePools: b
                } = await fd({
                    tokenIn: e,
                    tokenOut: t,
                    tokenProvider: r,
                    blockedTokenListProvider: d,
                    poolProvider: o,
                    routeType: f,
                    subgraphProvider: i,
                    routingConfig: n,
                    chainId: u
                }), y = new Set([...b.selections.topByTVLUsingTokenIn, ...b.selections.topByBaseWithTokenIn, ...b.selections.topByTVLUsingTokenOut, ...b.selections.topByBaseWithTokenOut, ...b.selections.topByDirectSwapPool].map(e => e.id)), m = M()(h).filter(e => y.has(e.id)).sortBy(e => -e.reserveUSD).value(), T = M()(l).sortBy(e => -e.tvlUSD).value(), I = [];
                m.forEach(e => {
                    let t = T.find(t => t.token0.id == e.token0.id && t.token1.id == e.token1.id || t.token0.id == e.token1.id && t.token1.id == e.token0.id);
                    t ? e.reserveUSD > t.tvlUSD && (S.info({
                        token0: e.token0.id,
                        token1: e.token1.id,
                        v2reserveUSD: e.reserveUSD,
                        v3tvlUSD: t.tvlUSD
                    }, "MixedRoute heuristic, found a V2 pool with higher liquidity than its V3 counterpart"), I.push(e)) : (S.info({
                        token0: e.token0.id,
                        token1: e.token1.id,
                        v2reserveUSD: e.reserveUSD
                    }, "MixedRoute heuristic, found a V2 pool with no V3 counterpart"), I.push(e))
                }), S.info(I.length, "Number of V2 candidate pools that fit first heuristic");
                let g = [...I, ...T],
                    v = M()(g).flatMap(e => [e.token0.id, e.token1.id]).compact().uniq().value();
                S.info(`Getting the ${v.length} tokens within the ${g.length} pools we are considering`);
                let C = await r.getTokens(v, {
                        blockNumber: c
                    }),
                    E = M().map(T, e => {
                        let t;
                        let f = C.getTokenByAddress(e.token0.id),
                            n = C.getTokenByAddress(e.token1.id);
                        try {
                            t = J(e.feeTier)
                        } catch (t) {
                            S.info({
                                subgraphPool: e
                            }, `Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${e.feeTier} because fee tier not supported`);
                            return
                        }
                        if (!f || !n) {
                            S.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}/${t} because ${f?e.token1.id:e.token0.id} not found by token provider`);
                            return
                        }
                        return [f, n, t]
                    }),
                    A = M().compact(E),
                    O = M().map(I, e => {
                        let t = C.getTokenByAddress(e.token0.id),
                            f = C.getTokenByAddress(e.token1.id);
                        if (!t || !f) {
                            S.info(`Dropping candidate pool for ${e.token0.id}/${e.token1.id}`);
                            return
                        }
                        return [t, f]
                    }),
                    k = M().compact(O),
                    [w, P] = await Promise.all([o.getPools(k, {
                        blockNumber: c
                    }), s.getPools(A, {
                        blockNumber: c
                    })]),
                    x = e => [...I.filter(t => b.selections[e].map(e => e.id).includes(t.id)), ...p.selections[e]],
                    R = {
                        protocol: ee.Protocol.MIXED,
                        selections: {
                            topByBaseWithTokenIn: x("topByBaseWithTokenIn"),
                            topByBaseWithTokenOut: x("topByBaseWithTokenOut"),
                            topByDirectSwapPool: x("topByDirectSwapPool"),
                            topByEthQuoteTokenPool: x("topByEthQuoteTokenPool"),
                            topByTVL: x("topByTVL"),
                            topByTVLUsingTokenIn: x("topByTVLUsingTokenIn"),
                            topByTVLUsingTokenOut: x("topByTVLUsingTokenOut"),
                            topByTVLUsingTokenInSecondHops: x("topByTVLUsingTokenInSecondHops"),
                            topByTVLUsingTokenOutSecondHops: x("topByTVLUsingTokenOutSecondHops")
                        }
                    };
                return {
                    V2poolAccessor: w,
                    V3poolAccessor: P,
                    candidatePools: R,
                    subgraphPools: g
                }
            }
            class fc extends ff {
                constructor(e, t, f, n, a, i, r, s) {
                    super(a, i, r, s), this.v2SubgraphProvider = e, this.v2PoolProvider = t, this.v2QuoteProvider = f, this.v2GasModelFactory = n
                }
                async getRoutes(e, t, f, n) {
                    let {
                        poolAccessor: a,
                        candidatePools: i
                    } = await fd({
                        tokenIn: e,
                        tokenOut: t,
                        tokenProvider: this.tokenProvider,
                        blockedTokenListProvider: this.blockedTokenListProvider,
                        poolProvider: this.v2PoolProvider,
                        routeType: f,
                        subgraphProvider: this.v2SubgraphProvider,
                        routingConfig: n,
                        chainId: this.chainId
                    }), r = a.getAllPools(), s = await this.applyTokenValidatorToPools(r, (f, n) => !(!n || n == h.STF && (f.equals(e) || f.equals(t))) && n == h.STF), {
                        maxSwapsPerPath: o
                    } = n, d = fr(e, t, (e, t, f) => new t$(e, t, f), s, o);
                    return {
                        routes: d,
                        candidatePools: i
                    }
                }
                async getQuotes(e, t, f, n, a, i, r, s, o) {
                    if (S.info("Starting to get V2 quotes"), void 0 === o) throw Error("GasPriceWei for V2Routes is required to getQuotes");
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: r
                    };
                    let d = a == E.TradeType.EXACT_INPUT ? this.v2QuoteProvider.getQuotesManyExactIn.bind(this.v2QuoteProvider) : this.v2QuoteProvider.getQuotesManyExactOut.bind(this.v2QuoteProvider),
                        u = Date.now();
                    S.info(`Getting quotes for V2 for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: l
                    } = await d(t, e), p = await this.v2GasModelFactory.buildGasModel({
                        chainId: this.chainId,
                        gasPriceWei: o,
                        poolProvider: this.v2PoolProvider,
                        token: n
                    });
                    R.putMetric("V2QuotesLoad", Date.now() - u, c.Milliseconds), R.putMetric("V2QuotesFetched", M()(l).map(([, e]) => e.length).sum(), c.Count);
                    let h = [];
                    for (let e of l) {
                        let [t, i] = e;
                        for (let e = 0; e < i.length; e++) {
                            let r = f[e],
                                s = i[e],
                                {
                                    quote: o,
                                    amount: d
                                } = s;
                            if (!o) {
                                S.debug({
                                    route: ef(t),
                                    amountQuote: s
                                }, "Dropping a null V2 quote for route.");
                                continue
                            }
                            let u = new fn({
                                route: t,
                                rawQuote: o,
                                amount: d,
                                percent: r,
                                gasModel: p,
                                quoteToken: n,
                                tradeType: a,
                                v2PoolProvider: this.v2PoolProvider
                            });
                            h.push(u)
                        }
                    }
                    return {
                        routesWithValidQuotes: h,
                        candidatePools: r
                    }
                }
            }
            class fl extends ff {
                constructor(e, t, f, n, a, i, r) {
                    super(n, a, i, r), this.v3SubgraphProvider = e, this.v3PoolProvider = t, this.onChainQuoteProvider = f
                }
                async getRoutes(e, t, f, n) {
                    let {
                        poolAccessor: a,
                        candidatePools: i
                    } = await fo({
                        tokenIn: e,
                        tokenOut: t,
                        tokenProvider: this.tokenProvider,
                        blockedTokenListProvider: this.blockedTokenListProvider,
                        poolProvider: this.v3PoolProvider,
                        routeType: f,
                        subgraphProvider: this.v3SubgraphProvider,
                        routingConfig: n,
                        chainId: this.chainId
                    }), r = a.getAllPools(), s = await this.applyTokenValidatorToPools(r, (f, n) => !(!n || n == h.STF && (f.equals(e) || f.equals(t))) && (n == h.FOT || n == h.STF)), {
                        maxSwapsPerPath: o
                    } = n, d = fr(e, t, (e, t, f) => new tq(e, t, f), s, o);
                    return {
                        routes: d,
                        candidatePools: i
                    }
                }
                async getQuotes(e, t, f, n, a, i, r, s) {
                    if (S.info("Starting to get V3 quotes"), void 0 === s) throw Error("GasModel for V3RouteWithValidQuote is required to getQuotes");
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: r
                    };
                    let o = a == E.TradeType.EXACT_INPUT ? this.onChainQuoteProvider.getQuotesManyExactIn.bind(this.onChainQuoteProvider) : this.onChainQuoteProvider.getQuotesManyExactOut.bind(this.onChainQuoteProvider),
                        d = Date.now();
                    S.info(`Getting quotes for V3 for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: u
                    } = await o(t, e, {
                        blockNumber: i.blockNumber
                    });
                    R.putMetric("V3QuotesLoad", Date.now() - d, c.Milliseconds), R.putMetric("V3QuotesFetched", M()(u).map(([, e]) => e.length).sum(), c.Count);
                    let l = [];
                    for (let e of u) {
                        let [t, i] = e;
                        for (let e = 0; e < i.length; e++) {
                            let r = f[e],
                                o = i[e],
                                {
                                    quote: d,
                                    amount: u,
                                    sqrtPriceX96AfterList: c,
                                    initializedTicksCrossedList: p,
                                    gasEstimate: h
                                } = o;
                            if (!d || !c || !p || !h) {
                                S.debug({
                                    route: ef(t),
                                    amountQuote: o
                                }, "Dropping a null V3 quote for route.");
                                continue
                            }
                            let b = new fa({
                                route: t,
                                rawQuote: d,
                                amount: u,
                                percent: r,
                                sqrtPriceX96AfterList: c,
                                initializedTicksCrossedList: p,
                                quoterGasEstimate: h,
                                gasModel: s,
                                quoteToken: n,
                                tradeType: a,
                                v3PoolProvider: this.v3PoolProvider
                            });
                            l.push(b)
                        }
                    }
                    return {
                        routesWithValidQuotes: l,
                        candidatePools: r
                    }
                }
            }
            class fp extends ff {
                constructor(e, t, f, n, a, i, r, s, o) {
                    super(i, r, s, o), this.v3SubgraphProvider = e, this.v3PoolProvider = t, this.v2SubgraphProvider = f, this.v2PoolProvider = n, this.onChainQuoteProvider = a
                }
                async getRoutes(e, t, f, n) {
                    if (f != E.TradeType.EXACT_INPUT) throw Error("Mixed route quotes are not supported for EXACT_OUTPUT");
                    let {
                        V2poolAccessor: a,
                        V3poolAccessor: i,
                        candidatePools: r
                    } = await fu({
                        tokenIn: e,
                        tokenOut: t,
                        tokenProvider: this.tokenProvider,
                        blockedTokenListProvider: this.blockedTokenListProvider,
                        v3poolProvider: this.v3PoolProvider,
                        v2poolProvider: this.v2PoolProvider,
                        routeType: f,
                        v3subgraphProvider: this.v3SubgraphProvider,
                        v2subgraphProvider: this.v2SubgraphProvider,
                        routingConfig: n,
                        chainId: this.chainId
                    }), s = i.getAllPools(), o = a.getAllPools(), d = [...s, ...o], u = await this.applyTokenValidatorToPools(d, (f, n) => !(!n || n == h.STF && (f.equals(e) || f.equals(t))) && (n == h.FOT || n == h.STF)), {
                        maxSwapsPerPath: c
                    } = n, l = function(e, t, f, n) {
                        let a = fr(e, t, (e, t, f) => new tV(e, t, f), f, n);
                        return a.filter(e => !e.pools.every(e => e instanceof B.Pool) && !e.pools.every(e => e instanceof et.Pair))
                    }(e, t, u, c);
                    return {
                        routes: l,
                        candidatePools: r
                    }
                }
                async getQuotes(e, t, f, n, a, i, r, s) {
                    if (S.info("Starting to get mixed quotes"), void 0 === s) throw Error("GasModel for MixedRouteWithValidQuote is required to getQuotes");
                    if (0 == e.length) return {
                        routesWithValidQuotes: [],
                        candidatePools: r
                    };
                    let o = this.onChainQuoteProvider.getQuotesManyExactIn.bind(this.onChainQuoteProvider),
                        d = Date.now();
                    S.info(`Getting quotes for mixed for ${e.length} routes with ${t.length} amounts per route.`);
                    let {
                        routesWithQuotes: u
                    } = await o(t, e, {
                        blockNumber: i.blockNumber
                    });
                    R.putMetric("MixedQuotesLoad", Date.now() - d, c.Milliseconds), R.putMetric("MixedQuotesFetched", M()(u).map(([, e]) => e.length).sum(), c.Count);
                    let l = [];
                    for (let e of u) {
                        let [t, i] = e;
                        for (let e = 0; e < i.length; e++) {
                            let r = f[e],
                                o = i[e],
                                {
                                    quote: d,
                                    amount: u,
                                    sqrtPriceX96AfterList: c,
                                    initializedTicksCrossedList: p,
                                    gasEstimate: h
                                } = o;
                            if (!d || !c || !p || !h) {
                                S.debug({
                                    route: ef(t),
                                    amountQuote: o
                                }, "Dropping a null mixed quote for route.");
                                continue
                            }
                            let b = new fi({
                                route: t,
                                rawQuote: d,
                                amount: u,
                                percent: r,
                                sqrtPriceX96AfterList: c,
                                initializedTicksCrossedList: p,
                                quoterGasEstimate: h,
                                mixedRouteGasModel: s,
                                quoteToken: n,
                                tradeType: a,
                                v3PoolProvider: this.v3PoolProvider,
                                v2PoolProvider: this.v2PoolProvider
                            });
                            l.push(b)
                        }
                    }
                    return {
                        routesWithValidQuotes: l,
                        candidatePools: r
                    }
                }
            }
            class fh {
                constructor({
                    chainId: e,
                    provider: t,
                    multicall2Provider: f,
                    v3PoolProvider: n,
                    onChainQuoteProvider: a,
                    v2PoolProvider: i,
                    v2QuoteProvider: r,
                    v2SubgraphProvider: s,
                    tokenProvider: o,
                    blockedTokenListProvider: d,
                    v3SubgraphProvider: u,
                    gasPriceProvider: c,
                    v3GasModelFactory: l,
                    v2GasModelFactory: p,
                    mixedRouteGasModelFactory: h,
                    swapRouterProvider: b,
                    optimismGasDataProvider: y,
                    tokenValidatorProvider: m,
                    arbitrumGasDataProvider: T,
                    simulator: I,
                    routeCachingProvider: g
                }) {
                    let v;
                    if (this.chainId = e, this.provider = t, this.multicall2Provider = null != f ? f : new fS(e, t, 375e3), this.v3PoolProvider = null != n ? n : new fZ(this.chainId, new tM(F(e), this.multicall2Provider), new A(new(th())({
                            stdTTL: 360,
                            useClones: !1
                        }))), this.simulator = I, this.routeCachingProvider = g, a) this.onChainQuoteProvider = a;
                    else switch (e) {
                        case E.ChainId.OPTIMISM:
                        case E.ChainId.OPTIMISM_GOERLI:
                        case E.ChainId.BASE:
                        case E.ChainId.BASE_GOERLI:
                            this.onChainQuoteProvider = new fN(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 110,
                                gasLimitPerCall: 12e5,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                gasLimitOverride: 3e6,
                                multicallChunk: 45
                            }, {
                                baseBlockOffset: -10,
                                rollback: {
                                    enabled: !0,
                                    attemptsBeforeRollback: 1,
                                    rollbackBlockOffset: -10
                                }
                            });
                            break;
                        case E.ChainId.ARBITRUM_ONE:
                        case E.ChainId.ARBITRUM_GOERLI:
                            this.onChainQuoteProvider = new fN(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 10,
                                gasLimitPerCall: 12e6,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 3e7,
                                multicallChunk: 6
                            }, {
                                gasLimitOverride: 3e7,
                                multicallChunk: 6
                            });
                            break;
                        case E.ChainId.CELO:
                        case E.ChainId.CELO_ALFAJORES:
                            this.onChainQuoteProvider = new fN(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 10,
                                gasLimitPerCall: 5e6,
                                quoteMinSuccessRate: .1
                            }, {
                                gasLimitOverride: 5e6,
                                multicallChunk: 5
                            }, {
                                gasLimitOverride: 625e4,
                                multicallChunk: 4
                            });
                            break;
                        default:
                            this.onChainQuoteProvider = new fN(e, t, this.multicall2Provider, {
                                retries: 2,
                                minTimeout: 100,
                                maxTimeout: 1e3
                            }, {
                                multicallChunk: 210,
                                gasLimitPerCall: 705e3,
                                quoteMinSuccessRate: .15
                            }, {
                                gasLimitOverride: 2e6,
                                multicallChunk: 70
                            })
                    }
                    this.v2PoolProvider = null != i ? i : new fQ(e, new tv(e, this.multicall2Provider), new A(new(th())({
                        stdTTL: 60,
                        useClones: !1
                    }))), this.v2QuoteProvider = null != r ? r : new fX, this.blockedTokenListProvider = null != d ? d : new D(e, tG, new A(new(th())({
                        stdTTL: 3600,
                        useClones: !1
                    }))), this.tokenProvider = null != o ? o : new ti(e, new A(new(th())({
                        stdTTL: 3600,
                        useClones: !1
                    })), new D(e, tu, new A(new(th())({
                        stdTTL: 3600,
                        useClones: !1
                    }))), new tn(e, this.multicall2Provider));
                    let C = U(e);
                    s ? this.v2SubgraphProvider = s : this.v2SubgraphProvider = new fJ([new fY(e, new fH(e, `https://cloudflare-ipfs.com/ipns/api.uniswap.org/v1/pools/v2/${C}.json`, void 0, 0), new A(new(th())({
                        stdTTL: 300,
                        useClones: !1
                    }))), new fK(e)]), u ? this.v3SubgraphProvider = u : this.v3SubgraphProvider = new f6([new f0(e, new fH(e, `https://cloudflare-ipfs.com/ipns/api.uniswap.org/v1/pools/v3/${C}.json`, void 0, 0), new A(new(th())({
                        stdTTL: 300,
                        useClones: !1
                    }))), new f5(e, this.v3PoolProvider)]), v = td.r.isProvider(this.provider) ? new fk(e, new to(this.provider), new fI(this.provider)) : new fT("https://ethgasstation.info/api/ethgasAPI.json"), this.gasPriceProvider = null != c ? c : new O(e, v, new A(new(th())({
                        stdTTL: 7,
                        useClones: !1
                    }))), this.v3GasModelFactory = null != l ? l : new t8, this.v2GasModelFactory = null != p ? p : new fe, this.mixedRouteGasModelFactory = null != h ? h : new ft, this.swapRouterProvider = null != b ? b : new fq(this.multicall2Provider, this.chainId), (e === E.ChainId.OPTIMISM || e === E.ChainId.BASE) && (this.l2GasDataProvider = null != y ? y : new tO(e, this.multicall2Provider)), (e === E.ChainId.ARBITRUM_ONE || e === E.ChainId.ARBITRUM_GOERLI) && (this.l2GasDataProvider = null != T ? T : new tk(e, this.provider)), m ? this.tokenValidatorProvider = m : this.chainId === E.ChainId.MAINNET && (this.tokenValidatorProvider = new tT(this.chainId, this.multicall2Provider, new A(new(th())({
                        stdTTL: 3e4,
                        useClones: !1
                    })))), this.v2Quoter = new fc(this.v2SubgraphProvider, this.v2PoolProvider, this.v2QuoteProvider, this.v2GasModelFactory, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider), this.v3Quoter = new fl(this.v3SubgraphProvider, this.v3PoolProvider, this.onChainQuoteProvider, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider), this.mixedQuoter = new fp(this.v3SubgraphProvider, this.v3PoolProvider, this.v2SubgraphProvider, this.v2PoolProvider, this.onChainQuoteProvider, this.tokenProvider, this.chainId, this.blockedTokenListProvider, this.tokenValidatorProvider)
                }
                async routeToRatio(e, t, f, n, a, i = tH(this.chainId)) {
                    let r, s;
                    t.currency.wrapped.sortsBefore(e.currency.wrapped) && ([e, t] = [t, e]);
                    let o = this.calculateOptimalRatio(f, f.pool.sqrtRatioX96, !0);
                    f.pool.tickCurrent > f.tickUpper ? r = !0 : f.pool.tickCurrent < f.tickLower ? r = !1 : (r = new E.Fraction(e.quotient, t.quotient).greaterThan(o)) || (o = o.invert());
                    let [d, u] = r ? [e, t] : [t, e], c = o, l = f.pool, p = r ? f.pool.token0Price : f.pool.token1Price, h = null, y = !1, m = 0;
                    for (; !y;) {
                        let e;
                        if (++m > n.maxIterations) return S.info("max iterations exceeded"), {
                            status: b.NO_ROUTE_FOUND,
                            error: "max iterations exceeded"
                        };
                        let t = function(e, t, f, n) {
                            let a = new E.Fraction(f.quotient).subtract(e.multiply(n.quotient)).divide(e.multiply(t).add(1));
                            if (a.lessThan(0)) throw Error("routeToRatio: insufficient input token amount");
                            return K.fromRawAmount(f.currency, a.quotient)
                        }(c, p, d, u);
                        if (t.equalTo(0)) return S.info("no swap needed: amountToSwap = 0"), {
                            status: b.NO_SWAP_NEEDED
                        };
                        if (!(h = await this.route(t, u.currency, E.TradeType.EXACT_INPUT, void 0, { ...tH(this.chainId),
                                ...i,
                                protocols: [ee.Protocol.V3, ee.Protocol.V2]
                            }))) return S.info("no route found from this.route()"), {
                            status: b.NO_ROUTE_FOUND,
                            error: "no route found"
                        };
                        let a = d.subtract(h.trade.inputAmount),
                            s = u.add(h.trade.outputAmount),
                            T = a.divide(s);
                        if (h.route.forEach(t => {
                                t.protocol === ee.Protocol.V3 && t.route.pools.forEach((n, a) => {
                                    n.token0.equals(f.pool.token0) && n.token1.equals(f.pool.token1) && n.fee === f.pool.fee && (e = z().BigInt(t.sqrtPriceX96AfterList[a].toString()), c = this.calculateOptimalRatio(f, z().BigInt(e.toString()), r))
                                })
                            }), e || (c = o), (y = T.equalTo(c) || this.absoluteValue(T.asFraction.divide(c).subtract(1)).lessThan(n.ratioErrorTolerance)) && e && (l = new B.Pool(f.pool.token0, f.pool.token1, f.pool.fee, e, f.pool.liquidity, B.TickMath.getTickAtSqrtRatio(e), f.pool.tickDataProvider)), p = h.trade.outputAmount.divide(h.trade.inputAmount), S.info({
                                exchangeRate: p.asFraction.toFixed(18),
                                optimalRatio: c.asFraction.toFixed(18),
                                newRatio: T.asFraction.toFixed(18),
                                inputBalanceUpdated: a.asFraction.toFixed(18),
                                outputBalanceUpdated: s.asFraction.toFixed(18),
                                ratioErrorTolerance: n.ratioErrorTolerance.toFixed(18),
                                iterationN: m.toString()
                            }, "QuoteToRatio Iteration Parameters"), p.equalTo(0)) return S.info("exchangeRate to 0"), {
                            status: b.NO_ROUTE_FOUND,
                            error: "insufficient liquidity to swap to optimal ratio"
                        }
                    }
                    return h ? (a && (s = await this.buildSwapAndAddMethodParameters(h.trade, a, {
                        initialBalanceTokenIn: d,
                        initialBalanceTokenOut: u,
                        preLiquidityPosition: f
                    })), {
                        status: b.SUCCESS,
                        result: { ...h,
                            methodParameters: s,
                            optimalRatio: c,
                            postSwapTargetPool: l
                        }
                    }) : {
                        status: b.NO_ROUTE_FOUND,
                        error: "no route found"
                    }
                }
                async route(e, t, f, n, a = {}) {
                    var i, r, s;
                    let o, d, u;
                    let {
                        currencyIn: l,
                        currencyOut: p
                    } = this.determineCurrencyInOutFromTradeType(f, e, t), h = l.wrapped, b = p.wrapped;
                    R.setProperty("chainId", this.chainId), R.setProperty("pair", `${h.symbol}/${b.symbol}`), R.setProperty("tokenIn", h.address), R.setProperty("tokenOut", b.address), R.setProperty("tradeType", f === E.TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut"), R.putMetric(`QuoteRequestedForChain${this.chainId}`, 1, c.Count);
                    let y = null !== (i = a.blockNumber) && void 0 !== i ? i : this.getBlockNumberPromise(),
                        m = M().merge({}, tH(this.chainId), a, {
                            blockNumber: y
                        }),
                        I = await this.getGasPriceWei(),
                        g = t.wrapped,
                        [v, C] = await this.getGasModels(I, e.currency.wrapped, g, {
                            blockNumber: y
                        }),
                        A = Array.from(new Set(m.protocols).values()),
                        O = await (null === (r = this.routeCachingProvider) || void 0 === r ? void 0 : r.getCacheMode(this.chainId, e, g, f, A));
                    O !== T.Darkmode && (o = await (null === (s = this.routeCachingProvider) || void 0 === s ? void 0 : s.getCachedRoute(this.chainId, e, g, f, A, await y))), O && O !== T.Darkmode && !o ? (R.putMetric(`GetCachedRoute_miss_${O}`, 1, c.Count), S.info({
                        tokenIn: h.symbol,
                        tokenInAddress: h.address,
                        tokenOut: b.symbol,
                        tokenOutAddress: b.address,
                        cacheMode: O,
                        amount: e.toExact(),
                        chainId: this.chainId,
                        tradeType: this.tradeTypeStr(f)
                    }, `GetCachedRoute miss ${O} for ${this.tokenPairSymbolTradeTypeChainId(h,b,f)}`)) : o && (R.putMetric(`GetCachedRoute_hit_${O}`, 1, c.Count), S.info({
                        tokenIn: h.symbol,
                        tokenInAddress: h.address,
                        tokenOut: b.symbol,
                        tokenOutAddress: b.address,
                        cacheMode: O,
                        amount: e.toExact(),
                        chainId: this.chainId,
                        tradeType: this.tradeTypeStr(f)
                    }, `GetCachedRoute hit ${O} for ${this.tokenPairSymbolTradeTypeChainId(h,b,f)}`));
                    let k = Promise.resolve(null);
                    o && (k = this.getSwapRouteFromCache(o, await y, e, g, f, m, v, C, I));
                    let w = Promise.resolve(null);
                    o && O === T.Livemode || (w = this.getSwapRouteFromChain(e, h, b, A, g, f, m, v, C, I));
                    let [P, x] = await Promise.all([k, w]);
                    if (O === T.Livemode && P ? (S.info(`CacheMode is ${O}, and we are using swapRoute from cache`), d = P) : (S.info(`CacheMode is ${O}, and we are using materialized swapRoute`), d = x), O === T.Tapcompare && P && x) {
                        let t = x.quote.subtract(P.quote),
                            n = x.quoteGasAdjusted.subtract(P.quoteGasAdjusted),
                            a = x.estimatedGasUsed.sub(P.estimatedGasUsed);
                        if (!t.equalTo(0) || !(n.equalTo(0) || a.eq(0))) {
                            let i = n.divide(x.quoteGasAdjusted).multiply(100);
                            R.putMetric("TapcompareCachedRoute_quoteGasAdjustedDiffPercent", Number(i.toExact()), c.Percent), S.warn({
                                quoteFromChain: x.quote.toExact(),
                                quoteFromCache: P.quote.toExact(),
                                quoteDiff: t.toExact(),
                                quoteGasAdjustedFromChain: x.quoteGasAdjusted.toExact(),
                                quoteGasAdjustedFromCache: P.quoteGasAdjusted.toExact(),
                                quoteGasAdjustedDiff: n.toExact(),
                                gasUsedFromChain: x.estimatedGasUsed.toString(),
                                gasUsedFromCache: P.estimatedGasUsed.toString(),
                                gasUsedDiff: a.toString(),
                                routesFromChain: x.routes.toString(),
                                routesFromCache: P.routes.toString(),
                                amount: e.toExact(),
                                originalAmount: null == o ? void 0 : o.originalAmount,
                                pair: this.tokenPairSymbolTradeTypeChainId(h, b, f),
                                blockNumber: y
                            }, `Comparing quotes between Chain and Cache for ${this.tokenPairSymbolTradeTypeChainId(h,b,f)}`)
                        }
                    }
                    if (!d) return null;
                    let {
                        quote: D,
                        quoteGasAdjusted: B,
                        estimatedGasUsed: L,
                        routes: _,
                        estimatedGasUsedQuoteToken: N,
                        estimatedGasUsedUSD: F
                    } = d;
                    if (this.routeCachingProvider && O !== T.Darkmode && x) {
                        let t = fW.fromRoutesWithValidQuotes(x.routes, this.chainId, h, b, A.sort(), await y, f, e.toExact());
                        t && this.routeCachingProvider.setCachedRoute(t, e).then(e => {
                            R.putMetric(`SetCachedRoute_${e?"success":"rejected"}`, 1, c.Count)
                        }).catch(e => {
                            S.error({
                                reason: e,
                                tokenPair: this.tokenPairSymbolTradeTypeChainId(h, b, f)
                            }, "SetCachedRoute failure"), R.putMetric("SetCachedRoute_failure", 1, c.Count)
                        })
                    }
                    R.putMetric(`QuoteFoundForChain${this.chainId}`, 1, c.Count);
                    let U = tB(l, p, f, _);
                    n && (u = tL(U, n, this.chainId));
                    let G = {
                        quote: D,
                        quoteGasAdjusted: B,
                        estimatedGasUsed: L,
                        estimatedGasUsedQuoteToken: N,
                        estimatedGasUsedUSD: F,
                        gasPriceWei: I,
                        route: _,
                        trade: U,
                        methodParameters: u,
                        blockNumber: tr.O$.from(await y)
                    };
                    if (n && n.simulate && u && u.calldata) {
                        if (!this.simulator) throw Error("Simulator not initialized!");
                        S.info({
                            swapConfig: n,
                            methodParameters: u
                        }, "Starting simulation");
                        let f = n.simulate.fromAddress,
                            a = Date.now(),
                            i = await this.simulator.simulate(f, n, G, e, K.fromRawAmount(t, D.quotient.toString()), this.l2GasDataProvider ? await this.l2GasDataProvider.getGasData() : void 0, {
                                blockNumber: y
                            });
                        return R.putMetric("SimulateTransaction", Date.now() - a, c.Milliseconds), i
                    }
                    return G
                }
                async getSwapRouteFromCache(e, t, f, n, a, i, r, s, o) {
                    let d, u;
                    S.info({
                        protocols: e.protocolsCovered,
                        tradeType: e.tradeType,
                        cachedBlockNumber: e.blockNumber,
                        quoteBlockNumber: t
                    }, "Routing across CachedRoute");
                    let c = [],
                        l = e.routes.filter(e => e.protocol === ee.Protocol.V3),
                        p = e.routes.filter(e => e.protocol === ee.Protocol.V2),
                        h = e.routes.filter(e => e.protocol === ee.Protocol.MIXED);
                    if (e.routes.length > 1)[d, u] = this.getAmountDistribution(f, i);
                    else {
                        if (1 != e.routes.length) return Promise.resolve(null);
                        [d, u] = [
                            [100],
                            [f]
                        ]
                    }
                    if (l.length > 0) {
                        let e = l.map(e => e.route);
                        c.push(this.v3Quoter.getQuotes(e, u, d, n, a, i, void 0, r))
                    }
                    if (p.length > 0 && c.push(this.v2Quoter.getRoutesThenQuotes(p[0].tokenIn, p[0].tokenOut, u, d, n, a, i, void 0, o)), h.length > 0) {
                        let e = h.map(e => e.route);
                        c.push(this.mixedQuoter.getQuotes(e, u, d, n, a, i, void 0, s))
                    }
                    let b = await Promise.all(c),
                        y = M().flatMap(b, e => e.routesWithValidQuotes);
                    return t2(f, d, y, a, this.chainId, i, r)
                }
                async getSwapRouteFromChain(e, t, f, n, a, i, r, s, o, d) {
                    let [u, c] = this.getAmountDistribution(e, r), l = 0 === n.length, p = n.includes(ee.Protocol.V3), h = n.includes(ee.Protocol.V2), b = L.includes(this.chainId), y = n.includes(ee.Protocol.MIXED) || l && b, m = [E.ChainId.MAINNET, E.ChainId.GOERLI].includes(this.chainId) && i === E.TradeType.EXACT_INPUT, T = [];
                    (p || l) && (S.info({
                        protocols: n,
                        tradeType: i
                    }, "Routing across V3"), T.push(this.v3Quoter.getRoutesThenQuotes(t, f, c, u, a, i, r, s))), b && (h || l) && (S.info({
                        protocols: n,
                        tradeType: i
                    }, "Routing across V2"), T.push(this.v2Quoter.getRoutesThenQuotes(t, f, c, u, a, i, r, void 0, d))), y && m && (S.info({
                        protocols: n,
                        tradeType: i
                    }, "Routing across MixedRoutes"), T.push(this.mixedQuoter.getRoutesThenQuotes(t, f, c, u, a, i, r, o)));
                    let I = await Promise.all(T),
                        g = [],
                        v = [];
                    if (I.forEach(e => {
                            g.push(...e.routesWithValidQuotes), e.candidatePools && v.push(e.candidatePools)
                        }), 0 === g.length) return S.info({
                        allRoutesWithValidQuotes: g
                    }, "Received no valid quotes"), null;
                    let C = await t2(e, u, g, i, this.chainId, r, s);
                    return C && this.emitPoolSelectionMetrics(C, v), C
                }
                tradeTypeStr(e) {
                    return e === E.TradeType.EXACT_INPUT ? "ExactIn" : "ExactOut"
                }
                tokenPairSymbolTradeTypeChainId(e, t, f) {
                    return `${e.symbol}/${t.symbol}/${this.tradeTypeStr(f)}/${this.chainId}`
                }
                determineCurrencyInOutFromTradeType(e, t, f) {
                    return e === E.TradeType.EXACT_INPUT ? {
                        currencyIn: t.currency,
                        currencyOut: f
                    } : {
                        currencyIn: f,
                        currencyOut: t.currency
                    }
                }
                async getGasPriceWei() {
                    let e = Date.now(),
                        {
                            gasPriceWei: t
                        } = await this.gasPriceProvider.getGasPrice();
                    return R.putMetric("GasPriceLoad", Date.now() - e, c.Milliseconds), t
                }
                async getGasModels(e, t, f, n) {
                    let a = Date.now(),
                        i = tF(this.chainId, this.v3PoolProvider, n),
                        r = G[this.chainId],
                        s = f.equals(r) ? Promise.resolve(null) : tN(f, this.v3PoolProvider, n),
                        o = t.equals(r) ? Promise.resolve(null) : tN(t, this.v3PoolProvider, n),
                        [d, u, l] = await Promise.all([i, s, o]),
                        p = {
                            usdPool: d,
                            nativeQuoteTokenV3Pool: u,
                            nativeAmountTokenV3Pool: l
                        },
                        h = this.v3GasModelFactory.buildGasModel({
                            chainId: this.chainId,
                            gasPriceWei: e,
                            pools: p,
                            amountToken: t,
                            quoteToken: f,
                            v2poolProvider: this.v2PoolProvider,
                            l2GasDataProvider: this.l2GasDataProvider,
                            providerConfig: n
                        }),
                        b = this.mixedRouteGasModelFactory.buildGasModel({
                            chainId: this.chainId,
                            gasPriceWei: e,
                            pools: p,
                            amountToken: t,
                            quoteToken: f,
                            v2poolProvider: this.v2PoolProvider,
                            providerConfig: n
                        }),
                        [y, m] = await Promise.all([h, b]);
                    return R.putMetric("GasModelCreation", Date.now() - a, c.Milliseconds), [y, m]
                }
                getAmountDistribution(e, t) {
                    let {
                        distributionPercent: f
                    } = t, n = [], a = [];
                    for (let t = 1; t <= 100 / f; t++) n.push(t * f), a.push(e.multiply(new E.Fraction(t * f, 100)));
                    return [n, a]
                }
                async buildSwapAndAddMethodParameters(e, t, f) {
                    let {
                        swapOptions: {
                            recipient: n,
                            slippageTolerance: a,
                            deadline: i,
                            inputTokenPermit: r
                        },
                        addLiquidityOptions: s
                    } = t, o = f.preLiquidityPosition, d = f.initialBalanceTokenIn.subtract(e.inputAmount), u = f.initialBalanceTokenOut.add(e.outputAmount), c = await this.swapRouterProvider.getApprovalType(d, u), l = d.currency.wrapped.sortsBefore(u.currency.wrapped);
                    return { ...ee.SwapRouter.swapAndAddCallParameters(e, {
                            recipient: n,
                            slippageTolerance: a,
                            deadlineOrPreviousBlockhash: i,
                            inputTokenPermit: r
                        }, B.Position.fromAmounts({
                            pool: o.pool,
                            tickLower: o.tickLower,
                            tickUpper: o.tickUpper,
                            amount0: l ? d.quotient.toString() : u.quotient.toString(),
                            amount1: l ? u.quotient.toString() : d.quotient.toString(),
                            useFullPrecision: !1
                        }), s, c.approvalTokenIn, c.approvalTokenOut),
                        to: Q(this.chainId)
                    }
                }
                emitPoolSelectionMetrics(e, t) {
                    let f = new Set,
                        {
                            routes: n
                        } = e;
                    for (let e of (M()(n).flatMap(e => {
                            let {
                                poolAddresses: t
                            } = e;
                            return t
                        }).forEach(e => {
                            f.add(e.toLowerCase())
                        }), t)) {
                        let {
                            protocol: t
                        } = e;
                        M().forIn(e.selections, (e, n) => {
                            let a = M().findLastIndex(e, e => f.has(e.id.toLowerCase())) + 1;
                            R.putMetric(M().capitalize(`${t}${n}`), a, c.Count)
                        })
                    }
                    let a = !1,
                        i = !1,
                        r = !1;
                    for (let e of n) e.protocol === ee.Protocol.V3 && (a = !0), e.protocol === ee.Protocol.V2 && (i = !0), e.protocol === ee.Protocol.MIXED && (r = !0);
                    r && (a || i) ? a && i ? (R.putMetric("MixedAndV3AndV2SplitRoute", 1, c.Count), R.putMetric(`MixedAndV3AndV2SplitRouteForChain${this.chainId}`, 1, c.Count)) : a ? (R.putMetric("MixedAndV3SplitRoute", 1, c.Count), R.putMetric(`MixedAndV3SplitRouteForChain${this.chainId}`, 1, c.Count)) : i && (R.putMetric("MixedAndV2SplitRoute", 1, c.Count), R.putMetric(`MixedAndV2SplitRouteForChain${this.chainId}`, 1, c.Count)) : a && i ? (R.putMetric("V3AndV2SplitRoute", 1, c.Count), R.putMetric(`V3AndV2SplitRouteForChain${this.chainId}`, 1, c.Count)) : r ? n.length > 1 ? (R.putMetric("MixedSplitRoute", 1, c.Count), R.putMetric(`MixedSplitRouteForChain${this.chainId}`, 1, c.Count)) : (R.putMetric("MixedRoute", 1, c.Count), R.putMetric(`MixedRouteForChain${this.chainId}`, 1, c.Count)) : a ? n.length > 1 ? (R.putMetric("V3SplitRoute", 1, c.Count), R.putMetric(`V3SplitRouteForChain${this.chainId}`, 1, c.Count)) : (R.putMetric("V3Route", 1, c.Count), R.putMetric(`V3RouteForChain${this.chainId}`, 1, c.Count)) : i && (n.length > 1 ? (R.putMetric("V2SplitRoute", 1, c.Count), R.putMetric(`V2SplitRouteForChain${this.chainId}`, 1, c.Count)) : (R.putMetric("V2Route", 1, c.Count), R.putMetric(`V2RouteForChain${this.chainId}`, 1, c.Count)))
                }
                calculateOptimalRatio(e, t, f) {
                    let n = B.TickMath.getSqrtRatioAtTick(e.tickUpper),
                        a = B.TickMath.getSqrtRatioAtTick(e.tickLower);
                    if (z().greaterThan(t, n) || z().lessThan(t, a)) return new E.Fraction(0, 1);
                    let i = z().BigInt("1" + "0".repeat(18)),
                        r = new E.Fraction(B.SqrtPriceMath.getAmount0Delta(t, n, i, !0), B.SqrtPriceMath.getAmount1Delta(t, a, i, !0));
                    return f || (r = r.invert()), r
                }
                async userHasSufficientBalance(e, t, f, n) {
                    try {
                        let a;
                        let i = t === E.TradeType.EXACT_INPUT ? f : n;
                        if (i.currency.isNative) a = await this.provider.getBalance(e);
                        else {
                            let t = tR.connect(i.currency.address, this.provider);
                            a = await t.balanceOf(e)
                        }
                        return a.gte(tr.O$.from(i.quotient.toString()))
                    } catch (e) {
                        return S.error(e, "Error while checking user balance"), !1
                    }
                }
                absoluteValue(e) {
                    let t = z().lessThan(e.numerator, z().BigInt(0)) ? z().unaryMinus(e.numerator) : e.numerator,
                        f = z().lessThan(e.denominator, z().BigInt(0)) ? z().unaryMinus(e.denominator) : e.denominator;
                    return new E.Fraction(t, f)
                }
                getBlockNumberPromise() {
                    return tl()(async (e, t) => (t > 1 && S.info(`Get block number attempt ${t}`), this.provider.getBlockNumber()), {
                        retries: 2,
                        minTimeout: 100,
                        maxTimeout: 1e3
                    })
                }
            }
            let fb = [{
                    inputs: [{
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    name: "AllowanceExpired",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ExcessiveInvalidation",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "InsufficientAllowance",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "maxAmount",
                        type: "uint256"
                    }],
                    name: "InvalidAmount",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidContractSignature",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidNonce",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSignature",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSignatureLength",
                    type: "error"
                }, {
                    inputs: [],
                    name: "InvalidSigner",
                    type: "error"
                }, {
                    inputs: [],
                    name: "LengthMismatch",
                    type: "error"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "signatureDeadline",
                        type: "uint256"
                    }],
                    name: "SignatureExpired",
                    type: "error"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "Lockdown",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "newNonce",
                        type: "uint48"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "oldNonce",
                        type: "uint48"
                    }],
                    name: "NonceInvalidation",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }, {
                        indexed: !1,
                        internalType: "uint48",
                        name: "nonce",
                        type: "uint48"
                    }],
                    name: "Permit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "word",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "mask",
                        type: "uint256"
                    }],
                    name: "UnorderedNonceInvalidation",
                    type: "event"
                }, {
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }, {
                        internalType: "uint48",
                        name: "nonce",
                        type: "uint48"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "uint48",
                        name: "expiration",
                        type: "uint48"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint48",
                        name: "newNonce",
                        type: "uint48"
                    }],
                    name: "invalidateNonces",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "wordPos",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "mask",
                        type: "uint256"
                    }],
                    name: "invalidateUnorderedNonces",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }],
                        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
                        name: "approvals",
                        type: "tuple[]"
                    }],
                    name: "lockdown",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "nonceBitmap",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint160",
                                name: "amount",
                                type: "uint160"
                            }, {
                                internalType: "uint48",
                                name: "expiration",
                                type: "uint48"
                            }, {
                                internalType: "uint48",
                                name: "nonce",
                                type: "uint48"
                            }],
                            internalType: "struct IAllowanceTransfer.PermitDetails[]",
                            name: "details",
                            type: "tuple[]"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "sigDeadline",
                            type: "uint256"
                        }],
                        internalType: "struct IAllowanceTransfer.PermitBatch",
                        name: "permitBatch",
                        type: "tuple"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint160",
                                name: "amount",
                                type: "uint160"
                            }, {
                                internalType: "uint48",
                                name: "expiration",
                                type: "uint48"
                            }, {
                                internalType: "uint48",
                                name: "nonce",
                                type: "uint48"
                            }],
                            internalType: "struct IAllowanceTransfer.PermitDetails",
                            name: "details",
                            type: "tuple"
                        }, {
                            internalType: "address",
                            name: "spender",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "sigDeadline",
                            type: "uint256"
                        }],
                        internalType: "struct IAllowanceTransfer.PermitSingle",
                        name: "permitSingle",
                        type: "tuple"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions",
                            name: "permitted",
                            type: "tuple"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                        name: "transferDetails",
                        type: "tuple"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions[]",
                            name: "permitted",
                            type: "tuple[]"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions",
                            name: "permitted",
                            type: "tuple"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
                        name: "transferDetails",
                        type: "tuple"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "witness",
                        type: "bytes32"
                    }, {
                        internalType: "string",
                        name: "witnessTypeString",
                        type: "string"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitWitnessTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "address",
                                name: "token",
                                type: "address"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }],
                            internalType: "struct ISignatureTransfer.TokenPermissions[]",
                            name: "permitted",
                            type: "tuple[]"
                        }, {
                            internalType: "uint256",
                            name: "nonce",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
                        name: "permit",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "requestedAmount",
                            type: "uint256"
                        }],
                        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }, {
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "witness",
                        type: "bytes32"
                    }, {
                        internalType: "string",
                        name: "witnessTypeString",
                        type: "string"
                    }, {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }],
                    name: "permitWitnessTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "from",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "to",
                            type: "address"
                        }, {
                            internalType: "uint160",
                            name: "amount",
                            type: "uint160"
                        }, {
                            internalType: "address",
                            name: "token",
                            type: "address"
                        }],
                        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
                        name: "transferDetails",
                        type: "tuple[]"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint160",
                        name: "amount",
                        type: "uint160"
                    }, {
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                fy = "0x60c0346100bb574660a052602081017f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a60408301524660608301523060808301526080825260a082019180831060018060401b038411176100a557826040525190206080526123c090816100c1823960805181611a90015260a05181611a6a0152f35b634e487b7160e01b600052604160045260246000fd5b600080fdfe6040608081526004908136101561001557600080fd5b600090813560e01c80630d58b1db1461126c578063137c29fe146110755780632a2d80d114610db75780632b67b57014610bde57806330f28b7a14610ade5780633644e51514610a9d57806336c7851614610a285780633ff9dcb1146109a85780634fe02b441461093f57806365d9723c146107ac57806387517c451461067a578063927da105146105c3578063cc53287f146104a3578063edd9444b1461033a5763fe8ec1a7146100c657600080fd5b346103365760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103365767ffffffffffffffff833581811161033257610114903690860161164b565b60243582811161032e5761012b903690870161161a565b6101336114e6565b9160843585811161032a5761014b9036908a016115c1565b98909560a43590811161032657610164913691016115c1565b969095815190610173826113ff565b606b82527f5065726d697442617463685769746e6573735472616e7366657246726f6d285460208301527f6f6b656e5065726d697373696f6e735b5d207065726d69747465642c61646472838301527f657373207370656e6465722c75696e74323536206e6f6e63652c75696e74323560608301527f3620646561646c696e652c000000000000000000000000000000000000000000608083015282519a8b9181610222602085018096611edc565b918237018a8152039961025b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09b8c8101835282611437565b5190209085515161026b81611e04565b908a5b8181106102f95750506102f6999a6102ed9183516102a081610294602082018095611eaf565b03848101835282611437565b519020602089810151858b015195519182019687526040820192909252336060820152608081019190915260a081019390935260643560c08401528260e081015b03908101835282611437565b51902093611c40565b80f35b8061031161030b610321938c5161175e565b51611f9d565b61031b828661175e565b52611e53565b61026e565b8880fd5b8780fd5b8480fd5b8380fd5b5080fd5b5091346103365760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103365767ffffffffffffffff9080358281116103325761038b903690830161164b565b60243583811161032e576103a2903690840161161a565b9390926103ad6114e6565b9160643590811161049f576103c4913691016115c1565b949093835151976103d489611e04565b98885b81811061047d5750506102f697988151610425816103f9602082018095611eaf565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282611437565b5190206020860151828701519083519260208401947ffcf35f5ac6a2c28868dc44c302166470266239195f02b0ee408334829333b7668652840152336060840152608083015260a082015260a081526102ed8161141b565b808b61031b8261049461030b61049a968d5161175e565b9261175e565b6103d7565b8680fd5b5082346105bf57602090817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103325780359067ffffffffffffffff821161032e576104f49136910161161a565b929091845b848110610504578580f35b8061051a61051560019388886118b5565b6118c5565b61052f84610529848a8a6118b5565b016118c5565b3389528385528589209173ffffffffffffffffffffffffffffffffffffffff80911692838b528652868a20911690818a5285528589207fffffffffffffffffffffffff000000000000000000000000000000000000000081541690558551918252848201527f89b1add15eff56b3dfe299ad94e01f2b52fbcb80ae1a3baea6ae8c04cb2b98a4853392a2016104f9565b8280fd5b50346103365760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657610676816105ff6114a0565b936106086114c3565b6106106114e6565b73ffffffffffffffffffffffffffffffffffffffff968716835260016020908152848420928816845291825283832090871683528152919020549251938316845260a083901c65ffffffffffff169084015260d09190911c604083015281906060820190565b0390f35b50346103365760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610336576106b26114a0565b906106bb6114c3565b916106c46114e6565b65ffffffffffff926064358481169081810361032a5779ffffffffffff0000000000000000000000000000000000000000947fda9fa7c1b00402c17d0161b249b1ab8bbec047c5a52207b9c112deffd817036b94338a5260016020527fffffffffffff0000000000000000000000000000000000000000000000000000858b209873ffffffffffffffffffffffffffffffffffffffff809416998a8d5260205283878d209b169a8b8d52602052868c209486156000146107a457504216925b8454921697889360a01b16911617179055815193845260208401523392a480f35b905092610783565b5082346105bf5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf576107e56114a0565b906107ee6114c3565b9265ffffffffffff604435818116939084810361032a57338852602091600183528489209673ffffffffffffffffffffffffffffffffffffffff80911697888b528452858a20981697888a5283528489205460d01c93848711156109175761ffff9085840316116108f05750907f55eb90d810e1700b35a8e7e25395ff7f2b2259abd7415ca2284dfb1c246418f393929133895260018252838920878a528252838920888a5282528389209079ffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff000000000000000000000000000000000000000000000000000083549260d01b16911617905582519485528401523392a480f35b84517f24d35a26000000000000000000000000000000000000000000000000000000008152fd5b5084517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b503461033657807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610336578060209273ffffffffffffffffffffffffffffffffffffffff61098f6114a0565b1681528084528181206024358252845220549051908152f35b5082346105bf57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf577f3704902f963766a4e561bbaab6e6cdc1b1dd12f6e9e99648da8843b3f46b918d90359160243533855284602052818520848652602052818520818154179055815193845260208401523392a280f35b8234610a9a5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a9a57610a606114a0565b610a686114c3565b610a706114e6565b6064359173ffffffffffffffffffffffffffffffffffffffff8316830361032e576102f6936117a1565b80fd5b503461033657817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657602090610ad7611a67565b9051908152f35b508290346105bf576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf57610b1a3661152a565b90807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c36011261033257610b4c611478565b9160e43567ffffffffffffffff8111610bda576102f694610b6f913691016115c1565b939092610b7c8351611f9d565b6020840151828501519083519260208401947f939c21a48a8dbe3a9a2404a1d46691e4d39f6583d6ec6b35714604c986d801068652840152336060840152608083015260a082015260a08152610bd18161141b565b51902091611b6e565b8580fd5b509134610336576101007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033657610c186114a0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc360160c08112610332576080855191610c51836113e3565b1261033257845190610c6282611398565b73ffffffffffffffffffffffffffffffffffffffff91602435838116810361049f578152604435838116810361049f57602082015265ffffffffffff606435818116810361032a5788830152608435908116810361049f576060820152815260a435938285168503610bda576020820194855260c4359087830182815260e43567ffffffffffffffff811161032657610cfe90369084016115c1565b929093804211610d88575050918591610d786102f6999a610d7e95610d238851611f07565b90898c511690519083519260208401947ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d086528401526060830152608082015260808152610d70816113ff565b519020611b22565b91612010565b51925116916118e6565b602492508a51917fcd21db4f000000000000000000000000000000000000000000000000000000008352820152fd5b5091346103365760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc93818536011261033257610df36114a0565b9260249081359267ffffffffffffffff9788851161032a578590853603011261049f578051978589018981108282111761104a578252848301358181116103265785019036602383011215610326578382013591610e50836115ef565b90610e5d85519283611437565b838252602093878584019160071b83010191368311611046578801905b828210610fe9575050508a526044610e93868801611509565b96838c01978852013594838b0191868352604435908111610fe557610ebb90369087016115c1565b959096804211610fba575050508998995151610ed681611e04565b908b5b818110610f9757505092889492610d7892610f6497958351610f02816103f98682018095611eaf565b5190209073ffffffffffffffffffffffffffffffffffffffff9a8b8b51169151928551948501957faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f794408638752850152830152608082015260808152610d70816113ff565b51169082515192845b848110610f78578580f35b80610f918585610f8b600195875161175e565b516118e6565b01610f6d565b80610311610fac8e9f9e93610fb2945161175e565b51611f07565b9b9a9b610ed9565b8551917fcd21db4f000000000000000000000000000000000000000000000000000000008352820152fd5b8a80fd5b6080823603126110465785608091885161100281611398565b61100b85611509565b8152611018838601611509565b838201526110278a8601611607565b8a8201528d611037818701611607565b90820152815201910190610e7a565b8c80fd5b84896041867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5082346105bf576101407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105bf576110b03661152a565b91807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7c360112610332576110e2611478565b67ffffffffffffffff93906101043585811161049f5761110590369086016115c1565b90936101243596871161032a57611125610bd1966102f6983691016115c1565b969095825190611134826113ff565b606482527f5065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5060208301527f65726d697373696f6e73207065726d69747465642c6164647265737320737065848301527f6e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c60608301527f696e652c0000000000000000000000000000000000000000000000000000000060808301528351948591816111e3602085018096611edc565b918237018b8152039361121c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095868101835282611437565b5190209261122a8651611f9d565b6020878101518589015195519182019687526040820192909252336060820152608081019190915260a081019390935260e43560c08401528260e081016102e1565b5082346105bf576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261033257813567ffffffffffffffff92838211610bda5736602383011215610bda5781013592831161032e576024906007368386831b8401011161049f57865b8581106112e5578780f35b80821b83019060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc83360301126103265761139288876001946060835161132c81611398565b611368608461133c8d8601611509565b9485845261134c60448201611509565b809785015261135d60648201611509565b809885015201611509565b918291015273ffffffffffffffffffffffffffffffffffffffff80808093169516931691166117a1565b016112da565b6080810190811067ffffffffffffffff8211176113b457604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6060810190811067ffffffffffffffff8211176113b457604052565b60a0810190811067ffffffffffffffff8211176113b457604052565b60c0810190811067ffffffffffffffff8211176113b457604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176113b457604052565b60c4359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b6044359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b359073ffffffffffffffffffffffffffffffffffffffff8216820361149b57565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc01906080821261149b576040805190611563826113e3565b8082941261149b57805181810181811067ffffffffffffffff8211176113b457825260043573ffffffffffffffffffffffffffffffffffffffff8116810361149b578152602435602082015282526044356020830152606435910152565b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020838186019501011161149b57565b67ffffffffffffffff81116113b45760051b60200190565b359065ffffffffffff8216820361149b57565b9181601f8401121561149b5782359167ffffffffffffffff831161149b576020808501948460061b01011161149b57565b91909160608184031261149b576040805191611666836113e3565b8294813567ffffffffffffffff9081811161149b57830182601f8201121561149b578035611693816115ef565b926116a087519485611437565b818452602094858086019360061b8501019381851161149b579086899897969594939201925b8484106116e3575050505050855280820135908501520135910152565b90919293949596978483031261149b578851908982019082821085831117611730578a928992845261171487611509565b81528287013583820152815201930191908897969594936116c6565b602460007f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b80518210156117725760209160051b010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b92919273ffffffffffffffffffffffffffffffffffffffff604060008284168152600160205282828220961695868252602052818120338252602052209485549565ffffffffffff8760a01c16804211611884575082871696838803611812575b5050611810955016926122fc565b565b878484161160001461184f57602488604051907ff96fb0710000000000000000000000000000000000000000000000000000000082526004820152fd5b7fffffffffffffffffffffffff000000000000000000000000000000000000000084846118109a031691161790553880611802565b602490604051907fd81b2f2e0000000000000000000000000000000000000000000000000000000082526004820152fd5b91908110156117725760061b0190565b3573ffffffffffffffffffffffffffffffffffffffff8116810361149b5790565b9065ffffffffffff908160608401511673ffffffffffffffffffffffffffffffffffffffff908185511694826020820151169280866040809401511695169560009187835260016020528383208984526020528383209916988983526020528282209184835460d01c03611a3e579185611a1794927fc6a377bfc4eb120024a8ac08eef205be16b817020812c73223e81d1bdb9708ec98979694508715600014611a1c5779ffffffffffff00000000000000000000000000000000000000009042165b60a01b167fffffffffffff00000000000000000000000000000000000000000000000000006001860160d01b1617179055519384938491604091949373ffffffffffffffffffffffffffffffffffffffff606085019616845265ffffffffffff809216602085015216910152565b0390a4565b5079ffffffffffff0000000000000000000000000000000000000000876119a9565b600484517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b467f000000000000000000000000000000000000000000000000000000000000000003611ab2577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86682527f9ac997416e8ff9d2ff6bebeb7149f65cdae5e32e2b90440b566bb3044041d36a604082015246606082015230608082015260808152611b1c816113ff565b51902090565b611b2a611a67565b906040519060208201927f190100000000000000000000000000000000000000000000000000000000000084526022830152604282015260428152611b1c81611398565b9192909360a435936040840151804211611c0f5750602084510151808611611bde5750918591610d78611bae94611ba9602088015186611d90565b611b22565b73ffffffffffffffffffffffffffffffffffffffff809151511692608435918216820361149b57611810936122fc565b602490604051907f3728b83d0000000000000000000000000000000000000000000000000000000082526004820152fd5b602490604051907fcd21db4f0000000000000000000000000000000000000000000000000000000082526004820152fd5b959093958051519560409283830151804211611d605750848803611d3757611c77918691610d7860209b611ba98d88015186611d90565b60005b868110611c8b575050505050505050565b611c9681835161175e565b5188611ca383878a6118b5565b01359089810151808311611d07575091818888886001968596611ccd575b50505050505001611c7a565b611cfc95611cf69273ffffffffffffffffffffffffffffffffffffffff610515935116956118b5565b916122fc565b803888888883611cc1565b6024908651907f3728b83d0000000000000000000000000000000000000000000000000000000082526004820152fd5b600484517fff633a38000000000000000000000000000000000000000000000000000000008152fd5b6024908551907fcd21db4f0000000000000000000000000000000000000000000000000000000082526004820152fd5b9073ffffffffffffffffffffffffffffffffffffffff600160ff83161b9216600052600060205260406000209060081c6000526020526040600020818154188091551615611dda57565b60046040517f756688fe000000000000000000000000000000000000000000000000000000008152fd5b90611e0e826115ef565b611e1b6040519182611437565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0611e4982946115ef565b0190602036910137565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611e805760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b805160208092019160005b828110611ec8575050505090565b835185529381019392810192600101611eba565b9081519160005b838110611ef4575050016000815290565b8060208092840101518185015201611ee3565b60405160208101917f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b3678835273ffffffffffffffffffffffffffffffffffffffff8082511660408401526020820151166060830152606065ffffffffffff9182604082015116608085015201511660a082015260a0815260c0810181811067ffffffffffffffff8211176113b45760405251902090565b6040516020808201927f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a1845273ffffffffffffffffffffffffffffffffffffffff81511660408401520151606082015260608152611b1c81611398565b919082604091031261149b576020823592013590565b6000843b6121775750604182036120f55761202d82820182611ffa565b939092604010156117725760209360009360ff6040608095013560f81c5b60405194855216868401526040830152606082015282805260015afa156120e95773ffffffffffffffffffffffffffffffffffffffff80600051169182156120bf57160361209557565b60046040517f815e1d64000000000000000000000000000000000000000000000000000000008152fd5b60046040517f8baa579f000000000000000000000000000000000000000000000000000000008152fd5b6040513d6000823e3d90fd5b6040820361214d5761210991810190611ffa565b91601b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84169360ff1c019060ff8211611e805760209360009360ff60809461204b565b60046040517f4be6321b000000000000000000000000000000000000000000000000000000008152fd5b929391601f928173ffffffffffffffffffffffffffffffffffffffff60646020957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0604051988997889687947f1626ba7e000000000000000000000000000000000000000000000000000000009e8f8752600487015260406024870152816044870152868601378b85828601015201168101030192165afa9081156122f1578291612273575b507fffffffff000000000000000000000000000000000000000000000000000000009150160361224957565b60046040517fb0669cbc000000000000000000000000000000000000000000000000000000008152fd5b90506020813d82116122e9575b8161228d60209383611437565b810103126103365751907fffffffff0000000000000000000000000000000000000000000000000000000082168203610a9a57507fffffffff00000000000000000000000000000000000000000000000000000000903861221d565b3d9150612280565b6040513d84823e3d90fd5b9060006064926020958295604051947f23b872dd0000000000000000000000000000000000000000000000000000000086526004860152602485015260448401525af13d15601f3d116001600051141617161561235557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152fdfea164736f6c6343000811000a";
            class fm extends es.ContractFactory {
                constructor(e) {
                    super(fb, fy, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ei.vU(fb)
                }
                static connect(e, t) {
                    return new es.Contract(e, fb, t)
                }
            }
            fm.bytecode = fy, fm.abi = fb, (d = m || (m = {}))[d.NotSupported = 0] = "NotSupported", d[d.Failed = 1] = "Failed", d[d.Succeeded = 2] = "Succeeded", d[d.InsufficientBalance = 3] = "InsufficientBalance", d[d.NotApproved = 4] = "NotApproved";
            class fT extends ts {
                constructor(e) {
                    super(), this.url = e
                }
                async getGasPrice() {
                    S.info(`About to get gas prices from gas station ${this.url}`);
                    let e = await tl()(async () => w().get(this.url), {
                            retries: 1
                        }),
                        {
                            data: t,
                            status: f
                        } = e;
                    if (200 != f) throw S.error({
                        response: e
                    }, `Unabled to get gas price from ${this.url}.`), Error(`Unable to get gas price from ${this.url}`);
                    S.info({
                        gasPriceResponse: t
                    }, 'Gas price response from API. About to parse "fast" to big number');
                    let n = tr.O$.from(t.fast).div(tr.O$.from(10)).mul(tr.O$.from(10).pow(9));
                    return S.info(`Gas price in wei: ${n} as of block ${t.blockNum}`), {
                        gasPriceWei: n
                    }
                }
            }
            class fI extends ts {
                constructor(e) {
                    super(), this.provider = e
                }
                async getGasPrice() {
                    let e = await this.provider.getGasPrice();
                    return S.info({
                        gasPriceWei: e
                    }, `Got gas price ${e} using eth_gasPrice RPC`), {
                        gasPriceWei: e
                    }
                }
            }
            var fg = f(69222);
            let fv = [{
                    inputs: [],
                    name: "getCurrentBlockTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "addr",
                        type: "address"
                    }],
                    name: "getEthBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "balance",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "target",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "gasLimit",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "callData",
                            type: "bytes"
                        }],
                        internalType: "struct UniswapInterfaceMulticall.Call[]",
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "uint256",
                        name: "blockNumber",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "bool",
                            name: "success",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "gasUsed",
                            type: "uint256"
                        }, {
                            internalType: "bytes",
                            name: "returnData",
                            type: "bytes"
                        }],
                        internalType: "struct UniswapInterfaceMulticall.Result[]",
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                fC = "0x608060405234801561001057600080fd5b50610567806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
            class fE extends es.ContractFactory {
                constructor(e) {
                    super(fv, fC, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ei.vU(fv)
                }
                static connect(e, t) {
                    return new es.Contract(e, fv, t)
                }
            }
            fE.bytecode = fC, fE.abi = fv;
            class fA {}
            class fS extends fA {
                constructor(e, t, f = 1e6) {
                    super(), this.chainId = e, this.provider = t, this.gasLimitPerCall = f;
                    let n = W[this.chainId];
                    if (!n) throw Error(`No address for Uniswap Multicall Contract on chain id: ${e}`);
                    this.multicallContract = fE.connect(n, this.provider)
                }
                async callSameFunctionOnMultipleContracts(e) {
                    var t;
                    let {
                        addresses: f,
                        contractInterface: n,
                        functionName: a,
                        functionParams: i,
                        providerConfig: r
                    } = e, s = null !== (t = null == r ? void 0 : r.blockNumber) && void 0 !== t ? t : void 0, o = n.getFunction(a), d = n.encodeFunctionData(o, i), u = M().map(f, e => ({
                        target: e,
                        callData: d,
                        gasLimit: this.gasLimitPerCall
                    }));
                    S.debug({
                        calls: u
                    }, `About to multicall for ${a} across ${f.length} addresses`);
                    let {
                        blockNumber: c,
                        returnData: l
                    } = await this.multicallContract.callStatic.multicall(u, {
                        blockTag: s
                    }), p = [];
                    for (let e = 0; e < l.length; e++) {
                        let {
                            success: t,
                            returnData: i
                        } = l[e];
                        if (!t || i.length <= 2) {
                            S.debug({
                                result: l[e]
                            }, `Invalid result calling ${a} on address ${f[e]}`), p.push({
                                success: !1,
                                returnData: i
                            });
                            continue
                        }
                        p.push({
                            success: !0,
                            result: n.decodeFunctionResult(o, i)
                        })
                    }
                    return S.debug({
                        results: p
                    }, `Results for multicall on ${a} across ${f.length} addresses as of block ${c}`), {
                        blockNumber: c,
                        results: p
                    }
                }
                async callSameFunctionOnContractWithMultipleParams(e) {
                    var t, f;
                    let {
                        address: n,
                        contractInterface: a,
                        functionName: i,
                        functionParams: r,
                        additionalConfig: s,
                        providerConfig: o
                    } = e, d = a.getFunction(i), u = null !== (t = null == s ? void 0 : s.gasLimitPerCallOverride) && void 0 !== t ? t : this.gasLimitPerCall, c = null !== (f = null == o ? void 0 : o.blockNumber) && void 0 !== f ? f : void 0, l = M().map(r, e => {
                        let t = a.encodeFunctionData(d, e);
                        return {
                            target: n,
                            callData: t,
                            gasLimit: u
                        }
                    });
                    S.debug({
                        calls: l
                    }, `About to multicall for ${i} at address ${n} with ${r.length} different sets of params`);
                    let {
                        blockNumber: p,
                        returnData: h
                    } = await this.multicallContract.callStatic.multicall(l, {
                        blockTag: c
                    }), b = [], y = [];
                    for (let e = 0; e < h.length; e++) {
                        let {
                            success: t,
                            returnData: f,
                            gasUsed: n
                        } = h[e];
                        if (!t || f.length <= 2) {
                            S.debug({
                                result: h[e]
                            }, `Invalid result calling ${i} with params ${r[e]}`), b.push({
                                success: !1,
                                returnData: f
                            });
                            continue
                        }
                        y.push(n.toNumber()), b.push({
                            success: !0,
                            result: a.decodeFunctionResult(d, f)
                        })
                    }
                    return S.debug({
                        results: b,
                        functionName: i,
                        address: n
                    }, `Results for multicall for ${i} at address ${n} with ${r.length} different sets of params. Results as of block ${p}`), {
                        blockNumber: p,
                        results: b,
                        approxGasUsedPerSuccessCall: fg.percentile(y, 99)
                    }
                }
                async callMultipleFunctionsOnSameContract(e) {
                    var t, f;
                    let {
                        address: n,
                        contractInterface: a,
                        functionNames: i,
                        functionParams: r,
                        additionalConfig: s,
                        providerConfig: o
                    } = e, d = null !== (t = null == s ? void 0 : s.gasLimitPerCallOverride) && void 0 !== t ? t : this.gasLimitPerCall, u = null !== (f = null == o ? void 0 : o.blockNumber) && void 0 !== f ? f : void 0, c = M().map(i, (e, t) => {
                        let f = a.getFunction(e),
                            i = r ? r[t] : [],
                            s = a.encodeFunctionData(f, i);
                        return {
                            target: n,
                            callData: s,
                            gasLimit: d
                        }
                    });
                    S.debug({
                        calls: c
                    }, `About to multicall for ${i.length} functions at address ${n} with ${null==r?void 0:r.length} different sets of params`);
                    let {
                        blockNumber: l,
                        returnData: p
                    } = await this.multicallContract.callStatic.multicall(c, {
                        blockTag: u
                    }), h = [], b = [];
                    for (let e = 0; e < p.length; e++) {
                        let t = a.getFunction(i[e]),
                            {
                                success: f,
                                returnData: n,
                                gasUsed: s
                            } = p[e];
                        if (!f || n.length <= 2) {
                            S.debug({
                                result: p[e]
                            }, `Invalid result calling ${i[e]} with ${r?r[e]:"0"} params`), h.push({
                                success: !1,
                                returnData: n
                            });
                            continue
                        }
                        b.push(s.toNumber()), h.push({
                            success: !0,
                            result: a.decodeFunctionResult(t, n)
                        })
                    }
                    return S.debug({
                        results: h,
                        functionNames: i,
                        address: n
                    }, `Results for multicall for ${i.length} functions at address ${n} with ${r?r.length:" 0"} different sets of params. Results as of block ${l}`), {
                        blockNumber: l,
                        results: h,
                        approxGasUsedPerSuccessCall: fg.percentile(b, 99)
                    }
                }
            }
            let fO = [E.ChainId.MAINNET, E.ChainId.GOERLI, E.ChainId.POLYGON_MUMBAI];
            class fk extends ts {
                constructor(e, t, f, n = fO) {
                    super(), this.chainId = e, this.eip1559GasPriceProvider = t, this.legacyGasPriceProvider = f, this.eipChains = n
                }
                async getGasPrice() {
                    return this.eipChains.includes(this.chainId) ? this.eip1559GasPriceProvider.getGasPrice() : this.legacyGasPriceProvider.getGasPrice()
                }
            }
            let fw = [{
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                name: "quoteExactInput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "v3SqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "v3InitializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "v3SwapGasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    internalType: "struct IMixedRouteQuoterV1.QuoteExactInputSingleV2Params",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingleV2",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IMixedRouteQuoterV1.QuoteExactInputSingleV3Params",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingleV3",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class fP {
                static createInterface() {
                    return new ei.vU(fw)
                }
                static connect(e, t) {
                    return new es.Contract(e, fw, t)
                }
            }
            fP.abi = fw;
            let fM = [{
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                name: "quoteExactInput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "sqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "initializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IQuoterV2.QuoteExactInputSingleParams",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactInputSingle",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "path",
                    type: "bytes"
                }, {
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                name: "quoteExactOutput",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint160[]",
                    name: "sqrtPriceX96AfterList",
                    type: "uint160[]"
                }, {
                    internalType: "uint32[]",
                    name: "initializedTicksCrossedList",
                    type: "uint32[]"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "address",
                        name: "tokenIn",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        internalType: "uint24",
                        name: "fee",
                        type: "uint24"
                    }, {
                        internalType: "uint160",
                        name: "sqrtPriceLimitX96",
                        type: "uint160"
                    }],
                    internalType: "struct IQuoterV2.QuoteExactOutputSingleParams",
                    name: "params",
                    type: "tuple"
                }],
                name: "quoteExactOutputSingle",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint160",
                    name: "sqrtPriceX96After",
                    type: "uint160"
                }, {
                    internalType: "uint32",
                    name: "initializedTicksCrossed",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "gasEstimate",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }];
            class fx {
                static createInterface() {
                    return new ei.vU(fM)
                }
                static connect(e, t) {
                    return new es.Contract(e, fM, t)
                }
            }
            fx.abi = fM;
            class fR extends Error {
                constructor() {
                    super(...arguments), this.name = "BlockConflictError"
                }
            }
            class fD extends Error {
                constructor() {
                    super(...arguments), this.name = "SuccessRateError"
                }
            }
            class fB extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderBlockHeaderError"
                }
            }
            class fL extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderTimeoutError"
                }
            }
            class f_ extends Error {
                constructor() {
                    super(...arguments), this.name = "ProviderGasError"
                }
            }
            class fN {
                constructor(e, t, f, n = {
                    retries: 2,
                    minTimeout: 25,
                    maxTimeout: 250
                }, a = {
                    multicallChunk: 150,
                    gasLimitPerCall: 1e6,
                    quoteMinSuccessRate: .2
                }, i = {
                    gasLimitOverride: 15e5,
                    multicallChunk: 100
                }, r = {
                    gasLimitOverride: 13e5,
                    multicallChunk: 110
                }, s = {
                    baseBlockOffset: 0,
                    rollback: {
                        enabled: !1
                    }
                }, o) {
                    this.chainId = e, this.provider = t, this.multicall2Provider = f, this.retryOptions = n, this.batchParams = a, this.gasErrorFailureOverride = i, this.successRateFailureOverrides = r, this.blockNumberConfig = s, this.quoterAddressOverride = o
                }
                getQuoterAddress(e) {
                    if (this.quoterAddressOverride) return this.quoterAddressOverride;
                    let t = e ? j[this.chainId] : H[this.chainId];
                    if (!t) throw Error(`No address for the quoter contract on chain id: ${this.chainId}`);
                    return t
                }
                async getQuotesManyExactIn(e, t, f) {
                    return this.getQuotesManyData(e, t, "quoteExactInput", f)
                }
                async getQuotesManyExactOut(e, t, f) {
                    return this.getQuotesManyData(e, t, "quoteExactOutput", f)
                }
                async getQuotesManyData(e, t, f, n) {
                    var a;
                    let i = t.some(e => e.protocol === ee.Protocol.V2) || t.some(e => e.protocol === ee.Protocol.MIXED);
                    this.validateRoutes(t, f, i);
                    let r = this.batchParams.multicallChunk,
                        s = this.batchParams.gasLimitPerCall,
                        {
                            baseBlockOffset: o,
                            rollback: d
                        } = this.blockNumberConfig,
                        u = await this.provider.getBlockNumber(),
                        l = { ...n,
                            blockNumber: null !== (a = null == n ? void 0 : n.blockNumber) && void 0 !== a ? a : u + o
                        },
                        p = M()(t).flatMap(t => {
                            let n = t.protocol === ee.Protocol.V3 ? (0, B.encodeRouteToPath)(t, "quoteExactOutput" == f) : (0, ee.encodeMixedRouteToPath)(t instanceof t$ ? new ee.MixedRouteSDK(t.pairs, t.input, t.output) : t),
                                a = e.map(e => [n, `0x${e.quotient.toString(16)}`]);
                            return a
                        }).value(),
                        h = Math.ceil(p.length / Math.ceil(p.length / r)),
                        b = M().chunk(p, h),
                        y = M().map(b, e => ({
                            status: "pending",
                            inputs: e
                        }));
                    S.info(`About to get ${p.length} quotes in chunks of ${h} [${M().map(b,e=>e.length).join(",")}] ${s?`with a gas limit override of ${s}`:""} and block number: ${await l.blockNumber} [Original before offset: ${u}].`);
                    let m = !1,
                        T = !1,
                        I = 0,
                        g = !1,
                        v = !1,
                        C = !1,
                        A = !1,
                        O = !1,
                        k = !1,
                        w = 1,
                        P = y.length,
                        x = 0,
                        {
                            results: D,
                            blockNumber: L,
                            approxGasUsedPerSuccessCall: _
                        } = await tl()(async (e, t) => {
                            g = !1, w = t;
                            let [n, a, o] = this.partitionQuotes(y);
                            S.info(`Starting attempt: ${t}.
          Currently ${n.length} success, ${a.length} failed, ${o.length} pending.
          Gas limit override: ${s} Block number override: ${l.blockNumber}.`), y = await Promise.all(M().map(y, async (e, t) => {
                                if ("success" == e.status) return e;
                                let {
                                    inputs: n
                                } = e;
                                try {
                                    x += 1;
                                    let e = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                                            address: this.getQuoterAddress(i),
                                            contractInterface: i ? fP.createInterface() : fx.createInterface(),
                                            functionName: f,
                                            functionParams: n,
                                            providerConfig: l,
                                            additionalConfig: {
                                                gasLimitPerCallOverride: s
                                            }
                                        }),
                                        t = this.validateSuccessRate(e.results, m);
                                    if (t) return {
                                        status: "failed",
                                        inputs: n,
                                        reason: t,
                                        results: e
                                    };
                                    return {
                                        status: "success",
                                        inputs: n,
                                        results: e
                                    }
                                } catch (e) {
                                    if (e.message.includes("header not found")) return {
                                        status: "failed",
                                        inputs: n,
                                        reason: new fB(e.message.slice(0, 500))
                                    };
                                    if (e.message.includes("timeout")) return {
                                        status: "failed",
                                        inputs: n,
                                        reason: new fL(`Req ${t}/${y.length}. Request had ${n.length} inputs. ${e.message.slice(0,500)}`)
                                    };
                                    if (e.message.includes("out of gas")) return {
                                        status: "failed",
                                        inputs: n,
                                        reason: new f_(e.message.slice(0, 500))
                                    };
                                    return {
                                        status: "failed",
                                        inputs: n,
                                        reason: Error(`Unknown error from provider: ${e.message.slice(0,500)}`)
                                    }
                                }
                            }));
                            let [u, h, P] = this.partitionQuotes(y);
                            if (P.length > 0) throw Error("Pending quote after waiting for all promises.");
                            let D = !1,
                                B = this.validateBlockNumbers(u, b.length, s);
                            B && (D = !0);
                            let L = M().map(h, e => e.reason.name).join(", ");
                            if (h.length > 0)
                                for (let e of (S.info(`On attempt ${t}: ${h.length}/${y.length} quotes failed. Reasons: ${L}`), h)) {
                                    let {
                                        reason: f
                                    } = e;
                                    if (S.info({
                                            error: f
                                        }, `[QuoteFetchError] Attempt ${t}. ${f.message}`), f instanceof fR) C || (R.putMetric("QuoteBlockConflictErrorRetry", 1, c.Count), C = !0), D = !0;
                                    else if (f instanceof fB) {
                                        if (T || (R.putMetric("QuoteBlockHeaderNotFoundRetry", 1, c.Count), T = !0), g || (I += 1, g = !0), d.enabled) {
                                            let {
                                                rollbackBlockOffset: e,
                                                attemptsBeforeRollback: f
                                            } = d;
                                            I >= f && !v && (S.info(`Attempt ${t}. Have failed due to block header ${I-1} times. Rolling back block number by ${e} for next retry`), l.blockNumber = l.blockNumber ? await l.blockNumber + e : await this.provider.getBlockNumber() + e, D = !0, v = !0)
                                        }
                                    } else f instanceof fL ? O || (R.putMetric("QuoteTimeoutRetry", 1, c.Count), O = !0) : f instanceof f_ ? (A || (R.putMetric("QuoteOutOfGasExceptionRetry", 1, c.Count), A = !0), s = this.gasErrorFailureOverride.gasLimitOverride, r = this.gasErrorFailureOverride.multicallChunk, D = !0) : f instanceof fD ? m || (R.putMetric("QuoteSuccessRateRetry", 1, c.Count), m = !0, s = this.successRateFailureOverrides.gasLimitOverride, r = this.successRateFailureOverrides.multicallChunk, D = !0) : k || (R.putMetric("QuoteUnknownReasonRetry", 1, c.Count), k = !0)
                                }
                            if (D) {
                                S.info(`Attempt ${t}. Resetting all requests to pending for next attempt.`);
                                let e = Math.ceil(p.length / Math.ceil(p.length / r)),
                                    f = M().chunk(p, e);
                                y = M().map(f, e => ({
                                    status: "pending",
                                    inputs: e
                                }))
                            }
                            if (h.length > 0) {
                                if ((this.chainId == E.ChainId.ARBITRUM_ONE || this.chainId == E.ChainId.ARBITRUM_GOERLI) && M().every(h, e => e.reason instanceof f_) && t == this.retryOptions.retries) return S.error("Failed to get quotes on Arbitrum due to provider gas error issue. Overriding error to return 0 quotes."), {
                                    results: [],
                                    blockNumber: tr.O$.from(0),
                                    approxGasUsedPerSuccessCall: 0
                                };
                                throw Error(`Failed to get ${h.length} quotes. Reasons: ${L}`)
                            }
                            let _ = M().map(u, e => e.results);
                            return {
                                results: M().flatMap(_, e => e.results),
                                blockNumber: tr.O$.from(_[0].blockNumber),
                                approxGasUsedPerSuccessCall: fg.percentile(M().map(_, e => e.approxGasUsedPerSuccessCall), 100)
                            }
                        }, {
                            retries: 2,
                            ...this.retryOptions
                        }),
                        N = this.processQuoteResults(D, t, e);
                    R.putMetric("QuoteApproxGasUsedPerSuccessfulCall", _, c.Count), R.putMetric("QuoteNumRetryLoops", w - 1, c.Count), R.putMetric("QuoteTotalCallsToProvider", x, c.Count), R.putMetric("QuoteExpectedCallsToProvider", P, c.Count), R.putMetric("QuoteNumRetriedCalls", x - P, c.Count);
                    let [F, U] = M()(N).flatMap(e => e[1]).partition(e => null != e.quote).value();
                    return S.info(`Got ${F.length} successful quotes, ${U.length} failed quotes. Took ${w-1} attempt loops. Total calls made to provider: ${x}. Have retried for timeout: ${O}`), {
                        routesWithQuotes: N,
                        blockNumber: L
                    }
                }
                partitionQuotes(e) {
                    let t = M().filter(e, e => "success" == e.status),
                        f = M().filter(e, e => "failed" == e.status),
                        n = M().filter(e, e => "pending" == e.status);
                    return [t, f, n]
                }
                processQuoteResults(e, t, f) {
                    let n = [],
                        a = M().chunk(e, f.length),
                        i = [];
                    for (let e = 0; e < a.length; e++) {
                        let r = t[e],
                            s = a[e],
                            o = M().map(s, (e, t) => {
                                let n = f[t];
                                if (!e.success) {
                                    let e = 100 / f.length * (t + 1),
                                        a = n.toFixed(Math.min(n.currency.decimals, 2)),
                                        s = ef(r);
                                    return i.push({
                                        route: s,
                                        percent: e,
                                        amount: a
                                    }), {
                                        amount: n,
                                        quote: null,
                                        sqrtPriceX96AfterList: null,
                                        gasEstimate: null,
                                        initializedTicksCrossedList: null
                                    }
                                }
                                return {
                                    amount: n,
                                    quote: e.result[0],
                                    sqrtPriceX96AfterList: e.result[1],
                                    initializedTicksCrossedList: e.result[2],
                                    gasEstimate: e.result[3]
                                }
                            });
                        n.push([r, o])
                    }
                    return M().forEach(M().chunk(i, 80), (e, t) => {
                        let f = M().groupBy(e, e => e.route),
                            n = M().mapValues(f, e => M()(e).map(e => `${e.percent}%[${e.amount}]`).join(","));
                        S.info({
                            failedQuotes: M().map(n, (e, t) => `${t} : ${e}`)
                        }, `Failed on chain quotes for routes Part ${t}/${Math.ceil(i.length/80)}`)
                    }), n
                }
                validateBlockNumbers(e, t, f) {
                    if (e.length <= 1) return null;
                    let n = M().map(e, e => e.results),
                        a = M().map(n, e => e.blockNumber),
                        i = M()(a).map(e => e.toNumber()).uniq().value();
                    return 1 == i.length ? null : new fR(`Quotes returned from different blocks. ${i}. ${t} calls were made with gas limit ${f}`)
                }
                validateSuccessRate(e, t) {
                    let f = e.length,
                        n = e.filter(e => e.success).length,
                        a = 1 * n / f,
                        {
                            quoteMinSuccessRate: i
                        } = this.batchParams;
                    if (a < i) {
                        if (t) {
                            S.info(`Quote success rate still below threshold despite retry. Continuing. ${i}: ${a}`);
                            return
                        }
                        return new fD(`Quote success rate below threshold of ${i}: ${a}`)
                    }
                }
                validateRoutes(e, t, f) {
                    if (e.some(e => e.protocol === ee.Protocol.V3) && f) throw Error("Cannot use mixed route quoter with V3 routes");
                    if ("quoteExactOutput" === t && f) throw Error("Cannot call quoteExactOutput with V2 or Mixed routes")
                }
            }
            let fF = [{
                    inputs: [{
                        internalType: "address",
                        name: "_factoryV2",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "factoryV3",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_positionManager",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_WETH9",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [],
                    name: "WETH9",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveMax",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveMaxMinusOne",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveZeroThenMax",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }],
                    name: "approveZeroThenMaxMinusOne",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "callPositionManager",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes[]",
                        name: "paths",
                        type: "bytes[]"
                    }, {
                        internalType: "uint128[]",
                        name: "amounts",
                        type: "uint128[]"
                    }, {
                        internalType: "uint24",
                        name: "maximumTickDivergence",
                        type: "uint24"
                    }, {
                        internalType: "uint32",
                        name: "secondsAgo",
                        type: "uint32"
                    }],
                    name: "checkOracleSlippage",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "path",
                        type: "bytes"
                    }, {
                        internalType: "uint24",
                        name: "maximumTickDivergence",
                        type: "uint24"
                    }, {
                        internalType: "uint32",
                        name: "secondsAgo",
                        type: "uint32"
                    }],
                    name: "checkOracleSlippage",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "bytes",
                            name: "path",
                            type: "bytes"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountIn",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountOutMinimum",
                            type: "uint256"
                        }],
                        internalType: "struct IV3SwapRouter.ExactInputParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactInput",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "tokenIn",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "tokenOut",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountIn",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountOutMinimum",
                            type: "uint256"
                        }, {
                            internalType: "uint160",
                            name: "sqrtPriceLimitX96",
                            type: "uint160"
                        }],
                        internalType: "struct IV3SwapRouter.ExactInputSingleParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactInputSingle",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "bytes",
                            name: "path",
                            type: "bytes"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountOut",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountInMaximum",
                            type: "uint256"
                        }],
                        internalType: "struct IV3SwapRouter.ExactOutputParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactOutput",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "tokenIn",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "tokenOut",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "amountOut",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amountInMaximum",
                            type: "uint256"
                        }, {
                            internalType: "uint160",
                            name: "sqrtPriceLimitX96",
                            type: "uint160"
                        }],
                        internalType: "struct IV3SwapRouter.ExactOutputSingleParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "exactOutputSingle",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "factoryV2",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "getApprovalType",
                    outputs: [{
                        internalType: "enum IApproveAndCall.ApprovalType",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token0",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "token1",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "tokenId",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount0Min",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1Min",
                            type: "uint256"
                        }],
                        internalType: "struct IApproveAndCall.IncreaseLiquidityParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "increaseLiquidity",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "address",
                            name: "token0",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "token1",
                            type: "address"
                        }, {
                            internalType: "uint24",
                            name: "fee",
                            type: "uint24"
                        }, {
                            internalType: "int24",
                            name: "tickLower",
                            type: "int24"
                        }, {
                            internalType: "int24",
                            name: "tickUpper",
                            type: "int24"
                        }, {
                            internalType: "uint256",
                            name: "amount0Min",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount1Min",
                            type: "uint256"
                        }, {
                            internalType: "address",
                            name: "recipient",
                            type: "address"
                        }],
                        internalType: "struct IApproveAndCall.MintParams",
                        name: "params",
                        type: "tuple"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "bytes",
                        name: "result",
                        type: "bytes"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes32",
                        name: "previousBlockhash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes[]",
                        name: "data",
                        type: "bytes[]"
                    }],
                    name: "multicall",
                    outputs: [{
                        internalType: "bytes[]",
                        name: "results",
                        type: "bytes[]"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "positionManager",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "pull",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "refundETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermit",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitAllowed",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "expiry",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitAllowedIfNecessary",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "selfPermitIfNecessary",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "swapExactTokensForTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountOut",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amountInMax",
                        type: "uint256"
                    }, {
                        internalType: "address[]",
                        name: "path",
                        type: "address[]"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "swapTokensForExactTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }],
                    name: "sweepToken",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }],
                    name: "sweepToken",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "sweepTokenWithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "sweepTokenWithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "int256",
                        name: "amount0Delta",
                        type: "int256"
                    }, {
                        internalType: "int256",
                        name: "amount1Delta",
                        type: "int256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "uniswapV3SwapCallback",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }],
                    name: "unwrapWETH9",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9WithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amountMinimum",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "feeBips",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "feeRecipient",
                        type: "address"
                    }],
                    name: "unwrapWETH9WithFee",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "wrapETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                fU = "0x6101006040526000196000553480156200001857600080fd5b5060405162006135380380620061358339810160408190526200003b9162000087565b6001600160601b0319606094851b811660805291841b821660a05291831b811660c052911b1660e052620000e3565b80516001600160a01b03811681146200008257600080fd5b919050565b600080600080608085870312156200009d578384fd5b620000a8856200006a565b9350620000b8602086016200006a565b9250620000c8604086016200006a565b9150620000d8606086016200006a565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c615fb162000184600039806102c15280610b3c52806112ad52806113d7528061147e52806116af52806117d95280612d8f5280612def5280612e70525080611e4c52806124df5280613cdb52508061166f5280611b1a5280611e9c52806132a6525080610c625280610d365280610fe2528061164b5280612fc252806131855250615fb16000f3fe6080604052600436106102a45760003560e01c80639b2c0a371161016e578063dee00f35116100cb578063f100b2051161007f578063f2d5d56b11610064578063f2d5d56b1461066e578063f3995c6714610681578063fa461e33146106945761034f565b8063f100b2051461063b578063f25801a71461064e5761034f565b8063e0e189a0116100b0578063e0e189a0146105f5578063e90a182f14610608578063efdeed8e1461061b5761034f565b8063dee00f35146105b5578063df2ab5bb146105e25761034f565b8063b858183f11610122578063c45a015511610107578063c45a01551461057a578063cab372ce1461058f578063d4ef38de146105a25761034f565b8063b858183f14610554578063c2e3140a146105675761034f565b8063ab3fdd5011610153578063ab3fdd501461051b578063ac9650d81461052e578063b3a2af13146105415761034f565b80639b2c0a37146104f5578063a4a78f0c146105085761034f565b8063472b43f31161021c578063571ac8b0116101d0578063639d71a9116101b5578063639d71a9146104b857806368e0d4e1146104cb578063791b98bc146104e05761034f565b8063571ac8b0146104925780635ae401dc146104a55761034f565b80634961699711610201578063496169971461044a5780634aa4a4fc1461045d5780635023b4df1461047f5761034f565b8063472b43f31461042457806349404b7c146104375761034f565b80631c58db4f116102735780633068c554116102585780633068c554146103eb57806342712a67146103fe5780634659a494146104115761034f565b80631c58db4f146103b85780631f0464d1146103cb5761034f565b806304e45aaf1461035457806309b813461461037d57806311ed56c91461039057806312210e8a146103b05761034f565b3661034f573373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461034d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f742057455448390000000000000000000000000000000000000000000000604482015290519081900360640190fd5b005b600080fd5b610367610362366004615543565b6106b4565b6040516103749190615dfd565b60405180910390f35b61036761038b3660046155de565b61083c565b6103a361039e366004615638565b61091c565b6040516103749190615b7a565b61034d610b28565b61034d6103c63660046157bb565b610b3a565b6103de6103d93660046152a7565b610bbe565b6040516103749190615afc565b61034d6103f93660046150d8565b610c48565b61036761040c366004615885565b610c5b565b61034d61041f366004615121565b610e35565b610367610432366004615885565b610ef5565b61034d6104453660046157eb565b6112a9565b61034d6104583660046157bb565b61146f565b34801561046957600080fd5b5061047261147c565b6040516103749190615a3c565b61036761048d366004615616565b6114a0565b61034d6104a0366004614feb565b611589565b6103de6104b33660046152a7565b6115bc565b61034d6104c6366004614feb565b611635565b3480156104d757600080fd5b50610472611649565b3480156104ec57600080fd5b5061047261166d565b61034d61050336600461581a565b611691565b61034d610516366004615121565b6118a7565b61034d610529366004614feb565b61197c565b6103de61053c36600461517c565b6119ba565b6103a361054f3660046152f1565b611b14565b61036761056236600461549d565b611bd2565b61034d610575366004615121565b611d95565b34801561058657600080fd5b50610472611e4a565b61034d61059d366004614feb565b611990565b61034d6105b0366004615858565b611e6e565b3480156105c157600080fd5b506105d56105d036600461500e565b611e7a565b6040516103749190615b8d565b61034d6105f0366004615039565b612027565b61034d61060336600461507a565b61213e565b61034d61061636600461500e565b6122a4565b34801561062757600080fd5b5061034d6106363660046151bc565b6122b3565b6103a3610649366004615627565b612305565b34801561065a57600080fd5b5061034d610669366004615324565b6123a5565b61034d61067c36600461500e565b6123f6565b61034d61068f366004615121565b612402565b3480156106a057600080fd5b5061034d6106af3660046153b8565b61249a565b600080600083608001511415610771575081516040517f70a0823100000000000000000000000000000000000000000000000000000000815260019173ffffffffffffffffffffffffffffffffffffffff16906370a082319061071b903090600401615a3c565b60206040518083038186803b15801561073357600080fd5b505afa158015610747573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076b91906157d3565b60808401525b6107ed836080015184606001518560c001516040518060400160405280886000015189604001518a602001516040516020016107af939291906159aa565b6040516020818303038152906040528152602001866107ce57336107d0565b305b73ffffffffffffffffffffffffffffffffffffffff1690526125de565b91508260a00151821015610836576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b60405180910390fd5b50919050565b60006108b0604083018035906108559060208601614feb565b604080518082019091526000908061086d8880615e41565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252503360209091015261278f565b505060005460608201358111156108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600055919050565b604080516101608101909152606090610b20907f8831645600000000000000000000000000000000000000000000000000000000908061095f6020870187614feb565b73ffffffffffffffffffffffffffffffffffffffff16815260200185602001602081019061098d9190614feb565b73ffffffffffffffffffffffffffffffffffffffff1681526020016109b860608701604088016157a1565b62ffffff1681526020016109d26080870160608801615379565b60020b81526020016109ea60a0870160808801615379565b60020b8152602090810190610a0a90610a0590880188614feb565b612976565b8152602001610a25866020016020810190610a059190614feb565b815260a0860135602082015260c08601356040820152606001610a4f610100870160e08801614feb565b73ffffffffffffffffffffffffffffffffffffffff1681526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815250604051602401610a9e9190615cf8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b14565b90505b919050565b4715610b3857610b383347612a1b565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610ba257600080fd5b505af1158015610bb6573d6000803e3d6000fd5b505050505050565b60608380600143034014610c3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f426c6f636b686173680000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610c3d84846119ba565b91505b509392505050565b610c55848433858561213e565b50505050565b6000610cbb7f000000000000000000000000000000000000000000000000000000000000000087868680806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250612b6992505050565b600081518110610cc757fe5b6020026020010151905084811115610d0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b610da484846000818110610d1b57fe5b9050602002016020810190610d309190614feb565b33610d9e7f000000000000000000000000000000000000000000000000000000000000000088886000818110610d6257fe5b9050602002016020810190610d779190614feb565b89896001818110610d8457fe5b9050602002016020810190610d999190614feb565b612ca2565b84612d8d565b73ffffffffffffffffffffffffffffffffffffffff821660011415610dcb57339150610dee565b73ffffffffffffffffffffffffffffffffffffffff821660021415610dee573091505b610e2c848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250869250612f6b915050565b95945050505050565b604080517f8fcbaf0c00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e48101839052905173ffffffffffffffffffffffffffffffffffffffff881691638fcbaf0c9161010480830192600092919082900301818387803b158015610ed557600080fd5b505af1158015610ee9573d6000803e3d6000fd5b50505050505050505050565b60008086610fab575060018484600081610f0b57fe5b9050602002016020810190610f209190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610f589190615a3c565b60206040518083038186803b158015610f7057600080fd5b505afa158015610f84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa891906157d3565b96505b61103685856000818110610fbb57fe5b9050602002016020810190610fd09190614feb565b82610fdb5733610fdd565b305b6110307f00000000000000000000000000000000000000000000000000000000000000008989600081811061100e57fe5b90506020020160208101906110239190614feb565b8a8a6001818110610d8457fe5b8a612d8d565b73ffffffffffffffffffffffffffffffffffffffff83166001141561105d57339250611080565b73ffffffffffffffffffffffffffffffffffffffff831660021415611080573092505b600085857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106110b057fe5b90506020020160208101906110c59190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b81526004016110fd9190615a3c565b60206040518083038186803b15801561111557600080fd5b505afa158015611129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114d91906157d3565b905061118d868680806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250612f6b915050565b6112628187877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018181106111bf57fe5b90506020020160208101906111d49190614feb565b73ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b815260040161120c9190615a3c565b60206040518083038186803b15801561122457600080fd5b505afa158015611238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125c91906157d3565b90613270565b92508683101561129e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b505095945050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561133257600080fd5b505afa158015611346573d6000803e3d6000fd5b505050506040513d602081101561135c57600080fd5b50519050828110156113cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b801561146a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561144857600080fd5b505af115801561145c573d6000803e3d6000fd5b5050505061146a8282612a1b565b505050565b61147981336112a9565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000611549608083018035906114b99060608601614feb565b6114c960e0860160c08701614feb565b60405180604001604052808760200160208101906114e79190614feb565b6114f760608a0160408b016157a1565b61150460208b018b614feb565b604051602001611516939291906159aa565b60405160208183030381529060405281526020013373ffffffffffffffffffffffffffffffffffffffff1681525061278f565b90508160a001358111156108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c0f565b6115b3817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b61147957600080fd5b606083806115c86133cc565b1115610c3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f5472616e73616374696f6e20746f6f206f6c6400000000000000000000000000604482015290519081900360640190fd5b611640816000613280565b61158957600080fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000821180156116a2575060648211155b6116ab57600080fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561173457600080fd5b505afa158015611748573d6000803e3d6000fd5b505050506040513d602081101561175e57600080fd5b50519050848110156117d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e742057455448390000000000000000000000000000604482015290519081900360640190fd5b80156118a0577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561184a57600080fd5b505af115801561185e573d6000803e3d6000fd5b50505050600061271061187a85846133d090919063ffffffff16565b8161188157fe5b0490508015611894576118948382612a1b565b610bb685828403612a1b565b5050505050565b604080517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015290517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b15801561193c57600080fd5b505afa158015611950573d6000803e3d6000fd5b505050506040513d602081101561196657600080fd5b50511015610bb657610bb6868686868686610e35565b611987816000613280565b61199057600080fd5b6115b3817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b60608167ffffffffffffffff811180156119d357600080fd5b50604051908082528060200260200182016040528015611a0757816020015b60608152602001906001900390816119f25790505b50905060005b82811015611b0d5760008030868685818110611a2557fe5b9050602002810190611a379190615e41565b604051611a45929190615a10565b600060405180830381855af49150503d8060008114611a80576040519150601f19603f3d011682016040523d82523d6000602084013e611a85565b606091505b509150915081611aeb57604481511015611a9e57600080fd5b60048101905080806020019051810190611ab89190615433565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d9190615b7a565b80848481518110611af857fe5b60209081029190910101525050600101611a0d565b5092915050565b606060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1683604051611b5d9190615a20565b6000604051808303816000865af19150503d8060008114611b9a576040519150601f19603f3d011682016040523d82523d6000602084013e611b9f565b606091505b50925090508061083657604482511015611bb857600080fd5b60048201915081806020019051810190611ab89190615433565b600080600083604001511415611ca357600190506000611bf584600001516133f4565b50506040517f70a0823100000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff8216906370a0823190611c4c903090600401615a3c565b60206040518083038186803b158015611c6457600080fd5b505afa158015611c78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9c91906157d3565b6040850152505b600081611cb05733611cb2565b305b90505b6000611cc48560000151613425565b9050611d1d856040015182611cdd578660200151611cdf565b305b60006040518060400160405280611cf98b6000015161342d565b81526020018773ffffffffffffffffffffffffffffffffffffffff168152506125de565b60408601528015611d3d578451309250611d369061343c565b8552611d4a565b8460400151935050611d50565b50611cb5565b8360600151831015611d8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c7d565b5050919050565b604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201523060248201529051869173ffffffffffffffffffffffffffffffffffffffff89169163dd62ed3e91604480820192602092909190829003018186803b158015611e0a57600080fd5b505afa158015611e1e573d6000803e3d6000fd5b505050506040513d6020811015611e3457600080fd5b50511015610bb657610bb6868686868686612402565b7f000000000000000000000000000000000000000000000000000000000000000081565b61146a83338484611691565b6000818373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e307f00000000000000000000000000000000000000000000000000000000000000006040518363ffffffff1660e01b8152600401611ed8929190615a5d565b60206040518083038186803b158015611ef057600080fd5b505afa158015611f04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2891906157d3565b10611f3557506000612021565b611f5f837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b15611f6c57506001612021565b611f96837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b15611fa357506002612021565b611fae836000613280565b611fb757600080fd5b611fe1837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff613280565b15611fee57506003612021565b612018837ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe613280565b1561034f575060045b92915050565b60008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561209057600080fd5b505afa1580156120a4573d6000803e3d6000fd5b505050506040513d60208110156120ba57600080fd5b505190508281101561212d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b8015610c5557610c55848383613471565b60008211801561214f575060648211155b61215857600080fd5b60008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156121c157600080fd5b505afa1580156121d5573d6000803e3d6000fd5b505050506040513d60208110156121eb57600080fd5b505190508481101561225e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e73756666696369656e7420746f6b656e0000000000000000000000000000604482015290519081900360640190fd5b8015610bb657600061271061227383866133d0565b8161227a57fe5b049050801561228e5761228e878483613471565b61229b8786838503613471565b50505050505050565b6122af828233612027565b5050565b6000806122c1868685613646565b915091508362ffffff1681830312610bb6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c46565b6060610b2063219f5d1760e01b6040518060c001604052808560400135815260200161233d866000016020810190610a059190614feb565b8152602001612358866020016020810190610a059190614feb565b815260200185606001358152602001856080013581526020017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff815250604051602401610a9e9190615cb4565b6000806123b28584613859565b915091508362ffffff16818303126118a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615c46565b6122af82333084613ae1565b604080517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c48101839052905173ffffffffffffffffffffffffffffffffffffffff88169163d505accf9160e480830192600092919082900301818387803b158015610ed557600080fd5b60008413806124a95750600083135b6124b257600080fd5b60006124c08284018461564a565b905060008060006124d484600001516133f4565b9250925092506125067f0000000000000000000000000000000000000000000000000000000000000000848484613cbe565b5060008060008a13612547578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161089612578565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16108a5b915091508115612597576125928587602001513384612d8d565b610ee9565b85516125a290613425565b156125c75785516125b29061343c565b86526125c1813360008961278f565b50610ee9565b80600081905550610ee98487602001513384612d8d565b600073ffffffffffffffffffffffffffffffffffffffff8416600114156126075733935061262a565b73ffffffffffffffffffffffffffffffffffffffff84166002141561262a573093505b600080600061263c85600001516133f4565b9194509250905073ffffffffffffffffffffffffffffffffffffffff8083169084161060008061266d868686613cd4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856126938f613d12565b73ffffffffffffffffffffffffffffffffffffffff8e16156126b5578d6126db565b876126d45773fffd8963efd1fc6a506488495d951d5263988d256126db565b6401000276a45b8d6040516020016126ec9190615da6565b6040516020818303038152906040526040518663ffffffff1660e01b815260040161271b959493929190615a84565b6040805180830381600087803b15801561273457600080fd5b505af1158015612748573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061276c9190615395565b915091508261277b578161277d565b805b6000039b9a5050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8416600114156127b8573393506127db565b73ffffffffffffffffffffffffffffffffffffffff8416600214156127db573093505b60008060006127ed85600001516133f4565b9194509250905073ffffffffffffffffffffffffffffffffffffffff8084169083161060008061281e858786613cd4565b73ffffffffffffffffffffffffffffffffffffffff1663128acb088b856128448f613d12565b60000373ffffffffffffffffffffffffffffffffffffffff8e1615612869578d61288f565b876128885773fffd8963efd1fc6a506488495d951d5263988d2561288f565b6401000276a45b8d6040516020016128a09190615da6565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016128cf959493929190615a84565b6040805180830381600087803b1580156128e857600080fd5b505af11580156128fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129209190615395565b9150915060008361293557818360000361293b565b82826000035b909850905073ffffffffffffffffffffffffffffffffffffffff8a16612967578b811461296757600080fd5b50505050505050949350505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8316906370a08231906129cb903090600401615a3c565b60206040518083038186803b1580156129e357600080fd5b505afa1580156129f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2091906157d3565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff84169083906040518082805190602001908083835b60208310612a9257805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612a55565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612af4576040519150601f19603f3d011682016040523d82523d6000602084013e612af9565b606091505b505090508061146a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354450000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6060600282511015612b7a57600080fd5b815167ffffffffffffffff81118015612b9257600080fd5b50604051908082528060200260200182016040528015612bbc578160200160208202803683370190505b5090508281600183510381518110612bd057fe5b602090810291909101015281517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015b8015610c4057600080612c3d87866001860381518110612c1c57fe5b6020026020010151878681518110612c3057fe5b6020026020010151613d44565b91509150612c5f848481518110612c5057fe5b60200260200101518383613e2c565b846001850381518110612c6e57fe5b602090810291909101015250507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612c00565b6000806000612cb18585613f02565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148015612de85750804710155b15612f31577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015612e5557600080fd5b505af1158015612e69573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612eff57600080fd5b505af1158015612f13573d6000803e3d6000fd5b505050506040513d6020811015612f2957600080fd5b50610c559050565b73ffffffffffffffffffffffffffffffffffffffff8316301415612f5f57612f5a848383613471565b610c55565b610c5584848484613ae1565b60005b600183510381101561146a57600080848381518110612f8957fe5b6020026020010151858460010181518110612fa057fe5b6020026020010151915091506000612fb88383613f02565b5090506000612fe87f00000000000000000000000000000000000000000000000000000000000000008585612ca2565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561303657600080fd5b505afa15801561304a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306e91906156da565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808773ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16146130d05782846130d3565b83835b91509150613114828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b815260040161120c9190615a3c565b9550613121868383613fa7565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161461316557826000613169565b6000835b91509150600060028c51038a10613180578a6131c1565b6131c17f0000000000000000000000000000000000000000000000000000000000000000898e8d600201815181106131b457fe5b6020026020010151612ca2565b604080516000815260208101918290527f022c0d9f0000000000000000000000000000000000000000000000000000000090915290915073ffffffffffffffffffffffffffffffffffffffff87169063022c0d9f906132299086908690869060248101615e06565b600060405180830381600087803b15801561324357600080fd5b505af1158015613257573d6000803e3d6000fd5b50506001909b019a50612f6e9950505050505050505050565b8082038281111561202157600080fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1663095ea7b360e01b7f0000000000000000000000000000000000000000000000000000000000000000866040516024016132d7929190615ad6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516133609190615a20565b6000604051808303816000865af19150503d806000811461339d576040519150601f19603f3d011682016040523d82523d6000602084013e6133a2565b606091505b5091509150818015610e2c575080511580610e2c575080806020019051810190610e2c919061528d565b4290565b60008215806133eb575050818102818382816133e857fe5b04145b61202157600080fd5b60008080613402848261407d565b925061340f84601461417d565b905061341c84601761407d565b91509193909250565b516042111590565b6060610b20826000602b61426d565b8051606090610b209083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe90161426d565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251825160009485949389169392918291908083835b6020831061354657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613509565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146135a8576040519150601f19603f3d011682016040523d82523d6000602084013e6135ad565b606091505b50915091508180156135db5750805115806135db57508080602001905160208110156135d857600080fd5b50515b6118a057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f5354000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080835185511461365757600080fd5b6000855167ffffffffffffffff8111801561367157600080fd5b506040519080825280602002602001820160405280156136ab57816020015b613698614e34565b8152602001906001900390816136905790505b5090506000865167ffffffffffffffff811180156136c857600080fd5b5060405190808252806020026020018201604052801561370257816020015b6136ef614e34565b8152602001906001900390816136e75790505b50905060005b8751811015613832576000806137318a848151811061372357fe5b602002602001015189613859565b9150915061373e82614454565b85848151811061374a57fe5b60200260200101516000019060020b908160020b8152505061376b81614454565b84848151811061377757fe5b60200260200101516000019060020b908160020b8152505088838151811061379b57fe5b60200260200101518584815181106137af57fe5b6020026020010151602001906fffffffffffffffffffffffffffffffff1690816fffffffffffffffffffffffffffffffff16815250508883815181106137f157fe5b602002602001015184848151811061380557fe5b6020908102919091018101516fffffffffffffffffffffffffffffffff9092169101525050600101613708565b5061383c82614465565b60020b935061384a81614465565b60020b92505050935093915050565b6000806000806138688661454d565b90506000805b82811015613a865760008060006138848b6133f4565b9250925092506000613897848484613cd4565b905060008063ffffffff8d166138c0576138b083614578565b600291820b9350900b9050613962565b6138ca838e614810565b8160020b915050809250508273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561391b57600080fd5b505afa15801561392f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906139539190615715565b50505060029290920b93505050505b600189038714156139a3578473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161099506139b2565b6139ac8e61343c565b9d508597505b6000871580613a5357508673ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1610613a23578673ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1610613a53565b8573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16105b90508015613a68579b82019b9a81019a613a73565b828d039c50818c039b505b50506001909501945061386e9350505050565b5082613ad7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff850294507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff840293505b5050509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938a169392918291908083835b60208310613bbe57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101613b81565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613c20576040519150601f19603f3d011682016040523d82523d6000602084013e613c25565b606091505b5091509150818015613c53575080511580613c535750808060200190516020811015613c5057600080fd5b50515b610bb657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f5354460000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610e2c85613ccf868686614c41565b614cbe565b6000613d0a7f0000000000000000000000000000000000000000000000000000000000000000613d05868686614c41565b614cee565b949350505050565b60007f80000000000000000000000000000000000000000000000000000000000000008210613d4057600080fd5b5090565b6000806000613d538585613f02565b509050600080613d64888888612ca2565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613da957600080fd5b505afa158015613dbd573d6000803e3d6000fd5b505050506040513d6060811015613dd357600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff87811690841614613e1a578082613e1d565b81815b90999098509650505050505050565b6000808411613e9c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e54000000000000604482015290519081900360640190fd5b600083118015613eac5750600082115b613eb557600080fd5b6000613ecd6103e8613ec786886133d0565b906133d0565b90506000613ee16103e5613ec78689613270565b9050613ef86001828481613ef157fe5b0490614e24565b9695505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415613f3e57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610613f78578284613f7b565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff8216613fa057600080fd5b9250929050565b600080841161401757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b6000831180156140275750600082115b61403057600080fd5b600061403e856103e56133d0565b9050600061404c82856133d0565b9050600061406683614060886103e86133d0565b90614e24565b905080828161407157fe5b04979650505050505050565b6000818260140110156140f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561416457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b6000818260030110156141f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561426457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f0110156142e157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b82828401101561435257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b818301845110156143c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b6060821580156143e3576040519150600082526020820160405261444b565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561441c578051835260209283019201614404565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b80600281900b8114610b2357600080fd5b6000806000805b84518110156144fa5784818151811061448157fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff168582815181106144ab57fe5b60200260200101516000015160020b02830192508481815181106144cb57fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff1682019150808060010191505061446c565b5080828161450457fe5b05925060008212801561451f575080828161451b57fe5b0715155b15611d8e5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01919050565b5160177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec9091010490565b6000806000808473ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156145c457600080fd5b505afa1580156145d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906145fc9190615715565b50939750919550935050600161ffff84161191506146489050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615bd8565b6000808673ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b81526004016146849190615dee565b60806040518083038186803b15801561469c57600080fd5b505afa1580156146b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906146d491906158e0565b5050915091506146e26133cc565b63ffffffff168263ffffffff16146146fc57849550614807565b60008361ffff1660018561ffff168761ffff1601038161471857fe5b06905060008060008a73ffffffffffffffffffffffffffffffffffffffff1663252c09d7856040518263ffffffff1660e01b81526004016147599190615dfd565b60806040518083038186803b15801561477157600080fd5b505afa158015614785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906147a991906158e0565b93505092509250806147e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90615ba1565b82860363ffffffff811683870360060b816147fe57fe5b059a5050505050505b50505050915091565b60008063ffffffff831661488557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4250000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60408051600280825260608201835260009260208301908036833701905050905083816000815181106148b457fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106148dd57fe5b63ffffffff9092166020928302919091018201526040517f883bdbfd00000000000000000000000000000000000000000000000000000000815260048101828152835160248301528351600093849373ffffffffffffffffffffffffffffffffffffffff8b169363883bdbfd9388939192839260449091019185820191028083838b5b83811015614978578181015183820152602001614960565b505050509050019250505060006040518083038186803b15801561499b57600080fd5b505afa1580156149af573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160409081528110156149f657600080fd5b8101908080516040519392919084640100000000821115614a1657600080fd5b908301906020820185811115614a2b57600080fd5b8251866020820283011164010000000082111715614a4857600080fd5b82525081516020918201928201910280838360005b83811015614a75578181015183820152602001614a5d565b5050505090500160405260200180516040519392919084640100000000821115614a9e57600080fd5b908301906020820185811115614ab357600080fd5b8251866020820283011164010000000082111715614ad057600080fd5b82525081516020918201928201910280838360005b83811015614afd578181015183820152602001614ae5565b5050505090500160405250505091509150600082600081518110614b1d57fe5b602002602001015183600181518110614b3257fe5b6020026020010151039050600082600081518110614b4c57fe5b602002602001015183600181518110614b6157fe5b60200260200101510390508763ffffffff168260060b81614b7e57fe5b05965060008260060b128015614ba857508763ffffffff168260060b81614ba157fe5b0760060b15155b15614bd3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909601955b63ffffffff881673ffffffffffffffffffffffffffffffffffffffff0277ffffffffffffffffffffffffffffffffffffffff00000000602083901b1677ffffffffffffffffffffffffffffffffffffffffffffffff821681614c3157fe5b0496505050505050509250929050565b614c49614e4b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115614c81579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b6000614cca8383614cee565b90503373ffffffffffffffffffffffffffffffffffffffff82161461202157600080fd5b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610614d3057600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b8082018281101561202157600080fd5b604080518082019091526000808252602082015290565b604080516060810182526000808252602082018190529181019190915290565b8035610b2381615f52565b60008083601f840112614e87578182fd5b50813567ffffffffffffffff811115614e9e578182fd5b6020830191508360208083028501011115613fa057600080fd5b600082601f830112614ec8578081fd5b81356020614edd614ed883615ec8565b615ea4565b8281528181019085830183850287018401881015614ef9578586fd5b855b85811015614f345781356fffffffffffffffffffffffffffffffff81168114614f22578788fd5b84529284019290840190600101614efb565b5090979650505050505050565b80518015158114610b2357600080fd5b600082601f830112614f61578081fd5b8135614f6f614ed882615ee6565b818152846020838601011115614f83578283fd5b816020850160208301379081016020019190915292915050565b80516dffffffffffffffffffffffffffff81168114610b2357600080fd5b805161ffff81168114610b2357600080fd5b803562ffffff81168114610b2357600080fd5b8035610b2381615f83565b600060208284031215614ffc578081fd5b813561500781615f52565b9392505050565b60008060408385031215615020578081fd5b823561502b81615f52565b946020939093013593505050565b60008060006060848603121561504d578081fd5b833561505881615f52565b925060208401359150604084013561506f81615f52565b809150509250925092565b600080600080600060a08688031215615091578283fd5b853561509c81615f52565b94506020860135935060408601356150b381615f52565b92506060860135915060808601356150ca81615f52565b809150509295509295909350565b600080600080608085870312156150ed578182fd5b84356150f881615f52565b93506020850135925060408501359150606085013561511681615f52565b939692955090935050565b60008060008060008060c08789031215615139578384fd5b863561514481615f52565b95506020870135945060408701359350606087013561516281615f95565b9598949750929560808101359460a0909101359350915050565b6000806020838503121561518e578182fd5b823567ffffffffffffffff8111156151a4578283fd5b6151b085828601614e76565b90969095509350505050565b600080600080608085870312156151d1578182fd5b843567ffffffffffffffff808211156151e8578384fd5b818701915087601f8301126151fb578384fd5b8135602061520b614ed883615ec8565b82815281810190858301885b858110156152405761522e8e8684358b0101614f51565b84529284019290840190600101615217565b50909950505088013592505080821115615258578384fd5b5061526587828801614eb8565b93505061527460408601614fcd565b915061528260608601614fe0565b905092959194509250565b60006020828403121561529e578081fd5b61500782614f41565b6000806000604084860312156152bb578081fd5b83359250602084013567ffffffffffffffff8111156152d8578182fd5b6152e486828701614e76565b9497909650939450505050565b600060208284031215615302578081fd5b813567ffffffffffffffff811115615318578182fd5b613d0a84828501614f51565b600080600060608486031215615338578081fd5b833567ffffffffffffffff81111561534e578182fd5b61535a86828701614f51565b93505061536960208501614fcd565b9150604084013561506f81615f83565b60006020828403121561538a578081fd5b813561500781615f74565b600080604083850312156153a7578182fd5b505080516020909101519092909150565b600080600080606085870312156153cd578182fd5b8435935060208501359250604085013567ffffffffffffffff808211156153f2578384fd5b818701915087601f830112615405578384fd5b813581811115615413578485fd5b886020828501011115615424578485fd5b95989497505060200194505050565b600060208284031215615444578081fd5b815167ffffffffffffffff81111561545a578182fd5b8201601f8101841361546a578182fd5b8051615478614ed882615ee6565b81815285602083850101111561548c578384fd5b610e2c826020830160208601615f26565b6000602082840312156154ae578081fd5b813567ffffffffffffffff808211156154c5578283fd5b90830190608082860312156154d8578283fd5b6040516080810181811083821117156154ed57fe5b6040528235828111156154fe578485fd5b61550a87828601614f51565b8252506020830135915061551d82615f52565b816020820152604083013560408201526060830135606082015280935050505092915050565b600060e08284031215615554578081fd5b60405160e0810181811067ffffffffffffffff8211171561557157fe5b60405261557d83614e6b565b815261558b60208401614e6b565b602082015261559c60408401614fcd565b60408201526155ad60608401614e6b565b60608201526080830135608082015260a083013560a08201526155d260c08401614e6b565b60c08201529392505050565b6000602082840312156155ef578081fd5b813567ffffffffffffffff811115615605578182fd5b820160808185031215615007578182fd5b600060e08284031215610836578081fd5b600060a08284031215610836578081fd5b60006101008284031215610836578081fd5b60006020828403121561565b578081fd5b813567ffffffffffffffff80821115615672578283fd5b9083019060408286031215615685578283fd5b60405160408101818110838211171561569a57fe5b6040528235828111156156ab578485fd5b6156b787828601614f51565b825250602083013592506156ca83615f52565b6020810192909252509392505050565b6000806000606084860312156156ee578081fd5b6156f784614f9d565b925061570560208501614f9d565b9150604084015161506f81615f83565b600080600080600080600060e0888a03121561572f578485fd5b875161573a81615f52565b602089015190975061574b81615f74565b955061575960408901614fbb565b945061576760608901614fbb565b935061577560808901614fbb565b925060a088015161578581615f95565b915061579360c08901614f41565b905092959891949750929550565b6000602082840312156157b2578081fd5b61500782614fcd565b6000602082840312156157cc578081fd5b5035919050565b6000602082840312156157e4578081fd5b5051919050565b600080604083850312156157fd578182fd5b82359150602083013561580f81615f52565b809150509250929050565b6000806000806080858703121561582f578182fd5b84359350602085013561584181615f52565b925060408501359150606085013561511681615f52565b60008060006060848603121561586c578081fd5b8335925060208401359150604084013561506f81615f52565b60008060008060006080868803121561589c578283fd5b8535945060208601359350604086013567ffffffffffffffff8111156158c0578384fd5b6158cc88828901614e76565b90945092505060608601356150ca81615f52565b600080600080608085870312156158f5578182fd5b845161590081615f83565b8094505060208501518060060b8114615917578283fd5b604086015190935061592881615f52565b915061528260608601614f41565b73ffffffffffffffffffffffffffffffffffffffff169052565b60008151808452615968816020860160208601615f26565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60020b9052565b62ffffff169052565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b6000828483379101908152919050565b60008251615a32818460208701615f26565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152615acb60a0830184615950565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015615b6d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452615b5b858351615950565b94509285019290850190600101615b21565b5092979650505050505050565b6000602082526150076020830184615950565b6020810160058310615b9b57fe5b91905290565b60208082526003908201527f4f4e490000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526003908201527f4e454f0000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f546f6f206d756368207265717565737465640000000000000000000000000000604082015260600190565b60208082526002908201527f5444000000000000000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f546f6f206c6974746c6520726563656976656400000000000000000000000000604082015260600190565b600060c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b600061016082019050615d0c828451615936565b6020830151615d1e6020840182615936565b506040830151615d3160408401826159a1565b506060830151615d44606084018261599a565b506080830151615d57608084018261599a565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151615d9582850182615936565b505061014092830151919092015290565b600060208252825160406020840152615dc26060840182615950565b905073ffffffffffffffffffffffffffffffffffffffff60208501511660408401528091505092915050565b61ffff91909116815260200190565b90815260200190565b600085825284602083015273ffffffffffffffffffffffffffffffffffffffff8416604083015260806060830152613ef86080830184615950565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112615e75578283fd5b83018035915067ffffffffffffffff821115615e8f578283fd5b602001915036819003821315613fa057600080fd5b60405181810167ffffffffffffffff81118282101715615ec057fe5b604052919050565b600067ffffffffffffffff821115615edc57fe5b5060209081020190565b600067ffffffffffffffff821115615efa57fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b83811015615f41578181015183820152602001615f29565b83811115610c555750506000910152565b73ffffffffffffffffffffffffffffffffffffffff8116811461147957600080fd5b8060020b811461147957600080fd5b63ffffffff8116811461147957600080fd5b60ff8116811461147957600080fdfea164736f6c6343000706000a";
            class fG extends es.ContractFactory {
                constructor(e) {
                    super(fF, fU, e)
                }
                deploy(e, t, f, n, a) {
                    return super.deploy(e, t, f, n, a || {})
                }
                getDeployTransaction(e, t, f, n, a) {
                    return super.getDeployTransaction(e, t, f, n, a || {})
                }
                attach(e) {
                    return super.attach(e)
                }
                connect(e) {
                    return super.connect(e)
                }
                static createInterface() {
                    return new ei.vU(fF)
                }
                static connect(e, t) {
                    return new es.Contract(e, fF, t)
                }
            }
            fG.bytecode = fU, fG.abi = fF;
            class fq {
                constructor(e, t) {
                    this.multicall2Provider = e, this.chainId = t
                }
                async getApprovalType(e, t) {
                    var f, n;
                    let a = [
                            [e.currency.wrapped.address, e.quotient.toString()],
                            [t.currency.wrapped.address, t.quotient.toString()]
                        ],
                        i = await this.multicall2Provider.callSameFunctionOnContractWithMultipleParams({
                            address: Q(this.chainId),
                            contractInterface: fG.createInterface(),
                            functionName: "getApprovalType",
                            functionParams: a
                        });
                    if (!(null === (f = i.results[0]) || void 0 === f ? void 0 : f.success) || !(null === (n = i.results[1]) || void 0 === n ? void 0 : n.success)) throw S.info({
                        results: i.results
                    }, "Failed to get approval type from swap router for token in or token out"), Error("Failed to get approval type from swap router for token in or token out");
                    let {
                        result: r
                    } = i.results[0], {
                        result: s
                    } = i.results[1];
                    return {
                        approvalTokenIn: r[0],
                        approvalTokenOut: s[0]
                    }
                }
            }
            var f$ = f(78556),
                fV = f.n(f$);
            class fH {
                constructor(e, t, f = 6e3, n = 2) {
                    this.chainId = e, this.uri = t, this.timeout = f, this.retries = n
                }
                async getPools() {
                    S.info({
                        uri: this.uri
                    }, `About to get subgraph pools from URI ${this.uri}`);
                    let e = [];
                    return await tl()(async () => {
                        let t;
                        let f = new(fV()),
                            n = f.set(this.timeout).then(() => {
                                throw Error(`Timed out getting pools from subgraph: ${this.timeout}`)
                            });
                        try {
                            t = await Promise.race([w().get(this.uri), n])
                        } catch (e) {
                            throw e
                        } finally {
                            f.clear()
                        }
                        let {
                            data: a,
                            status: i
                        } = t;
                        if (200 != i) throw S.error({
                            response: t
                        }, `Unabled to get pools from ${this.uri}.`), Error(`Unable to get pools from ${this.uri}`);
                        S.info({
                            uri: this.uri,
                            chain: this.chainId
                        }, `Got subgraph pools from uri. Num: ${a.length}`), e = a
                    }, {
                        retries: this.retries,
                        onRetry: (e, t) => {
                            S.info({
                                err: e
                            }, `Failed to get pools from uri ${this.uri}. Retry attempt: ${t}`)
                        }
                    }), e
                }
            }
            class fj {
                constructor({
                    route: e,
                    percent: t
                }) {
                    this.route = e, this.percent = t
                }
                get protocol() {
                    return this.route.protocol
                }
                get tokenIn() {
                    return this.route.input
                }
                get tokenOut() {
                    return this.route.output
                }
            }
            class fW {
                constructor({
                    routes: e,
                    chainId: t,
                    tokenIn: f,
                    tokenOut: n,
                    protocolsCovered: a,
                    blockNumber: i,
                    tradeType: r,
                    originalAmount: s,
                    blocksToLive: o = 0
                }) {
                    this.routes = e, this.chainId = t, this.tokenIn = f, this.tokenOut = n, this.protocolsCovered = a, this.blockNumber = i, this.tradeType = r, this.originalAmount = s, this.blocksToLive = o
                }
                static fromRoutesWithValidQuotes(e, t, f, n, a, i, r, s) {
                    if (0 == e.length) return;
                    let o = M().map(e, e => new fj({
                        route: e.route,
                        percent: e.percent
                    }));
                    return new fW({
                        routes: o,
                        chainId: t,
                        tokenIn: f,
                        tokenOut: n,
                        protocolsCovered: a,
                        blockNumber: i,
                        tradeType: r,
                        originalAmount: s
                    })
                }
                notExpired(e) {
                    return e - this.blockNumber <= this.blocksToLive
                }
            }(u = T || (T = {})).Livemode = "livemode", u.Darkmode = "darkmode", u.Tapcompare = "tapcompare";
            class fQ {
                constructor(e, t, f) {
                    this.chainId = e, this.poolProvider = t, this.cache = f, this.POOL_KEY = (e, t) => `pool-${e}-${t}`
                }
                async getPools(e, t) {
                    let f = new Set,
                        n = [],
                        a = [],
                        i = {},
                        r = await (null == t ? void 0 : t.blockNumber);
                    for (let [t, s] of e) {
                        let {
                            poolAddress: e,
                            token0: o,
                            token1: d
                        } = this.getPoolAddress(t, s);
                        if (f.has(e)) continue;
                        f.add(e);
                        let u = await this.cache.get(this.POOL_KEY(this.chainId, e));
                        if (u && (!r || r && u.block == r)) {
                            i[e] = u.pair;
                            continue
                        }
                        n.push([o, d]), a.push(e)
                    }
                    if (S.info({
                            poolsFound: M().map(Object.values(i), e => e.token0.symbol + " " + e.token1.symbol),
                            poolsToGetTokenPairs: M().map(n, e => e[0].symbol + " " + e[1].symbol)
                        }, `Found ${Object.keys(i).length} V2 pools already in local cache for block ${r}. About to get reserves for ${n.length} pools.`), a.length > 0) {
                        let e = await this.poolProvider.getPools(n, t);
                        for (let t of a) {
                            let f = e.getPoolByAddress(t);
                            f && (i[t] = f, await this.cache.set(this.POOL_KEY(this.chainId, t), {
                                pair: f,
                                block: r
                            }))
                        }
                    }
                    return {
                        getPool: (e, t) => {
                            let {
                                poolAddress: f
                            } = this.getPoolAddress(e, t);
                            return i[f]
                        },
                        getPoolByAddress: e => i[e],
                        getAllPools: () => Object.values(i)
                    }
                }
                getPoolAddress(e, t) {
                    return this.poolProvider.getPoolAddress(e, t)
                }
            }
            class fY {
                constructor(e, t, f) {
                    this.chainId = e, this.subgraphProvider = t, this.cache = f, this.SUBGRAPH_KEY = e => `subgraph-pools-v2-${e}`
                }
                async getPools() {
                    let e = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));
                    if (e) return e;
                    let t = await this.subgraphProvider.getPools();
                    return await this.cache.set(this.SUBGRAPH_KEY(this.chainId), t), t
                }
            }
            class fX {
                constructor() {}
                async getQuotesManyExactIn(e, t) {
                    return this.getQuotes(e, t, E.TradeType.EXACT_INPUT)
                }
                async getQuotesManyExactOut(e, t) {
                    return this.getQuotes(e, t, E.TradeType.EXACT_OUTPUT)
                }
                async getQuotes(e, t, f) {
                    let n = [],
                        a = [];
                    for (let i of t) {
                        let t = [],
                            r = 0,
                            s = 0;
                        for (let n of e) try {
                            if (f == E.TradeType.EXACT_INPUT) {
                                let e = n.wrapped;
                                for (let t of i.pairs) {
                                    let [f] = t.getOutputAmount(e);
                                    e = f
                                }
                                t.push({
                                    amount: n,
                                    quote: tr.O$.from(e.quotient.toString())
                                })
                            } else {
                                let e = n.wrapped;
                                for (let t = i.pairs.length - 1; t >= 0; t--) {
                                    let f = i.pairs[t];
                                    [e] = f.getInputAmount(e)
                                }
                                t.push({
                                    amount: n,
                                    quote: tr.O$.from(e.quotient.toString())
                                })
                            }
                        } catch (e) {
                            if (e instanceof et.InsufficientInputAmountError) r += 1, t.push({
                                amount: n,
                                quote: null
                            });
                            else if (e instanceof et.InsufficientReservesError) s += 1, t.push({
                                amount: n,
                                quote: null
                            });
                            else throw e
                        }(r > 0 || s > 0) && a.push(`${[ef(i)]} Input: ${r} Reserves: ${s} }`), n.push([i, t])
                    }
                    return a.length > 0 && S.info({
                        debugStrs: a
                    }, "Failed quotes for V2 routes"), {
                        routesWithQuotes: n
                    }
                }
            }
            let fz = {
                [E.ChainId.MAINNET]: [G[E.ChainId.MAINNET], ep, eu, ec, el],
                [E.ChainId.GOERLI]: [G[E.ChainId.GOERLI]],
                [E.ChainId.SEPOLIA]: [G[E.ChainId.SEPOLIA]],
                [E.ChainId.OPTIMISM]: [],
                [E.ChainId.ARBITRUM_ONE]: [],
                [E.ChainId.ARBITRUM_GOERLI]: [],
                [E.ChainId.OPTIMISM_GOERLI]: [],
                [E.ChainId.POLYGON]: [],
                [E.ChainId.POLYGON_MUMBAI]: [],
                [E.ChainId.CELO]: [],
                [E.ChainId.CELO_ALFAJORES]: [],
                [E.ChainId.GNOSIS]: [],
                [E.ChainId.MOONBEAM]: [],
                [E.ChainId.BNB]: [],
                [E.ChainId.AVALANCHE]: [],
                [E.ChainId.BASE_GOERLI]: [],
                [E.ChainId.BASE]: []
            };
            class fK {
                constructor(e) {
                    this.chainId = e
                }
                async getPools(e, t) {
                    S.info("In static subgraph provider for V2");
                    let f = fz[this.chainId],
                        n = M().flatMap(f, e => f.map(t => [e, t]));
                    e && t && n.push([e, t], ...f.map(t => [e, t]), ...f.map(e => [t, e]));
                    let a = M()(n).filter(e => !!(e[0] && e[1])).filter(([e, t]) => e.address !== t.address && !e.equals(t)).value(),
                        i = new Set,
                        r = M()(a).map(([e, t]) => {
                            let f = et.Pair.getAddress(e, t);
                            if (i.has(f)) return;
                            i.add(f);
                            let [n, a] = e.sortsBefore(t) ? [e, t] : [t, e];
                            return {
                                id: f,
                                liquidity: "100",
                                token0: {
                                    id: n.address
                                },
                                token1: {
                                    id: a.address
                                },
                                supply: 100,
                                reserve: 100,
                                reserveUSD: 100
                            }
                        }).compact().value();
                    return r
                }
            }
            f(10056), E.ChainId.MAINNET;
            class fJ {
                constructor(e) {
                    this.fallbacks = e
                }
                async getPools(e, t, f) {
                    for (let n = 0; n < this.fallbacks.length; n++) {
                        let a = this.fallbacks[n];
                        try {
                            let n = await a.getPools(e, t, f);
                            return n
                        } catch (e) {
                            S.info(`Failed to get subgraph pools for V2 from fallback #${n}`)
                        }
                    }
                    throw Error("Failed to get subgraph pools from any providers")
                }
            }
            class fZ {
                constructor(e, t, f) {
                    this.chainId = e, this.poolProvider = t, this.cache = f, this.POOL_KEY = (e, t) => `pool-${e}-${t}`
                }
                async getPools(e, t) {
                    let f = new Set,
                        n = [],
                        a = [],
                        i = {};
                    for (let [t, r, s] of e) {
                        let {
                            poolAddress: e,
                            token0: o,
                            token1: d
                        } = this.getPoolAddress(t, r, s);
                        if (f.has(e)) continue;
                        f.add(e);
                        let u = await this.cache.get(this.POOL_KEY(this.chainId, e));
                        if (u) {
                            R.putMetric("V3_INMEMORY_CACHING_POOL_HIT_IN_MEMORY", 1, c.None), i[e] = u;
                            continue
                        }
                        R.putMetric("V3_INMEMORY_CACHING_POOL_MISS_NOT_IN_MEMORY", 1, c.None), n.push([o, d, s]), a.push(e)
                    }
                    if (S.info({
                            poolsFound: M().map(Object.values(i), e => `${e.token0.symbol} ${e.token1.symbol} ${e.fee}`),
                            poolsToGetTokenPairs: M().map(n, e => `${e[0].symbol} ${e[1].symbol} ${e[2]}`)
                        }, `Found ${Object.keys(i).length} V3 pools already in local cache. About to get liquidity and slot0s for ${n.length} pools.`), a.length > 0) {
                        let e = await this.poolProvider.getPools(n, t);
                        for (let t of a) {
                            let f = e.getPoolByAddress(t);
                            f && (i[t] = f, await this.cache.set(this.POOL_KEY(this.chainId, t), f))
                        }
                    }
                    return {
                        getPool: (e, t, f) => {
                            let {
                                poolAddress: n
                            } = this.getPoolAddress(e, t, f);
                            return i[n]
                        },
                        getPoolByAddress: e => i[e],
                        getAllPools: () => Object.values(i)
                    }
                }
                getPoolAddress(e, t, f) {
                    return this.poolProvider.getPoolAddress(e, t, f)
                }
            }
            class f0 {
                constructor(e, t, f) {
                    this.chainId = e, this.subgraphProvider = t, this.cache = f, this.SUBGRAPH_KEY = e => `subgraph-pools-${e}`
                }
                async getPools() {
                    let e = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));
                    if (e) return e;
                    let t = await this.subgraphProvider.getPools();
                    return await this.cache.set(this.SUBGRAPH_KEY(this.chainId), t), t
                }
            }
            let f1 = {
                [E.ChainId.MAINNET]: [G[E.ChainId.MAINNET], ep, eu, ec, el],
                [E.ChainId.GOERLI]: [G[E.ChainId.GOERLI], eg, eI, ev, eC],
                [E.ChainId.SEPOLIA]: [G[E.ChainId.SEPOLIA], em],
                [E.ChainId.OPTIMISM]: [G[E.ChainId.OPTIMISM], eE, eO, eA, eS, ek],
                [E.ChainId.ARBITRUM_ONE]: [G[E.ChainId.ARBITRUM_ONE], eB, eL, eR, eD, e_],
                [E.ChainId.ARBITRUM_GOERLI]: [G[E.ChainId.ARBITRUM_GOERLI], eN],
                [E.ChainId.OPTIMISM_GOERLI]: [G[E.ChainId.OPTIMISM_GOERLI], ew, ex, eP, eM],
                [E.ChainId.POLYGON]: [eG, eU, eF],
                [E.ChainId.POLYGON_MUMBAI]: [e$, G[E.ChainId.POLYGON_MUMBAI], eq],
                [E.ChainId.CELO]: [eX, eK, eJ, ez],
                [E.ChainId.CELO_ALFAJORES]: [eZ, e1, e5, e0],
                [E.ChainId.GNOSIS]: [G[E.ChainId.GNOSIS], e4, e9, e3],
                [E.ChainId.BNB]: [G[E.ChainId.BNB], eH, ej, eQ, eY, eV, eW],
                [E.ChainId.AVALANCHE]: [G[E.ChainId.AVALANCHE], e8, e6],
                [E.ChainId.MOONBEAM]: [G[E.ChainId.MOONBEAM], tt, e7, tf],
                [E.ChainId.BASE_GOERLI]: [G[E.ChainId.BASE_GOERLI]],
                [E.ChainId.BASE]: [G[E.ChainId.BASE], e2]
            };
            class f5 {
                constructor(e, t) {
                    this.chainId = e, this.poolProvider = t
                }
                async getPools(e, t, f) {
                    S.info("In static subgraph provider for V3");
                    let n = f1[this.chainId],
                        a = M().flatMap(n, e => n.map(t => [e, t]));
                    e && t && a.push([e, t], ...n.map(t => [e, t]), ...n.map(e => [t, e]));
                    let i = M()(a).filter(e => !!(e[0] && e[1])).filter(([e, t]) => e.address !== t.address && !e.equals(t)).flatMap(([e, t]) => [
                        [e, t, B.FeeAmount.LOWEST],
                        [e, t, B.FeeAmount.LOW],
                        [e, t, B.FeeAmount.MEDIUM],
                        [e, t, B.FeeAmount.HIGH]
                    ]).value();
                    S.info(`V3 Static subgraph provider about to get ${i.length} pools on-chain`);
                    let r = await this.poolProvider.getPools(i, f),
                        s = r.getAllPools(),
                        o = new Set,
                        d = M()(s).map(e => {
                            let {
                                token0: t,
                                token1: f,
                                fee: n,
                                liquidity: a
                            } = e, i = B.Pool.getAddress(e.token0, e.token1, e.fee);
                            if (o.has(i)) return;
                            o.add(i);
                            let r = z().toNumber(a);
                            return {
                                id: i,
                                feeTier: Z(n),
                                liquidity: a.toString(),
                                token0: {
                                    id: t.address
                                },
                                token1: {
                                    id: f.address
                                },
                                tvlETH: r,
                                tvlUSD: r
                            }
                        }).compact().value();
                    return d
                }
            }
            E.ChainId.MAINNET, E.ChainId.OPTIMISM, E.ChainId.ARBITRUM_ONE, E.ChainId.POLYGON, E.ChainId.CELO, E.ChainId.GOERLI, E.ChainId.BNB, E.ChainId.AVALANCHE, E.ChainId.BASE;
            class f6 {
                constructor(e) {
                    this.fallbacks = e
                }
                async getPools(e, t, f) {
                    for (let n = 0; n < this.fallbacks.length; n++) {
                        let a = this.fallbacks[n];
                        try {
                            let n = await a.getPools(e, t, f);
                            return n
                        } catch (e) {
                            S.info(`Failed to get subgraph pools for V3 from fallback #${n}`)
                        }
                    }
                    throw Error("Failed to get subgraph pools from any providers")
                }
            }
            var f8 = f(45503);

            function f2(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var f = 0, n = Array(t); f < t; f++) n[f] = e[f];
                return n
            }

            function f3(e, t) {
                var f = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), f.push.apply(f, n)
                }
                return f
            }

            function f9(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var f = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f3(Object(f), !0).forEach(function(t) {
                        (0, I.Z)(e, t, f[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(f)) : f3(Object(f)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(f, t))
                    })
                }
                return e
            }
            f(2265), f(67133), f(16206), f(94706), f(76548), f(3897), f(14251), f(45735), f(71209), f(73993), f(54887), f(34001), f(97284), f(20400), f(63895), f(58996), f(74002), f(2336), f(36649), f(75298), f(66493), f(44896), f(41187), f(75163), f(78741), f(81023), f(50625);
            var f4 = Object.values(E.ChainId).filter(function(e) {
                    return Number.isInteger(e)
                }),
                f7 = new WeakMap;

            function ne() {
                return (ne = (0, g.Z)(C().mark(function e(t, f, n) {
                    var a, i, r, s, o, d, u, c, l, p, h, b;
                    return C().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = t.tradeType, i = t.tokenIn, r = t.tokenOut, s = t.amount, o = Object.values(f8.S).includes(i.address), d = Object.values(f8.S).includes(r.address), u = o ? (0, f8.n)(i.chainId) : new E.Token(i.chainId, i.address, i.decimals, i.symbol), c = d ? (0, f8.n)(r.chainId) : new E.Token(r.chainId, r.address, r.decimals, r.symbol), l = (0, f8.i)(a) ? u : c, p = (0, f8.i)(a) ? c : u, h = E.CurrencyAmount.fromRawAmount(l, z().BigInt(null != s ? s : "1")), e.next = 10, f.route(h, p, a, void 0, n);
                            case 10:
                                if (b = e.sent, s) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return", {
                                    state: f8.Q.INITIALIZED
                                });
                            case 13:
                                if (b) {
                                    e.next = 15;
                                    break
                                }
                                return e.abrupt("return", {
                                    state: f8.Q.NOT_FOUND
                                });
                            case 15:
                                return e.abrupt("return", function(e) {
                                    var t, f = e.quote,
                                        n = e.quoteGasAdjusted,
                                        a = e.route,
                                        i = e.routeString,
                                        r = e.estimatedGasUsed,
                                        s = e.estimatedGasUsedQuoteToken,
                                        o = e.estimatedGasUsedUSD,
                                        d = e.gasPriceWei,
                                        u = e.methodParameters,
                                        c = e.blockNumber,
                                        l = e.trade,
                                        p = l.tradeType,
                                        h = l.inputAmount,
                                        b = l.outputAmount,
                                        y = [],
                                        m = function(e, t) {
                                            var f = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!f) {
                                                if (Array.isArray(e) || (f = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return f2(e, t);
                                                            var f = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === f && e.constructor && (f = e.constructor.name), "Map" === f || "Set" === f) return Array.from(e);
                                                            if ("Arguments" === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)) return f2(e, t)
                                                        }
                                                    }(e))) {
                                                    f && (e = f);
                                                    var n = 0,
                                                        a = function() {};
                                                    return {
                                                        s: a,
                                                        n: function() {
                                                            return n >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[n++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: a
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var i, r = !0,
                                                s = !1;
                                            return {
                                                s: function() {
                                                    f = f.call(e)
                                                },
                                                n: function() {
                                                    var e = f.next();
                                                    return r = e.done, e
                                                },
                                                e: function(e) {
                                                    s = !0, i = e
                                                },
                                                f: function() {
                                                    try {
                                                        r || null == f.return || f.return()
                                                    } finally {
                                                        if (s) throw i
                                                    }
                                                }
                                            }
                                        }(a);
                                    try {
                                        for (m.s(); !(t = m.n()).done;) {
                                            var T = t.value,
                                                I = T.amount,
                                                g = T.quote,
                                                v = T.tokenPath;
                                            if (T.protocol === ee.Protocol.V3) {
                                                for (var C = T.route.pools, E = [], A = 0; A < C.length; A++) {
                                                    var S = C[A],
                                                        O = v[A],
                                                        k = v[A + 1],
                                                        w = void 0;
                                                    0 === A && (w = (0, f8.i)(p) ? I.quotient.toString() : g.quotient.toString());
                                                    var P = void 0;
                                                    A === C.length - 1 && (P = (0, f8.i)(p) ? g.quotient.toString() : I.quotient.toString()), E.push({
                                                        type: "v3-pool",
                                                        tokenIn: {
                                                            chainId: O.chainId,
                                                            decimals: O.decimals,
                                                            address: O.address,
                                                            symbol: O.symbol
                                                        },
                                                        tokenOut: {
                                                            chainId: k.chainId,
                                                            decimals: k.decimals,
                                                            address: k.address,
                                                            symbol: k.symbol
                                                        },
                                                        fee: S.fee.toString(),
                                                        liquidity: S.liquidity.toString(),
                                                        sqrtRatioX96: S.sqrtRatioX96.toString(),
                                                        tickCurrent: S.tickCurrent.toString(),
                                                        amountIn: w,
                                                        amountOut: P
                                                    })
                                                }
                                                y.push(E)
                                            } else if (T.protocol === ee.Protocol.V2) {
                                                for (var M = T.route.pairs, x = [], R = 0; R < M.length; R++) {
                                                    var D = M[R],
                                                        B = v[R],
                                                        L = v[R + 1],
                                                        _ = void 0;
                                                    0 === R && (_ = (0, f8.i)(p) ? I.quotient.toString() : g.quotient.toString());
                                                    var N = void 0;
                                                    R === M.length - 1 && (N = (0, f8.i)(p) ? g.quotient.toString() : I.quotient.toString());
                                                    var F = D.reserve0,
                                                        U = D.reserve1;
                                                    x.push({
                                                        type: "v2-pool",
                                                        tokenIn: {
                                                            chainId: B.chainId,
                                                            decimals: B.decimals,
                                                            address: B.address,
                                                            symbol: B.symbol
                                                        },
                                                        tokenOut: {
                                                            chainId: L.chainId,
                                                            decimals: L.decimals,
                                                            address: L.address,
                                                            symbol: L.symbol
                                                        },
                                                        reserve0: {
                                                            token: {
                                                                chainId: F.currency.wrapped.chainId,
                                                                decimals: F.currency.wrapped.decimals,
                                                                address: F.currency.wrapped.address,
                                                                symbol: F.currency.wrapped.symbol
                                                            },
                                                            quotient: F.quotient.toString()
                                                        },
                                                        reserve1: {
                                                            token: {
                                                                chainId: U.currency.wrapped.chainId,
                                                                decimals: U.currency.wrapped.decimals,
                                                                address: U.currency.wrapped.address,
                                                                symbol: U.currency.wrapped.symbol
                                                            },
                                                            quotient: U.quotient.toString()
                                                        },
                                                        amountIn: _,
                                                        amountOut: N
                                                    })
                                                }
                                                y.push(x)
                                            }
                                        }
                                    } catch (e) {
                                        m.e(e)
                                    } finally {
                                        m.f()
                                    }
                                    var G = (0, f8.i)(p) ? h : b;
                                    return {
                                        state: f8.Q.SUCCESS,
                                        data: {
                                            methodParameters: u,
                                            blockNumber: c.toString(),
                                            amount: G.quotient.toString(),
                                            amountDecimals: G.toExact(),
                                            quote: f.quotient.toString(),
                                            quoteDecimals: f.toExact(),
                                            quoteGasAdjusted: n.quotient.toString(),
                                            quoteGasAdjustedDecimals: n.toExact(),
                                            gasUseEstimateQuote: s.quotient.toString(),
                                            gasUseEstimateQuoteDecimals: s.toExact(),
                                            gasUseEstimate: r.toString(),
                                            gasUseEstimateUSD: o.toExact(),
                                            gasPriceWei: d.toString(),
                                            route: y,
                                            routeString: i
                                        }
                                    }
                                }(f9(f9({}, b), {}, {
                                    routeString: en(b.route)
                                })));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function nt(e, t) {
                return nf.apply(this, arguments)
            }

            function nf() {
                return (nf = (0, g.Z)(C().mark(function e(t, f) {
                    var n, a, i, r, s, o, d, u, c, l, p, h;
                    return C().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                var b;
                                if (n = t.tokenInAddress, a = t.tokenInChainId, i = t.tokenInDecimals, r = t.tokenInSymbol, s = t.tokenOutAddress, o = t.tokenOutChainId, d = t.tokenOutDecimals, u = t.tokenOutSymbol, c = t.amount, l = t.tradeType, p = t.provider, (b = a) && f4.includes(b)) {
                                    e.next = 3;
                                    break
                                }
                                throw Error("Router does not support this token's chain (chainId: ".concat(a, ")."));
                            case 3:
                                return h = function(e, t) {
                                    var f, n, a, i = f7.get(t) || {},
                                        r = i[e];
                                    if (r) return r;
                                    e !== E.ChainId.MAINNET && (f = new fK(e)), [E.ChainId.POLYGON, E.ChainId.POLYGON_MUMBAI].includes(e) && (a = new fS(e, t, 375e3), n = new fN(e, t, a, {
                                        retries: 2,
                                        minTimeout: 100,
                                        maxTimeout: 1e3
                                    }, {
                                        multicallChunk: 10,
                                        gasLimitPerCall: 5e6,
                                        quoteMinSuccessRate: .1
                                    }, {
                                        gasLimitOverride: 5e6,
                                        multicallChunk: 5
                                    }, {
                                        gasLimitOverride: 625e4,
                                        multicallChunk: 4
                                    }));
                                    var s = new fh({
                                        chainId: e,
                                        provider: t,
                                        v2SubgraphProvider: f,
                                        multicall2Provider: a,
                                        onChainQuoteProvider: n
                                    });
                                    return i[e] = s, f7.set(t, i), s
                                }(a, p), e.abrupt("return", function(e, t, f) {
                                    return ne.apply(this, arguments)
                                }({
                                    tradeType: l,
                                    tokenIn: {
                                        address: n,
                                        chainId: a,
                                        decimals: i,
                                        symbol: r
                                    },
                                    tokenOut: {
                                        address: s,
                                        chainId: o,
                                        decimals: d,
                                        symbol: u
                                    },
                                    amount: c
                                }, h, f));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
        },
        38148: function(e, t, f) {
            var n = f(87793);
            e.exports = function(e, t) {
                return new Promise(function(f, a) {
                    var i, r = t || {};

                    function s(e) {
                        a(e || Error("Aborted"))
                    }

                    function o(e, t) {
                        if (e.bail) {
                            s(e);
                            return
                        }
                        i.retry(e) ? r.onRetry && r.onRetry(e, t) : a(i.mainError())
                    }
                    "randomize" in r || (r.randomize = !0), (i = n.operation(r)).attempt(function(t) {
                        var n;
                        try {
                            n = e(s, t)
                        } catch (e) {
                            o(e, t);
                            return
                        }
                        Promise.resolve(n).then(f).catch(function(e) {
                            o(e, t)
                        })
                    })
                })
            }
        },
        78556: function(e, t, f) {
            let {
                promiseFinally: n,
                toError: a
            } = f(79516);
            e.exports = class e {
                static set(t, f) {
                    return new e().set(t, f)
                }
                static wrap(t, f, n) {
                    return new e().wrap(t, f, n)
                }
                constructor() {
                    this._id = null, this._delay = null
                }
                get id() {
                    return this._id
                }
                get delay() {
                    return this._delay
                }
                set(e, t = "") {
                    return new Promise((f, n) => {
                        this.clear();
                        let i = t ? () => n(a(t)) : f;
                        this._id = setTimeout(i, e), this._delay = e
                    })
                }
                wrap(e, t, f = "") {
                    let a = n(e, () => this.clear()),
                        i = this.set(t, f);
                    return Promise.race([a, i])
                }
                clear() {
                    this._id && clearTimeout(this._id)
                }
            }
        },
        79516: function(e, t) {
            t.promiseFinally = (e, t) => Promise.resolve(e).then(e => (t(), e), e => (t(), Promise.reject(e))), t.toError = e => "string" == typeof(e = "function" == typeof e ? e() : e) ? Error(e) : e
        },
        81630: function(e, t, f) {
            e.exports = f(91028)
        },
        60323: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = f(54420),
                i = f(87638),
                r = f(7832),
                s = f(36738),
                o = f(66802),
                d = f(86802),
                u = f(71195);
            e.exports = function(e) {
                return new Promise(function(t, f) {
                    var c = e.data,
                        l = e.headers,
                        p = e.responseType;
                    n.isFormData(c) && delete l["Content-Type"];
                    var h = new XMLHttpRequest;
                    if (e.auth) {
                        var b = e.auth.username || "",
                            y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        l.Authorization = "Basic " + btoa(b + ":" + y)
                    }
                    var m = s(e.baseURL, e.url);

                    function T() {
                        if (h) {
                            var n = "getAllResponseHeaders" in h ? o(h.getAllResponseHeaders()) : null,
                                i = {
                                    data: p && "text" !== p && "json" !== p ? h.response : h.responseText,
                                    status: h.status,
                                    statusText: h.statusText,
                                    headers: n,
                                    config: e,
                                    request: h
                                };
                            a(t, f, i), h = null
                        }
                    }
                    if (h.open(e.method.toUpperCase(), r(m, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, "onloadend" in h ? h.onloadend = T : h.onreadystatechange = function() {
                            h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:")) && setTimeout(T)
                        }, h.onabort = function() {
                            h && (f(u("Request aborted", e, "ECONNABORTED", h)), h = null)
                        }, h.onerror = function() {
                            f(u("Network Error", e, null, h)), h = null
                        }, h.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), f(u(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", h)), h = null
                        }, n.isStandardBrowserEnv()) {
                        var I = (e.withCredentials || d(m)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                        I && (l[e.xsrfHeaderName] = I)
                    }
                    "setRequestHeader" in h && n.forEach(l, function(e, t) {
                        void 0 === c && "content-type" === t.toLowerCase() ? delete l[t] : h.setRequestHeader(t, e)
                    }), n.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials), p && "json" !== p && (h.responseType = e.responseType), "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                        h && (h.abort(), f(e), h = null)
                    }), c || (c = null), h.send(c)
                })
            }
        },
        91028: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = f(46875),
                i = f(2761),
                r = f(40872);

            function s(e) {
                var t = new i(e),
                    f = a(i.prototype.request, t);
                return n.extend(f, i.prototype, t), n.extend(f, t), f
            }
            var o = s(f(66043));
            o.Axios = i, o.create = function(e) {
                return s(r(o.defaults, e))
            }, o.Cancel = f(45134), o.CancelToken = f(23947), o.isCancel = f(13704), o.all = function(e) {
                return Promise.all(e)
            }, o.spread = f(85332), o.isAxiosError = f(92466), e.exports = o, e.exports.default = o
        },
        45134: function(e) {
            "use strict";

            function t(e) {
                this.message = e
            }
            t.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, t.prototype.__CANCEL__ = !0, e.exports = t
        },
        23947: function(e, t, f) {
            "use strict";
            var n = f(45134);

            function a(e) {
                if ("function" != typeof e) throw TypeError("executor must be a function.");
                this.promise = new Promise(function(e) {
                    t = e
                });
                var t, f = this;
                e(function(e) {
                    f.reason || (f.reason = new n(e), t(f.reason))
                })
            }
            a.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, a.source = function() {
                var e;
                return {
                    token: new a(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }, e.exports = a
        },
        13704: function(e) {
            "use strict";
            e.exports = function(e) {
                return !!(e && e.__CANCEL__)
            }
        },
        2761: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = f(7832),
                i = f(32715),
                r = f(1408),
                s = f(40872),
                o = f(76783),
                d = o.validators;

            function u(e) {
                this.defaults = e, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            u.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t, f = e.transitional;
                void 0 !== f && o.assertOptions(f, {
                    silentJSONParsing: d.transitional(d.boolean, "1.0.0"),
                    forcedJSONParsing: d.transitional(d.boolean, "1.0.0"),
                    clarifyTimeoutError: d.transitional(d.boolean, "1.0.0")
                }, !1);
                var n = [],
                    a = !0;
                this.interceptors.request.forEach(function(t) {
                    ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (a = a && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                });
                var i = [];
                if (this.interceptors.response.forEach(function(e) {
                        i.push(e.fulfilled, e.rejected)
                    }), !a) {
                    var u = [r, void 0];
                    for (Array.prototype.unshift.apply(u, n), u = u.concat(i), t = Promise.resolve(e); u.length;) t = t.then(u.shift(), u.shift());
                    return t
                }
                for (var c = e; n.length;) {
                    var l = n.shift(),
                        p = n.shift();
                    try {
                        c = l(c)
                    } catch (e) {
                        p(e);
                        break
                    }
                }
                try {
                    t = r(c)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (; i.length;) t = t.then(i.shift(), i.shift());
                return t
            }, u.prototype.getUri = function(e) {
                return a((e = s(this.defaults, e)).url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, n.forEach(["delete", "get", "head", "options"], function(e) {
                u.prototype[e] = function(t, f) {
                    return this.request(s(f || {}, {
                        method: e,
                        url: t,
                        data: (f || {}).data
                    }))
                }
            }), n.forEach(["post", "put", "patch"], function(e) {
                u.prototype[e] = function(t, f, n) {
                    return this.request(s(n || {}, {
                        method: e,
                        url: t,
                        data: f
                    }))
                }
            }), e.exports = u
        },
        32715: function(e, t, f) {
            "use strict";
            var n = f(82569);

            function a() {
                this.handlers = []
            }
            a.prototype.use = function(e, t, f) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!f && f.synchronous,
                    runWhen: f ? f.runWhen : null
                }), this.handlers.length - 1
            }, a.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, a.prototype.forEach = function(e) {
                n.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }, e.exports = a
        },
        36738: function(e, t, f) {
            "use strict";
            var n = f(59842),
                a = f(62331);
            e.exports = function(e, t) {
                return e && !n(t) ? a(e, t) : t
            }
        },
        71195: function(e, t, f) {
            "use strict";
            var n = f(81075);
            e.exports = function(e, t, f, a, i) {
                return n(Error(e), t, f, a, i)
            }
        },
        1408: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = f(28217),
                i = f(13704),
                r = f(66043);

            function s(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return s(e), e.headers = e.headers || {}, e.data = a.call(e, e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                    delete e.headers[t]
                }), (e.adapter || r.adapter)(e).then(function(t) {
                    return s(e), t.data = a.call(e, t.data, t.headers, e.transformResponse), t
                }, function(t) {
                    return !i(t) && (s(e), t && t.response && (t.response.data = a.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                })
            }
        },
        81075: function(e) {
            "use strict";
            e.exports = function(e, t, f, n, a) {
                return e.config = t, f && (e.code = f), e.request = n, e.response = a, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        40872: function(e, t, f) {
            "use strict";
            var n = f(82569);
            e.exports = function(e, t) {
                t = t || {};
                var f = {},
                    a = ["url", "method", "data"],
                    i = ["headers", "auth", "proxy", "params"],
                    r = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    s = ["validateStatus"];

                function o(e, t) {
                    return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t
                }

                function d(a) {
                    n.isUndefined(t[a]) ? n.isUndefined(e[a]) || (f[a] = o(void 0, e[a])) : f[a] = o(e[a], t[a])
                }
                n.forEach(a, function(e) {
                    n.isUndefined(t[e]) || (f[e] = o(void 0, t[e]))
                }), n.forEach(i, d), n.forEach(r, function(a) {
                    n.isUndefined(t[a]) ? n.isUndefined(e[a]) || (f[a] = o(void 0, e[a])) : f[a] = o(void 0, t[a])
                }), n.forEach(s, function(n) {
                    n in t ? f[n] = o(e[n], t[n]) : n in e && (f[n] = o(void 0, e[n]))
                });
                var u = a.concat(i).concat(r).concat(s),
                    c = Object.keys(e).concat(Object.keys(t)).filter(function(e) {
                        return -1 === u.indexOf(e)
                    });
                return n.forEach(c, d), f
            }
        },
        54420: function(e, t, f) {
            "use strict";
            var n = f(71195);
            e.exports = function(e, t, f) {
                var a = f.config.validateStatus;
                !f.status || !a || a(f.status) ? e(f) : t(n("Request failed with status code " + f.status, f.config, null, f.request, f))
            }
        },
        28217: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = f(66043);
            e.exports = function(e, t, f) {
                var i = this || a;
                return n.forEach(f, function(f) {
                    e = f.call(i, e, t)
                }), e
            }
        },
        66043: function(e, t, f) {
            "use strict";
            var n, a = f(25566),
                i = f(82569),
                r = f(27212),
                s = f(81075),
                o = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function d(e, t) {
                !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var u = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: ("undefined" != typeof XMLHttpRequest ? n = f(60323) : void 0 !== a && "[object process]" === Object.prototype.toString.call(a) && (n = f(60323)), n),
                transformRequest: [function(e, t) {
                    return (r(t, "Accept"), r(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e)) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (d(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) || t && "application/json" === t["Content-Type"] ? (d(t, "application/json"), function(e, t, f) {
                        if (i.isString(e)) try {
                            return (0, JSON.parse)(e), i.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name) throw e
                        }
                        return (0, JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    var t = this.transitional,
                        f = t && t.silentJSONParsing,
                        n = t && t.forcedJSONParsing,
                        a = !f && "json" === this.responseType;
                    if (a || n && i.isString(e) && e.length) try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (a) {
                            if ("SyntaxError" === e.name) throw s(e, this, "E_JSON_PARSE");
                            throw e
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            u.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, i.forEach(["delete", "get", "head"], function(e) {
                u.headers[e] = {}
            }), i.forEach(["post", "put", "patch"], function(e) {
                u.headers[e] = i.merge(o)
            }), e.exports = u
        },
        46875: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var f = Array(arguments.length), n = 0; n < f.length; n++) f[n] = arguments[n];
                    return e.apply(t, f)
                }
            }
        },
        7832: function(e, t, f) {
            "use strict";
            var n = f(82569);

            function a(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, f) {
                if (!t) return e;
                if (f) i = f(t);
                else if (n.isURLSearchParams(t)) i = t.toString();
                else {
                    var i, r = [];
                    n.forEach(t, function(e, t) {
                        null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function(e) {
                            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), r.push(a(t) + "=" + a(e))
                        }))
                    }), i = r.join("&")
                }
                if (i) {
                    var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                }
                return e
            }
        },
        62331: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        87638: function(e, t, f) {
            "use strict";
            var n = f(82569);
            e.exports = n.isStandardBrowserEnv() ? {
                write: function(e, t, f, a, i, r) {
                    var s = [];
                    s.push(e + "=" + encodeURIComponent(t)), n.isNumber(f) && s.push("expires=" + new Date(f).toGMTString()), n.isString(a) && s.push("path=" + a), n.isString(i) && s.push("domain=" + i), !0 === r && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        59842: function(e) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        92466: function(e) {
            "use strict";
            e.exports = function(e) {
                return "object" == typeof e && !0 === e.isAxiosError
            }
        },
        86802: function(e, t, f) {
            "use strict";
            var n = f(82569);
            e.exports = n.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    f = document.createElement("a");

                function a(e) {
                    var n = e;
                    return t && (f.setAttribute("href", n), n = f.href), f.setAttribute("href", n), {
                        href: f.href,
                        protocol: f.protocol ? f.protocol.replace(/:$/, "") : "",
                        host: f.host,
                        search: f.search ? f.search.replace(/^\?/, "") : "",
                        hash: f.hash ? f.hash.replace(/^#/, "") : "",
                        hostname: f.hostname,
                        port: f.port,
                        pathname: "/" === f.pathname.charAt(0) ? f.pathname : "/" + f.pathname
                    }
                }
                return e = a(window.location.href),
                    function(t) {
                        var f = n.isString(t) ? a(t) : t;
                        return f.protocol === e.protocol && f.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        27212: function(e, t, f) {
            "use strict";
            var n = f(82569);
            e.exports = function(e, t) {
                n.forEach(e, function(f, n) {
                    n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = f, delete e[n])
                })
            }
        },
        66802: function(e, t, f) {
            "use strict";
            var n = f(82569),
                a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, f, i, r = {};
                return e && n.forEach(e.split("\n"), function(e) {
                    i = e.indexOf(":"), t = n.trim(e.substr(0, i)).toLowerCase(), f = n.trim(e.substr(i + 1)), t && !(r[t] && a.indexOf(t) >= 0) && ("set-cookie" === t ? r[t] = (r[t] ? r[t] : []).concat([f]) : r[t] = r[t] ? r[t] + ", " + f : f)
                }), r
            }
        },
        85332: function(e) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        76783: function(e, t, f) {
            "use strict";
            var n = f(23445),
                a = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
                a[e] = function(f) {
                    return typeof f === e || "a" + (t < 1 ? "n " : " ") + e
                }
            });
            var i = {},
                r = n.version.split(".");

            function s(e, t) {
                for (var f = t ? t.split(".") : r, n = e.split("."), a = 0; a < 3; a++) {
                    if (f[a] > n[a]) return !0;
                    if (f[a] < n[a]) break
                }
                return !1
            }
            a.transitional = function(e, t, f) {
                var a = t && s(t);

                function r(e, t) {
                    return "[Axios v" + n.version + "] Transitional option '" + e + "'" + t + (f ? ". " + f : "")
                }
                return function(f, n, s) {
                    if (!1 === e) throw Error(r(n, " has been removed in " + t));
                    return a && !i[n] && (i[n] = !0, console.warn(r(n, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(f, n, s)
                }
            }, e.exports = {
                isOlderVersion: s,
                assertOptions: function(e, t, f) {
                    if ("object" != typeof e) throw TypeError("options must be an object");
                    for (var n = Object.keys(e), a = n.length; a-- > 0;) {
                        var i = n[a],
                            r = t[i];
                        if (r) {
                            var s = e[i],
                                o = void 0 === s || r(s, i, e);
                            if (!0 !== o) throw TypeError("option " + i + " must be " + o);
                            continue
                        }
                        if (!0 !== f) throw Error("Unknown option " + i)
                    }
                },
                validators: a
            }
        },
        82569: function(e, t, f) {
            "use strict";
            var n = f(46875),
                a = Object.prototype.toString;

            function i(e) {
                return "[object Array]" === a.call(e)
            }

            function r(e) {
                return void 0 === e
            }

            function s(e) {
                return null !== e && "object" == typeof e
            }

            function o(e) {
                if ("[object Object]" !== a.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function d(e) {
                return "[object Function]" === a.call(e)
            }

            function u(e, t) {
                if (null != e) {
                    if ("object" != typeof e && (e = [e]), i(e))
                        for (var f = 0, n = e.length; f < n; f++) t.call(null, e[f], f, e);
                    else
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                }
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === a.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !r(e) && null !== e.constructor && !r(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: s,
                isPlainObject: o,
                isUndefined: r,
                isDate: function(e) {
                    return "[object Date]" === a.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === a.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === a.call(e)
                },
                isFunction: d,
                isStream: function(e) {
                    return s(e) && d(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: u,
                merge: function e() {
                    var t = {};

                    function f(f, n) {
                        o(t[n]) && o(f) ? t[n] = e(t[n], f) : o(f) ? t[n] = e({}, f) : i(f) ? t[n] = f.slice() : t[n] = f
                    }
                    for (var n = 0, a = arguments.length; n < a; n++) u(arguments[n], f);
                    return t
                },
                extend: function(e, t, f) {
                    return u(t, function(t, a) {
                        f && "function" == typeof t ? e[a] = n(t, f) : e[a] = t
                    }), e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                }
            }
        },
        66380: function(e, t, f) {
            var n = f(67133).lW,
                a = function() {
                    "use strict";
                    var e, t, f;

                    function a(e, t) {
                        return null != t && e instanceof t
                    }
                    try {
                        e = Map
                    } catch (t) {
                        e = function() {}
                    }
                    try {
                        t = Set
                    } catch (e) {
                        t = function() {}
                    }
                    try {
                        f = Promise
                    } catch (e) {
                        f = function() {}
                    }

                    function i(r, o, d, u, c) {
                        "object" == typeof o && (d = o.depth, u = o.prototype, c = o.includeNonEnumerable, o = o.circular);
                        var l = [],
                            p = [],
                            h = void 0 !== n;
                        return void 0 === o && (o = !0), void 0 === d && (d = 1 / 0),
                            function r(d, b) {
                                if (null === d) return null;
                                if (0 === b || "object" != typeof d) return d;
                                if (a(d, e)) y = new e;
                                else if (a(d, t)) y = new t;
                                else if (a(d, f)) y = new f(function(e, t) {
                                    d.then(function(t) {
                                        e(r(t, b - 1))
                                    }, function(e) {
                                        t(r(e, b - 1))
                                    })
                                });
                                else if (i.__isArray(d)) y = [];
                                else if (i.__isRegExp(d)) y = new RegExp(d.source, s(d)), d.lastIndex && (y.lastIndex = d.lastIndex);
                                else if (i.__isDate(d)) y = new Date(d.getTime());
                                else {
                                    if (h && n.isBuffer(d)) return y = n.allocUnsafe ? n.allocUnsafe(d.length) : new n(d.length), d.copy(y), y;
                                    a(d, Error) ? y = Object.create(d) : void 0 === u ? y = Object.create(m = Object.getPrototypeOf(d)) : (y = Object.create(u), m = u)
                                }
                                if (o) {
                                    var y, m, T, I = l.indexOf(d);
                                    if (-1 != I) return p[I];
                                    l.push(d), p.push(y)
                                }
                                for (var g in a(d, e) && d.forEach(function(e, t) {
                                        var f = r(t, b - 1),
                                            n = r(e, b - 1);
                                        y.set(f, n)
                                    }), a(d, t) && d.forEach(function(e) {
                                        var t = r(e, b - 1);
                                        y.add(t)
                                    }), d) m && (T = Object.getOwnPropertyDescriptor(m, g)), T && null == T.set || (y[g] = r(d[g], b - 1));
                                if (Object.getOwnPropertySymbols)
                                    for (var v = Object.getOwnPropertySymbols(d), g = 0; g < v.length; g++) {
                                        var C = v[g],
                                            E = Object.getOwnPropertyDescriptor(d, C);
                                        (!E || E.enumerable || c) && (y[C] = r(d[C], b - 1), E.enumerable || Object.defineProperty(y, C, {
                                            enumerable: !1
                                        }))
                                    }
                                if (c)
                                    for (var A = Object.getOwnPropertyNames(d), g = 0; g < A.length; g++) {
                                        var S = A[g],
                                            E = Object.getOwnPropertyDescriptor(d, S);
                                        E && E.enumerable || (y[S] = r(d[S], b - 1), Object.defineProperty(y, S, {
                                            enumerable: !1
                                        }))
                                    }
                                return y
                            }(r, d)
                    }

                    function r(e) {
                        return Object.prototype.toString.call(e)
                    }

                    function s(e) {
                        var t = "";
                        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
                    }
                    return i.clonePrototype = function(e) {
                        if (null === e) return null;
                        var t = function() {};
                        return t.prototype = e, new t
                    }, i.__objToStr = r, i.__isDate = function(e) {
                        return "object" == typeof e && "[object Date]" === r(e)
                    }, i.__isArray = function(e) {
                        return "object" == typeof e && "[object Array]" === r(e)
                    }, i.__isRegExp = function(e) {
                        return "object" == typeof e && "[object RegExp]" === r(e)
                    }, i.__getRegExpFlags = s, i
                }();
            e.exports && (e.exports = a)
        },
        68375: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = e.uri,
                    f = e.name,
                    n = e.type;
                this.uri = t, this.name = f, this.type = n
            }
        },
        3436: function(e, t, f) {
            "use strict";
            var n = f(43670);
            e.exports = function e(t, f, a) {
                void 0 === f && (f = ""), void 0 === a && (a = n);
                var i, r = new Map;

                function s(e, t) {
                    var f = r.get(t);
                    f ? f.push.apply(f, e) : r.set(t, e)
                }
                if (a(t)) i = null, s([f], t);
                else {
                    var o = f ? f + "." : "";
                    if ("undefined" != typeof FileList && t instanceof FileList) i = Array.prototype.map.call(t, function(e, t) {
                        return s(["" + o + t], e), null
                    });
                    else if (Array.isArray(t)) i = t.map(function(t, f) {
                        var n = e(t, "" + o + f, a);
                        return n.files.forEach(s), n.clone
                    });
                    else if (t && t.constructor === Object)
                        for (var d in i = {}, t) {
                            var u = e(t[d], "" + o + d, a);
                            u.files.forEach(s), i[d] = u.clone
                        } else i = t
                }
                return {
                    clone: i,
                    files: r
                }
            }
        },
        96345: function(e, t, f) {
            "use strict";
            t.ReactNativeFile = f(68375), t.extractFiles = f(3436), t.isExtractableFile = f(43670)
        },
        43670: function(e, t, f) {
            "use strict";
            var n = f(68375);
            e.exports = function(e) {
                return "undefined" != typeof File && e instanceof File || "undefined" != typeof Blob && e instanceof Blob || e instanceof n
            }
        },
        65053: function(e) {
            e.exports = "object" == typeof self ? self.FormData : window.FormData
        },
        71324: function(e, t, f) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = f(96345),
                i = n(f(65053)),
                r = function(e) {
                    return a.isExtractableFile(e) || null !== e && "object" == typeof e && "function" == typeof e.pipe
                };
            t.default = function(e, t, f) {
                var n = a.extractFiles({
                        query: e,
                        variables: t,
                        operationName: f
                    }, "", r),
                    s = n.clone,
                    o = n.files;
                if (0 === o.size) {
                    if (!Array.isArray(e)) return JSON.stringify(s);
                    if (void 0 !== t && !Array.isArray(t)) throw Error("Cannot create request body with given variable type, array expected");
                    return JSON.stringify(e.reduce(function(e, f, n) {
                        return e.push({
                            query: f,
                            variables: t ? t[n] : void 0
                        }), e
                    }, []))
                }
                var d = new("undefined" == typeof FormData ? i.default : FormData);
                d.append("operations", JSON.stringify(s));
                var u = {},
                    c = 0;
                return o.forEach(function(e) {
                    u[++c] = e
                }), d.append("map", JSON.stringify(u)), c = 0, o.forEach(function(e, t) {
                    d.append("" + ++c, t)
                }), d
            }
        },
        10056: function(e, t, f) {
            "use strict";
            var n = this && this.__assign || function() {
                    return (n = Object.assign || function(e) {
                        for (var t, f = 1, n = arguments.length; f < n; f++)
                            for (var a in t = arguments[f]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                a = this && this.__createBinding || (Object.create ? function(e, t, f, n) {
                    void 0 === n && (n = f), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[f]
                        }
                    })
                } : function(e, t, f, n) {
                    void 0 === n && (n = f), e[n] = t[f]
                }),
                i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                r = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var f in e) "default" !== f && Object.prototype.hasOwnProperty.call(e, f) && a(t, e, f);
                    return i(t, e), t
                },
                s = this && this.__awaiter || function(e, t, f, n) {
                    return new(f || (f = Promise))(function(a, i) {
                        function r(e) {
                            try {
                                o(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function s(e) {
                            try {
                                o(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function o(e) {
                            var t;
                            e.done ? a(e.value) : ((t = e.value) instanceof f ? t : new f(function(e) {
                                e(t)
                            })).then(r, s)
                        }
                        o((n = n.apply(e, t || [])).next())
                    })
                },
                o = this && this.__generator || function(e, t) {
                    var f, n, a, i, r = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (f) throw TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (f = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                                    switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            a = i;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                                r.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && r.label < a[1]) {
                                                r.label = a[1], a = i;
                                                break
                                            }
                                            if (a && r.label < a[2]) {
                                                r.label = a[2], r.ops.push(i);
                                                break
                                            }
                                            a[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, r)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    f = a = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, s])
                        }
                    }
                },
                d = this && this.__rest || function(e, t) {
                    var f = {};
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (f[n] = e[n]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) 0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (f[n[a]] = e[n[a]]);
                    return f
                },
                u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.gql = t.batchRequests = t.request = t.rawRequest = t.GraphQLClient = t.ClientError = void 0;
            var c = r(f(9366)),
                l = f(8782),
                p = u(f(71324)),
                h = f(46761);
            Object.defineProperty(t, "ClientError", {
                enumerable: !0,
                get: function() {
                    return h.ClientError
                }
            });
            var b = function(e) {
                    var t, f = {};
                    return e && ("undefined" != typeof Headers && e instanceof Headers || e instanceof c.Headers ? (t = {}, e.forEach(function(e, f) {
                        t[f] = e
                    }), f = t) : Array.isArray(e) ? e.forEach(function(e) {
                        var t = e[0],
                            n = e[1];
                        f[t] = n
                    }) : f = e), f
                },
                y = function(e) {
                    return e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim()
                },
                m = function(e) {
                    var t = e.query,
                        f = e.variables,
                        n = e.operationName;
                    if (!Array.isArray(t)) {
                        var a = ["query=" + encodeURIComponent(y(t))];
                        return f && a.push("variables=" + encodeURIComponent(JSON.stringify(f))), n && a.push("operationName=" + encodeURIComponent(n)), a.join("&")
                    }
                    if (void 0 !== f && !Array.isArray(f)) throw Error("Cannot create query with given variable type, array expected");
                    return "query=" + encodeURIComponent(JSON.stringify(t.reduce(function(e, t, n) {
                        return e.push({
                            query: y(t),
                            variables: f ? JSON.stringify(f[n]) : void 0
                        }), e
                    }, [])))
                },
                T = function(e) {
                    var t = e.url,
                        f = e.query,
                        a = e.variables,
                        i = e.operationName,
                        r = e.headers,
                        d = e.fetch,
                        u = e.fetchOptions;
                    return s(void 0, void 0, void 0, function() {
                        var e;
                        return o(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, d(t, n({
                                        method: "POST",
                                        headers: n(n({}, "string" == typeof(e = p.default(f, a, i)) ? {
                                            "Content-Type": "application/json"
                                        } : {}), r),
                                        body: e
                                    }, u))];
                                case 1:
                                    return [2, s.sent()]
                            }
                        })
                    })
                },
                I = function(e) {
                    var t = e.url,
                        f = e.query,
                        a = e.variables,
                        i = e.operationName,
                        r = e.headers,
                        d = e.fetch,
                        u = e.fetchOptions;
                    return s(void 0, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, d(t + "?" + m({
                                        query: f,
                                        variables: a,
                                        operationName: i
                                    }), n({
                                        method: "GET",
                                        headers: r
                                    }, u))];
                                case 1:
                                    return [2, e.sent()]
                            }
                        })
                    })
                },
                g = function() {
                    function e(e, t) {
                        this.url = e, this.options = t || {}
                    }
                    return e.prototype.rawRequest = function(e, t, f) {
                        var a = this.options,
                            i = a.headers,
                            r = a.fetch,
                            s = void 0 === r ? c.default : r,
                            o = a.method,
                            u = d(a, ["headers", "fetch", "method"]);
                        return v({
                            url: this.url,
                            query: e,
                            variables: t,
                            headers: n(n({}, b(i)), b(f)),
                            operationName: void 0,
                            fetch: s,
                            method: void 0 === o ? "POST" : o,
                            fetchOptions: u
                        })
                    }, e.prototype.request = function(e, t, f) {
                        return s(this, void 0, void 0, function() {
                            var a, i, r, s, u, l, p, h, y, m, T;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return i = (a = this.options).headers, s = void 0 === (r = a.fetch) ? c.default : r, l = void 0 === (u = a.method) ? "POST" : u, p = d(a, ["headers", "fetch", "method"]), h = this.url, m = (y = E(e)).query, T = y.operationName, [4, v({
                                            url: h,
                                            query: m,
                                            variables: t,
                                            headers: n(n({}, b(i)), b(f)),
                                            operationName: T,
                                            fetch: s,
                                            method: l,
                                            fetchOptions: p
                                        })];
                                    case 1:
                                        return [2, o.sent().data]
                                }
                            })
                        })
                    }, e.prototype.batchRequests = function(e, t) {
                        return s(this, void 0, void 0, function() {
                            var f, a, i, r, s, u, l;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return a = (f = this.options).headers, r = void 0 === (i = f.fetch) ? c.default : i, u = void 0 === (s = f.method) ? "POST" : s, l = d(f, ["headers", "fetch", "method"]), [4, v({
                                            url: this.url,
                                            query: e.map(function(e) {
                                                return E(e.document).query
                                            }),
                                            variables: e.map(function(e) {
                                                return e.variables
                                            }),
                                            headers: n(n({}, b(a)), b(t)),
                                            operationName: void 0,
                                            fetch: r,
                                            method: u,
                                            fetchOptions: l
                                        })];
                                    case 1:
                                        return [2, o.sent().data]
                                }
                            })
                        })
                    }, e.prototype.setHeaders = function(e) {
                        return this.options.headers = e, this
                    }, e.prototype.setHeader = function(e, t) {
                        var f, n = this.options.headers;
                        return n ? n[e] = t : this.options.headers = ((f = {})[e] = t, f), this
                    }, e.prototype.setEndpoint = function(e) {
                        return this.url = e, this
                    }, e
                }();

            function v(e) {
                var t = e.url,
                    f = e.query,
                    a = e.variables,
                    i = e.headers,
                    r = e.operationName,
                    d = e.fetch,
                    u = e.method,
                    c = void 0 === u ? "POST" : u,
                    l = e.fetchOptions;
                return s(this, void 0, void 0, function() {
                    var e, s, u, p, b, y, m, g;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return e = "POST" === c.toUpperCase() ? T : I, s = Array.isArray(f), [4, e({
                                    url: t,
                                    query: f,
                                    variables: a,
                                    operationName: r,
                                    headers: i,
                                    fetch: d,
                                    fetchOptions: l
                                })];
                            case 1:
                                var v, C;
                                return [4, (C = (v = u = o.sent()).headers.get("Content-Type")) && C.startsWith("application/json") ? v.json() : v.text()];
                            case 2:
                                if (p = o.sent(), b = s && Array.isArray(p) ? !p.some(function(e) {
                                        return !e.data
                                    }) : !!p.data, u.ok && !p.errors && b) return y = u.headers, m = u.status, [2, n(n({}, s ? {
                                    data: p
                                } : p), {
                                    headers: y,
                                    status: m
                                })];
                                throw g = "string" == typeof p ? {
                                    error: p
                                } : p, new h.ClientError(n(n({}, g), {
                                    status: u.status,
                                    headers: u.headers
                                }), {
                                    query: f,
                                    variables: a
                                })
                        }
                    })
                })
            }

            function C(e, t, f, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(a) {
                        return [2, new g(e).request(t, f, n)]
                    })
                })
            }

            function E(e) {
                if ("string" == typeof e) return {
                    query: e
                };
                var t, f = void 0,
                    n = e.definitions.filter(function(e) {
                        return "OperationDefinition" === e.kind
                    });
                return 1 === n.length && (f = null === (t = n[0].name) || void 0 === t ? void 0 : t.value), {
                    query: l.print(e),
                    operationName: f
                }
            }
            t.GraphQLClient = g, t.rawRequest = function(e, t, f, n) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(a) {
                        return [2, new g(e).rawRequest(t, f, n)]
                    })
                })
            }, t.request = C, t.batchRequests = function(e, t, f) {
                return s(this, void 0, void 0, function() {
                    return o(this, function(n) {
                        return [2, new g(e).batchRequests(t, f)]
                    })
                })
            }, t.default = C, t.gql = function(e) {
                for (var t = [], f = 1; f < arguments.length; f++) t[f - 1] = arguments[f];
                return e.reduce(function(e, f, n) {
                    return "" + e + f + (n in t ? t[n] : "")
                }, "")
            }
        },
        46761: function(e, t) {
            "use strict";
            var f, n = this && this.__extends || (f = function(e, t) {
                return (f = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && (e[f] = t[f])
                })(e, t)
            }, function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ClientError = void 0;
            var a = function(e) {
                function t(f, n) {
                    var a = this,
                        i = t.extractMessage(f) + ": " + JSON.stringify({
                            response: f,
                            request: n
                        });
                    return Object.setPrototypeOf(a = e.call(this, i) || this, t.prototype), a.response = f, a.request = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
                }
                return n(t, e), t.extractMessage = function(e) {
                    try {
                        return e.errors[0].message
                    } catch (t) {
                        return "GraphQL Error (Code: " + e.status + ")"
                    }
                }, t
            }(Error);
            t.ClientError = a
        },
        68145: function(e) {
            e.exports = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }
        },
        88178: function(e, t, f) {
            var n = f(9445),
                a = f(54048),
                i = n.DEFAULT_COMPARATOR,
                r = n.reverseComparator;

            function s(e, t, f, n) {
                for (var i, r, s = n, o = new e(n); s > 0;) i = f[--s], 0 !== s && (r = f[0], f[0] = i, function(e, t, f, n) {
                    for (var i, r = n, s = t[n], o = 2 * n + 1; o < f;)(i = o + 1) < f && e(t[o], t[i]) >= 0 && (o = i), t[n] = t[o], o = 2 * (n = o) + 1;
                    t[n] = s, a.siftDown(e, t, r, n)
                }(t, f, --n, 0), i = r), o[s] = i;
                return o
            }

            function o(e, t, f) {
                if (2 == arguments.length && (f = t, t = null), this.ArrayClass = e, this.capacity = f, this.items = new e(f), this.clear(), this.comparator = t || i, "number" != typeof f && f <= 0) throw Error("mnemonist/FixedReverseHeap.constructor: capacity should be a number > 0.");
                if ("function" != typeof this.comparator) throw Error("mnemonist/FixedReverseHeap.constructor: given comparator should be a function.");
                this.comparator = r(this.comparator)
            }
            o.prototype.clear = function() {
                this.size = 0
            }, o.prototype.push = function(e) {
                return this.size < this.capacity ? (this.items[this.size] = e, a.siftDown(this.comparator, this.items, 0, this.size), this.size++) : this.comparator(e, this.items[0]) > 0 && a.replace(this.comparator, this.items, e), this.size
            }, o.prototype.peek = function() {
                return this.items[0]
            }, o.prototype.consume = function() {
                var e = s(this.ArrayClass, this.comparator, this.items, this.size);
                return this.size = 0, e
            }, o.prototype.toArray = function() {
                return s(this.ArrayClass, this.comparator, this.items.slice(0, this.size), this.size)
            }, o.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: o,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (o.prototype[Symbol.for("nodejs.util.inspect.custom")] = o.prototype.inspect), e.exports = o
        },
        54048: function(e, t, f) {
            var n = f(58297),
                a = f(9445),
                i = f(73154),
                r = a.DEFAULT_COMPARATOR,
                s = a.reverseComparator;

            function o(e, t, f, n) {
                for (var a, i, r = t[n]; n > f;) {
                    if (i = t[a = n - 1 >> 1], 0 > e(r, i)) {
                        t[n] = i, n = a;
                        continue
                    }
                    break
                }
                t[n] = r
            }

            function d(e, t, f) {
                for (var n, a = t.length, i = f, r = t[f], s = 2 * f + 1; s < a;)(n = s + 1) < a && e(t[s], t[n]) >= 0 && (s = n), t[f] = t[s], s = 2 * (f = s) + 1;
                t[f] = r, o(e, t, i, f)
            }

            function u(e, t, f) {
                t.push(f), o(e, t, 0, t.length - 1)
            }

            function c(e, t) {
                var f = t.pop();
                if (0 !== t.length) {
                    var n = t[0];
                    return t[0] = f, d(e, t, 0), n
                }
                return f
            }

            function l(e, t, f) {
                if (0 === t.length) throw Error("mnemonist/heap.replace: cannot pop an empty heap.");
                var n = t[0];
                return t[0] = f, d(e, t, 0), n
            }

            function p(e, t, f) {
                var n;
                return 0 !== t.length && 0 > e(t[0], f) && (n = t[0], t[0] = f, f = n, d(e, t, 0)), f
            }

            function h(e, t) {
                for (var f = t.length >> 1; --f >= 0;) d(e, t, f)
            }

            function b(e, t) {
                for (var f = t.length, n = 0, a = Array(f); n < f;) a[n++] = c(e, t);
                return a
            }

            function y(e) {
                if (this.clear(), this.comparator = e || r, "function" != typeof this.comparator) throw Error("mnemonist/Heap.constructor: given comparator should be a function.")
            }

            function m(e) {
                if (this.clear(), this.comparator = e || r, "function" != typeof this.comparator) throw Error("mnemonist/MaxHeap.constructor: given comparator should be a function.");
                this.comparator = s(this.comparator)
            }
            y.prototype.clear = function() {
                this.items = [], this.size = 0
            }, y.prototype.push = function(e) {
                return u(this.comparator, this.items, e), ++this.size
            }, y.prototype.peek = function() {
                return this.items[0]
            }, y.prototype.pop = function() {
                return 0 !== this.size && this.size--, c(this.comparator, this.items)
            }, y.prototype.replace = function(e) {
                return l(this.comparator, this.items, e)
            }, y.prototype.pushpop = function(e) {
                return p(this.comparator, this.items, e)
            }, y.prototype.consume = function() {
                return this.size = 0, b(this.comparator, this.items)
            }, y.prototype.toArray = function() {
                return b(this.comparator, this.items.slice())
            }, y.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: y,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (y.prototype[Symbol.for("nodejs.util.inspect.custom")] = y.prototype.inspect), m.prototype = y.prototype, y.from = function(e, t) {
                var f, n = new y(t);
                return f = i.isArrayLike(e) ? e.slice() : i.toArray(e), h(n.comparator, f), n.items = f, n.size = f.length, n
            }, m.from = function(e, t) {
                var f, n = new m(t);
                return f = i.isArrayLike(e) ? e.slice() : i.toArray(e), h(n.comparator, f), n.items = f, n.size = f.length, n
            }, y.siftUp = d, y.siftDown = o, y.push = u, y.pop = c, y.replace = l, y.pushpop = p, y.heapify = h, y.consume = b, y.nsmallest = function(e, t, f) {
                2 == arguments.length && (f = t, t = e, e = r);
                var a, o, d, u, c = s(e),
                    p = 1 / 0;
                if (1 === t) {
                    if (i.isArrayLike(f)) {
                        for (a = 0, o = f.length; a < o; a++) d = f[a], (p === 1 / 0 || 0 > e(d, p)) && (p = d);
                        return (u = new f.constructor(1))[0] = p, u
                    }
                    return n(f, function(t) {
                        (p === 1 / 0 || 0 > e(t, p)) && (p = t)
                    }), [p]
                }
                if (i.isArrayLike(f)) {
                    if (t >= f.length) return f.slice().sort(e);
                    for (h(c, u = f.slice(0, t)), a = t, o = f.length; a < o; a++) c(f[a], u[0]) > 0 && l(c, u, f[a]);
                    return u.sort(e)
                }
                var b = i.guessLength(f);
                return null !== b && b < t && (t = b), u = Array(t), a = 0, n(f, function(e) {
                    a < t ? u[a] = e : (a === t && h(c, u), c(e, u[0]) > 0 && l(c, u, e)), a++
                }), u.length > a && (u.length = a), u.sort(e)
            }, y.nlargest = function(e, t, f) {
                2 == arguments.length && (f = t, t = e, e = r);
                var a, o, d, u, c = s(e),
                    p = -1 / 0;
                if (1 === t) {
                    if (i.isArrayLike(f)) {
                        for (a = 0, o = f.length; a < o; a++) d = f[a], (p === -1 / 0 || e(d, p) > 0) && (p = d);
                        return (u = new f.constructor(1))[0] = p, u
                    }
                    return n(f, function(t) {
                        (p === -1 / 0 || e(t, p) > 0) && (p = t)
                    }), [p]
                }
                if (i.isArrayLike(f)) {
                    if (t >= f.length) return f.slice().sort(c);
                    for (u = f.slice(0, t), h(e, u), a = t, o = f.length; a < o; a++) e(f[a], u[0]) > 0 && l(e, u, f[a]);
                    return u.sort(c)
                }
                var b = i.guessLength(f);
                return null !== b && b < t && (t = b), u = Array(t), a = 0, n(f, function(f) {
                    a < t ? u[a] = f : (a === t && h(e, u), e(f, u[0]) > 0 && l(e, u, f)), a++
                }), u.length > a && (u.length = a), u.sort(c)
            }, y.MinHeap = y, y.MaxHeap = m, e.exports = y
        },
        64116: function(e, t, f) {
            var n = f(3643),
                a = f(58297);

            function i() {
                this.clear()
            }
            i.prototype.clear = function() {
                this.items = [], this.offset = 0, this.size = 0
            }, i.prototype.enqueue = function(e) {
                return this.items.push(e), ++this.size
            }, i.prototype.dequeue = function() {
                if (this.size) {
                    var e = this.items[this.offset];
                    return 2 * ++this.offset >= this.items.length && (this.items = this.items.slice(this.offset), this.offset = 0), this.size--, e
                }
            }, i.prototype.peek = function() {
                if (this.size) return this.items[this.offset]
            }, i.prototype.forEach = function(e, t) {
                t = arguments.length > 1 ? t : this;
                for (var f = this.offset, n = 0, a = this.items.length; f < a; f++, n++) e.call(t, this.items[f], n, this)
            }, i.prototype.toArray = function() {
                return this.items.slice(this.offset)
            }, i.prototype.values = function() {
                var e = this.items,
                    t = this.offset;
                return new n(function() {
                    if (t >= e.length) return {
                        done: !0
                    };
                    var f = e[t];
                    return t++, {
                        value: f,
                        done: !1
                    }
                })
            }, i.prototype.entries = function() {
                var e = this.items,
                    t = this.offset,
                    f = 0;
                return new n(function() {
                    if (t >= e.length) return {
                        done: !0
                    };
                    var n = e[t];
                    return t++, {
                        value: [f++, n],
                        done: !1
                    }
                })
            }, "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = i.prototype.values), i.prototype.toString = function() {
                return this.toArray().join(",")
            }, i.prototype.toJSON = function() {
                return this.toArray()
            }, i.prototype.inspect = function() {
                var e = this.toArray();
                return Object.defineProperty(e, "constructor", {
                    value: i,
                    enumerable: !1
                }), e
            }, "undefined" != typeof Symbol && (i.prototype[Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect), i.from = function(e) {
                var t = new i;
                return a(e, function(e) {
                    t.enqueue(e)
                }), t
            }, i.of = function() {
                return i.from(arguments)
            }, e.exports = i
        },
        9445: function(e, t) {
            t.DEFAULT_COMPARATOR = function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }, t.DEFAULT_REVERSE_COMPARATOR = function(e, t) {
                return e < t ? 1 : e > t ? -1 : 0
            }, t.reverseComparator = function(e) {
                return function(t, f) {
                    return e(f, t)
                }
            }, t.createTupleComparator = function(e) {
                return 2 === e ? function(e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : e[1] < t[1] ? -1 : e[1] > t[1] ? 1 : 0
                } : function(t, f) {
                    for (var n = 0; n < e;) {
                        if (t[n] < f[n]) return -1;
                        if (t[n] > f[n]) return 1;
                        n++
                    }
                    return 0
                }
            }
        },
        73154: function(e, t, f) {
            var n = f(58297),
                a = f(45176);

            function i(e) {
                return "number" == typeof e.length ? e.length : "number" == typeof e.size ? e.size : void 0
            }
            t.isArrayLike = function(e) {
                return Array.isArray(e) || a.isTypedArray(e)
            }, t.guessLength = i, t.toArray = function(e) {
                var t = i(e),
                    f = "number" == typeof t ? Array(t) : [],
                    a = 0;
                return n(e, function(e) {
                    f[a++] = e
                }), f
            }, t.toArrayWithIndices = function(e) {
                var t = i(e),
                    f = "number" == typeof t ? a.getPointerArray(t) : Array,
                    r = "number" == typeof t ? Array(t) : [],
                    s = "number" == typeof t ? new f(t) : [],
                    o = 0;
                return n(e, function(e) {
                    r[o] = e, s[o] = o++
                }), [r, s]
            }
        },
        45176: function(e, t) {
            t.getPointerArray = function(e) {
                var t = e - 1;
                if (t <= 255) return Uint8Array;
                if (t <= 65535) return Uint16Array;
                if (t <= 4294967295) return Uint32Array;
                throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")
            }, t.getSignedPointerArray = function(e) {
                var t = e - 1;
                return t <= 127 ? Int8Array : t <= 32767 ? Int16Array : t <= 2147483647 ? Int32Array : Float64Array
            }, t.getNumberType = function(e) {
                return e === (0 | e) ? -1 === Math.sign(e) ? e <= 127 && e >= -128 ? Int8Array : e <= 32767 && e >= -32768 ? Int16Array : Int32Array : e <= 255 ? Uint8Array : e <= 65535 ? Uint16Array : Uint32Array : Float64Array
            };
            var f = {
                Uint8Array: 1,
                Int8Array: 2,
                Uint16Array: 3,
                Int16Array: 4,
                Uint32Array: 5,
                Int32Array: 6,
                Float32Array: 7,
                Float64Array: 8
            };
            t.getMinimalRepresentation = function(e, n) {
                var a, i, r, s, o, d = null,
                    u = 0;
                for (s = 0, o = e.length; s < o; s++) r = n ? n(e[s]) : e[s], (a = f[(i = t.getNumberType(r)).name]) > u && (u = a, d = i);
                return d
            }, t.isTypedArray = function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(e)
            }, t.concat = function() {
                var e, t, f, n = 0;
                for (e = 0, f = arguments.length; e < f; e++) n += arguments[e].length;
                var a = new arguments[0].constructor(n);
                for (e = 0, t = 0; e < f; e++) a.set(arguments[e], t), t += arguments[e].length;
                return a
            }, t.indices = function(e) {
                for (var f = new(t.getPointerArray(e))(e), n = 0; n < e; n++) f[n] = n;
                return f
            }
        },
        31199: function(e, t, f) {
            (function() {
                (e.exports = f(14321)).version = "5.1.2"
            }).call(this)
        },
        14321: function(e, t, f) {
            var n = f(67133).lW;
            (function() {
                var t, a, i = [].splice,
                    r = function(e, t) {
                        if (!(e instanceof t)) throw Error("Bound instance method accessed before binding")
                    },
                    s = [].indexOf;
                a = f(66380), t = f(512).EventEmitter, e.exports = (function() {
                    class e extends t {
                        constructor(e = {}) {
                            super(), this.get = this.get.bind(this), this.mget = this.mget.bind(this), this.set = this.set.bind(this), this.mset = this.mset.bind(this), this.del = this.del.bind(this), this.take = this.take.bind(this), this.ttl = this.ttl.bind(this), this.getTtl = this.getTtl.bind(this), this.keys = this.keys.bind(this), this.has = this.has.bind(this), this.getStats = this.getStats.bind(this), this.flushAll = this.flushAll.bind(this), this.flushStats = this.flushStats.bind(this), this.close = this.close.bind(this), this._checkData = this._checkData.bind(this), this._check = this._check.bind(this), this._isInvalidKey = this._isInvalidKey.bind(this), this._wrap = this._wrap.bind(this), this._getValLength = this._getValLength.bind(this), this._error = this._error.bind(this), this._initErrors = this._initErrors.bind(this), this.options = e, this._initErrors(), this.data = {}, this.options = Object.assign({
                                forceString: !1,
                                objectValueSize: 80,
                                promiseValueSize: 80,
                                arrayValueSize: 40,
                                stdTTL: 0,
                                checkperiod: 600,
                                useClones: !0,
                                deleteOnExpire: !0,
                                enableLegacyCallbacks: !1,
                                maxKeys: -1
                            }, this.options), this.options.enableLegacyCallbacks && (console.warn("WARNING! node-cache legacy callback support will drop in v6.x"), ["get", "mget", "set", "del", "ttl", "getTtl", "keys", "has"].forEach(e => {
                                var t;
                                t = this[e], this[e] = function(...e) {
                                    var f, n, a;
                                    if (n = e, [...e] = n, [f] = i.call(e, -1), "function" != typeof f) return t(...e, f);
                                    try {
                                        a = t(...e), f(null, a)
                                    } catch (e) {
                                        f(e)
                                    }
                                }
                            })), this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this.validKeyTypes = ["string", "number"], this._checkData();
                            return
                        }
                        get(t) {
                            var f;
                            if (r(this, e), null != (f = this._isInvalidKey(t))) throw f;
                            if (null != this.data[t] && this._check(t, this.data[t])) return this.stats.hits++, this._unwrap(this.data[t]);
                            this.stats.misses++
                        }
                        mget(t) {
                            var f, n, a, i, s;
                            if (r(this, e), !Array.isArray(t)) throw this._error("EKEYSTYPE");
                            for (n = 0, s = {}, i = t.length; n < i; n++) {
                                if (a = t[n], null != (f = this._isInvalidKey(a))) throw f;
                                null != this.data[a] && this._check(a, this.data[a]) ? (this.stats.hits++, s[a] = this._unwrap(this.data[a])) : this.stats.misses++
                            }
                            return s
                        }
                        set(t, f, n) {
                            var a, i;
                            if (r(this, e), this.options.maxKeys > -1 && this.stats.keys >= this.options.maxKeys) throw this._error("ECACHEFULL");
                            if (this.options.forceString, null == n && (n = this.options.stdTTL), null != (a = this._isInvalidKey(t))) throw a;
                            return i = !1, this.data[t] && (i = !0, this.stats.vsize -= this._getValLength(this._unwrap(this.data[t], !1))), this.data[t] = this._wrap(f, n), this.stats.vsize += this._getValLength(f), !i && (this.stats.ksize += this._getKeyLength(t), this.stats.keys++), this.emit("set", t, f), !0
                        }
                        mset(t) {
                            var f, n, a, i, s, o, d, u, c;
                            if (r(this, e), this.options.maxKeys > -1 && this.stats.keys + t.length >= this.options.maxKeys) throw this._error("ECACHEFULL");
                            for (n = 0, o = t.length; n < o; n++) {
                                if (s = t[n], {
                                        key: i,
                                        val: c,
                                        ttl: u
                                    } = s, u && "number" != typeof u) throw this._error("ETTLTYPE");
                                if (null != (f = this._isInvalidKey(i))) throw f
                            }
                            for (a = 0, d = t.length; a < d; a++) s = t[a], ({
                                key: i,
                                val: c,
                                ttl: u
                            } = s), this.set(i, c, u);
                            return !0
                        }
                        del(t) {
                            var f, n, a, i, s, o;
                            for (r(this, e), Array.isArray(t) || (t = [t]), f = 0, a = 0, s = t.length; a < s; a++) {
                                if (i = t[a], null != (n = this._isInvalidKey(i))) throw n;
                                null != this.data[i] && (this.stats.vsize -= this._getValLength(this._unwrap(this.data[i], !1)), this.stats.ksize -= this._getKeyLength(i), this.stats.keys--, f++, o = this.data[i], delete this.data[i], this.emit("del", i, o.v))
                            }
                            return f
                        }
                        take(t) {
                            var f;
                            return r(this, e), null != (f = this.get(t)) && this.del(t), f
                        }
                        ttl(t, f) {
                            var n;
                            if (r(this, e), f || (f = this.options.stdTTL), !t) return !1;
                            if (null != (n = this._isInvalidKey(t))) throw n;
                            return !!(null != this.data[t] && this._check(t, this.data[t])) && (f >= 0 ? this.data[t] = this._wrap(this.data[t].v, f, !1) : this.del(t), !0)
                        }
                        getTtl(t) {
                            var f;
                            if (r(this, e), t) {
                                if (null != (f = this._isInvalidKey(t))) throw f;
                                return null != this.data[t] && this._check(t, this.data[t]) ? this.data[t].t : void 0
                            }
                        }
                        keys() {
                            return r(this, e), Object.keys(this.data)
                        }
                        has(t) {
                            return r(this, e), null != this.data[t] && this._check(t, this.data[t])
                        }
                        getStats() {
                            return r(this, e), this.stats
                        }
                        flushAll(t = !0) {
                            r(this, e), this.data = {}, this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this._killCheckPeriod(), this._checkData(t), this.emit("flush")
                        }
                        flushStats() {
                            r(this, e), this.stats = {
                                hits: 0,
                                misses: 0,
                                keys: 0,
                                ksize: 0,
                                vsize: 0
                            }, this.emit("flush_stats")
                        }
                        close() {
                            r(this, e), this._killCheckPeriod()
                        }
                        _checkData(t = !0) {
                            var f, n, a;
                            for (f in r(this, e), n = this.data) a = n[f], this._check(f, a);
                            t && this.options.checkperiod > 0 && (this.checkTimeout = setTimeout(this._checkData, 1e3 * this.options.checkperiod, t), null != this.checkTimeout && null != this.checkTimeout.unref && this.checkTimeout.unref())
                        }
                        _killCheckPeriod() {
                            if (null != this.checkTimeout) return clearTimeout(this.checkTimeout)
                        }
                        _check(t, f) {
                            var n;
                            return r(this, e), n = !0, 0 !== f.t && f.t < Date.now() && (this.options.deleteOnExpire && (n = !1, this.del(t)), this.emit("expired", t, this._unwrap(f))), n
                        }
                        _isInvalidKey(t) {
                            if (r(this, e), 0 > s.call(this.validKeyTypes, typeof t)) return this._error("EKEYTYPE", {
                                type: typeof t
                            })
                        }
                        _wrap(t, f, n = !0) {
                            var i;
                            return r(this, e), this.options.useClones || (n = !1), i = Date.now(), {
                                t: 0 === f ? 0 : f ? i + 1e3 * f : 0 === this.options.stdTTL ? this.options.stdTTL : i + 1e3 * this.options.stdTTL,
                                v: n ? a(t) : t
                            }
                        }
                        _unwrap(e, t = !0) {
                            return (this.options.useClones || (t = !1), null != e.v) ? t ? a(e.v) : e.v : null
                        }
                        _getKeyLength(e) {
                            return e.toString().length
                        }
                        _getValLength(t) {
                            if (r(this, e), "string" == typeof t) return t.length;
                            if (this.options.forceString) return JSON.stringify(t).length;
                            if (Array.isArray(t)) return this.options.arrayValueSize * t.length;
                            if ("number" == typeof t) return 8;
                            if ("function" == typeof(null != t ? t.then : void 0)) return this.options.promiseValueSize;
                            if (null != n ? n.isBuffer(t) : void 0) return t.length;
                            if (null != t && "object" == typeof t) return this.options.objectValueSize * Object.keys(t).length;
                            else if ("boolean" == typeof t) return 8;
                            else return 0
                        }
                        _error(t, f = {}) {
                            var n;
                            return r(this, e), (n = Error()).name = t, n.errorcode = t, n.message = null != this.ERRORS[t] ? this.ERRORS[t](f) : "-", n.data = f, n
                        }
                        _initErrors() {
                            var t, f, n;
                            for (f in r(this, e), this.ERRORS = {}, n = this._ERRORS) t = n[f], this.ERRORS[f] = this.createErrorMessage(t)
                        }
                        createErrorMessage(e) {
                            return function(t) {
                                return e.replace("__key", t.type)
                            }
                        }
                    }
                    return e.prototype._ERRORS = {
                        ENOTFOUND: "Key `__key` not found",
                        ECACHEFULL: "Cache max keys amount exceeded",
                        EKEYTYPE: "The key argument has to be of type `string` or `number`. Found: `__key`",
                        EKEYSTYPE: "The keys argument has to be an array.",
                        ETTLTYPE: "The ttl argument has to be a number."
                    }, e
                }).call(this)
            }).call(this)
        },
        58297: function(e, t, f) {
            var n = f(88132),
                a = n.ARRAY_BUFFER_SUPPORT,
                i = n.SYMBOL_SUPPORT;
            e.exports = function(e, t) {
                var f, n, r, s, o;
                if (!e) throw Error("obliterator/forEach: invalid iterable.");
                if ("function" != typeof t) throw Error("obliterator/forEach: expecting a callback.");
                if (Array.isArray(e) || a && ArrayBuffer.isView(e) || "string" == typeof e || "[object Arguments]" === e.toString()) {
                    for (r = 0, s = e.length; r < s; r++) t(e[r], r);
                    return
                }
                if ("function" == typeof e.forEach) {
                    e.forEach(t);
                    return
                }
                if (i && Symbol.iterator in e && "function" != typeof e.next && (e = e[Symbol.iterator]()), "function" == typeof e.next) {
                    for (f = e, r = 0; !0 !== (o = f.next()).done;) t(o.value, r), r++;
                    return
                }
                for (n in e) e.hasOwnProperty(n) && t(e[n], n)
            }
        },
        3643: function(e) {
            function t(e) {
                if ("function" != typeof e) throw Error("obliterator/iterator: expecting a function!");
                this.next = e
            }
            "undefined" != typeof Symbol && (t.prototype[Symbol.iterator] = function() {
                return this
            }), t.of = function() {
                var e = arguments,
                    f = e.length,
                    n = 0;
                return new t(function() {
                    return n >= f ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[n++]
                    }
                })
            }, t.empty = function() {
                return new t(function() {
                    return {
                        done: !0
                    }
                })
            }, t.fromSequence = function(e) {
                var f = 0,
                    n = e.length;
                return new t(function() {
                    return f >= n ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[f++]
                    }
                })
            }, t.is = function(e) {
                return e instanceof t || "object" == typeof e && null !== e && "function" == typeof e.next
            }, e.exports = t
        },
        88132: function(e, t) {
            t.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, t.SYMBOL_SUPPORT = "undefined" != typeof Symbol
        },
        87793: function(e, t, f) {
            e.exports = f(24060)
        },
        24060: function(e, t, f) {
            var n = f(56461);
            t.operation = function(e) {
                var f = t.timeouts(e);
                return new n(f, {
                    forever: e && (e.forever || e.retries === 1 / 0),
                    unref: e && e.unref,
                    maxRetryTime: e && e.maxRetryTime
                })
            }, t.timeouts = function(e) {
                if (e instanceof Array) return [].concat(e);
                var t = {
                    retries: 10,
                    factor: 2,
                    minTimeout: 1e3,
                    maxTimeout: 1 / 0,
                    randomize: !1
                };
                for (var f in e) t[f] = e[f];
                if (t.minTimeout > t.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
                for (var n = [], a = 0; a < t.retries; a++) n.push(this.createTimeout(a, t));
                return e && e.forever && !n.length && n.push(this.createTimeout(a, t)), n.sort(function(e, t) {
                    return e - t
                }), n
            }, t.createTimeout = function(e, t) {
                return Math.min(Math.round((t.randomize ? Math.random() + 1 : 1) * Math.max(t.minTimeout, 1) * Math.pow(t.factor, e)), t.maxTimeout)
            }, t.wrap = function(e, f, n) {
                if (f instanceof Array && (n = f, f = null), !n)
                    for (var a in n = [], e) "function" == typeof e[a] && n.push(a);
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = e[r];
                    e[r] = (function(n) {
                        var a = t.operation(f),
                            i = Array.prototype.slice.call(arguments, 1),
                            r = i.pop();
                        i.push(function(e) {
                            a.retry(e) || (e && (arguments[0] = a.mainError()), r.apply(this, arguments))
                        }), a.attempt(function() {
                            n.apply(e, i)
                        })
                    }).bind(e, s), e[r].options = f
                }
            }
        },
        56461: function(e) {
            function t(e, t) {
                "boolean" == typeof t && (t = {
                    forever: t
                }), this._originalTimeouts = JSON.parse(JSON.stringify(e)), this._timeouts = e, this._options = t || {}, this._maxRetryTime = t && t.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
            }
            e.exports = t, t.prototype.reset = function() {
                this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
            }, t.prototype.stop = function() {
                this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
            }, t.prototype.retry = function(e) {
                if (this._timeout && clearTimeout(this._timeout), !e) return !1;
                var t = new Date().getTime();
                if (e && t - this._operationStart >= this._maxRetryTime) return this._errors.push(e), this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
                this._errors.push(e);
                var f = this._timeouts.shift();
                if (void 0 === f) {
                    if (!this._cachedTimeouts) return !1;
                    this._errors.splice(0, this._errors.length - 1), f = this._cachedTimeouts.slice(-1)
                }
                var n = this;
                return this._timer = setTimeout(function() {
                    n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout(function() {
                        n._operationTimeoutCb(n._attempts)
                    }, n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts)
                }, f), this._options.unref && this._timer.unref(), !0
            }, t.prototype.attempt = function(e, t) {
                this._fn = e, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb));
                var f = this;
                this._operationTimeoutCb && (this._timeout = setTimeout(function() {
                    f._operationTimeoutCb()
                }, f._operationTimeout)), this._operationStart = new Date().getTime(), this._fn(this._attempts)
            }, t.prototype.try = function(e) {
                console.log("Using RetryOperation.try() is deprecated"), this.attempt(e)
            }, t.prototype.start = function(e) {
                console.log("Using RetryOperation.start() is deprecated"), this.attempt(e)
            }, t.prototype.start = t.prototype.try, t.prototype.errors = function() {
                return this._errors
            }, t.prototype.attempts = function() {
                return this._attempts
            }, t.prototype.mainError = function() {
                if (0 === this._errors.length) return null;
                for (var e = {}, t = null, f = 0, n = 0; n < this._errors.length; n++) {
                    var a = this._errors[n],
                        i = a.message,
                        r = (e[i] || 0) + 1;
                    e[i] = r, r >= f && (t = a, f = r)
                }
                return t
            }
        },
        69222: function(e, t, f) {
            "use strict";
            e.exports.numbers = a, e.exports.sum = r, e.exports.mean = s, e.exports.median = function(e) {
                if (0 === (e = a(e)).length) return NaN;
                var t = e.length / 2 | 0;
                return (e = i(e)).length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
            }, e.exports.mode = function(e) {
                if (0 === (e = a(e)).length) return NaN;
                for (var t = NaN, f = {}, n = 0; n < e.length; n++) {
                    var i = e[n],
                        r = f[i] || 0;
                    r++, f[i] = r
                }
                var s = a(Object.keys(f).sort(function(e, t) {
                    return f[t] - f[e]
                }));
                if (t = s[0], f[s[1]] == f[t]) {
                    if (s.length == e.length) return e;
                    for (var o = new Set([t]), d = f[t], n = 1; n < s.length; n++)
                        if (f[s[n]] == d) o.add(s[n]);
                        else break;
                    return o
                }
                return t
            }, e.exports.variance = d, e.exports.sampleVariance = u, e.exports.populationVariance = d, e.exports.stdev = c, e.exports.sampleStdev = function(e) {
                return Math.sqrt(u(e))
            }, e.exports.populationStdev = c, e.exports.percentile = function(e, t) {
                if (0 === (e = a(e)).length || null == t || t < 0) return NaN;
                t > 1 && (t = 1);
                var f = (e = i(e)).length * t - .5;
                if ((0 | f) === f) return e[f];
                var n = 0 | f,
                    r = f - n;
                return (1 - r) * e[n] + r * e[Math.min(n + 1, e.length - 1)]
            }, e.exports.histogram = function(e, t) {
                if (null == e || 0 === (e = i(a(e))).length) return null;
                null == t && (t = Math.sqrt(e.length)), (t = Math.round(t)) < 1 && (t = 1);
                var f = e[0],
                    n = e[e.length - 1];
                f === n && (f -= .5, n += .5);
                var r = n - f,
                    s = (r + .05 * r) / t,
                    o = (f + n) / 2,
                    d = o - s * Math.floor(t / 2);
                if (t % 2 != 0) var d = o - s / 2 - s * Math.floor(t / 2);
                for (var u = {
                        values: Array(t).fill(0),
                        bins: t,
                        binWidth: s,
                        binLimits: [d, d + s * t]
                    }, c = 0, l = 0; l < e.length; l++) {
                    for (; e[l] > (c + 1) * s + d;) c++;
                    u.values[c]++
                }
                return u
            };
            var n = f(68145);

            function a(e) {
                var t = [];
                if (null == e) return t;
                for (var f = 0; f < e.length; f++) n(e[f]) && t.push(+e[f]);
                return t
            }

            function i(e) {
                return e.sort(function(e, t) {
                    return e - t
                })
            }

            function r(e) {
                e = a(e);
                for (var t = 0, f = 0; f < e.length; f++) t += e[f];
                return t
            }

            function s(e) {
                return 0 === (e = a(e)).length ? NaN : r(e) / e.length
            }

            function o(e) {
                for (var t = s(e = a(e)), f = [], n = 0; n < e.length; n++) f.push(Math.pow(e[n] - t, 2));
                return f
            }

            function d(e) {
                return s(o(e))
            }

            function u(e) {
                var t = o(e);
                return t.length <= 1 ? NaN : r(t) / (t.length - 1)
            }

            function c(e) {
                return Math.sqrt(d(e))
            }
        },
        8782: function(e, t, f) {
            "use strict";
            f.r(t), f.d(t, {
                print: function() {
                    return d
                }
            });
            var n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e) {
                var t = e.prototype.toJSON;
                "function" == typeof t || function(e, t) {
                    throw Error(null != t ? t : "Unexpected invariant triggered.")
                }(0), e.prototype.inspect = t, n && (e.prototype[n] = t)
            }

            function r(e) {
                return null != e && "string" == typeof e.kind
            }
            i(function() {
                function e(e, t, f) {
                    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = f
                }
                return e.prototype.toJSON = function() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }, e
            }()), i(function() {
                function e(e, t, f, n, a, i, r) {
                    this.kind = e, this.start = t, this.end = f, this.line = n, this.column = a, this.value = r, this.prev = i, this.next = null
                }
                return e.prototype.toJSON = function() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }, e
            }());
            var s = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"]
                },
                o = Object.freeze({});

            function d(e) {
                return function(e, t) {
                    var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
                        i = void 0,
                        d = Array.isArray(e),
                        u = [e],
                        c = -1,
                        l = [],
                        p = void 0,
                        h = void 0,
                        b = void 0,
                        y = [],
                        m = [],
                        T = e;
                    do {
                        var I, g = ++c === u.length,
                            v = g && 0 !== l.length;
                        if (g) {
                            if (h = 0 === m.length ? void 0 : y[y.length - 1], p = b, b = m.pop(), v) {
                                if (d) p = p.slice();
                                else {
                                    for (var C = {}, E = 0, A = Object.keys(p); E < A.length; E++) {
                                        var S = A[E];
                                        C[S] = p[S]
                                    }
                                    p = C
                                }
                                for (var O = 0, k = 0; k < l.length; k++) {
                                    var w = l[k][0],
                                        P = l[k][1];
                                    d && (w -= O), d && null === P ? (p.splice(w, 1), O++) : p[w] = P
                                }
                            }
                            c = i.index, u = i.keys, l = i.edits, d = i.inArray, i = i.prev
                        } else {
                            if (h = b ? d ? c : u[c] : void 0, null == (p = b ? b[h] : T)) continue;
                            b && y.push(h)
                        }
                        var M = void 0;
                        if (!Array.isArray(p)) {
                            if (!r(p)) throw Error("Invalid AST Node: ".concat(function e(t, f) {
                                switch (a(t)) {
                                    case "string":
                                        return JSON.stringify(t);
                                    case "function":
                                        return t.name ? "[function ".concat(t.name, "]") : "[function]";
                                    case "object":
                                        if (null === t) return "null";
                                        return function(t, f) {
                                            if (-1 !== f.indexOf(t)) return "[Circular]";
                                            var a, i, r = [].concat(f, [t]),
                                                s = "function" == typeof(a = t[String(n)]) ? a : "function" == typeof t.inspect ? t.inspect : void 0;
                                            if (void 0 !== s) {
                                                var o = s.call(t);
                                                if (o !== t) return "string" == typeof o ? o : e(o, r)
                                            } else if (Array.isArray(t)) return function(t, f) {
                                                if (0 === t.length) return "[]";
                                                if (f.length > 2) return "[Array]";
                                                for (var n = Math.min(10, t.length), a = t.length - n, i = [], r = 0; r < n; ++r) i.push(e(t[r], f));
                                                return 1 === a ? i.push("... 1 more item") : a > 1 && i.push("... ".concat(a, " more items")), "[" + i.join(", ") + "]"
                                            }(t, r);
                                            return 0 === (i = Object.keys(t)).length ? "{}" : r.length > 2 ? "[" + function(e) {
                                                var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                                if ("Object" === t && "function" == typeof e.constructor) {
                                                    var f = e.constructor.name;
                                                    if ("string" == typeof f && "" !== f) return f
                                                }
                                                return t
                                            }(t) + "]" : "{ " + i.map(function(f) {
                                                var n = e(t[f], r);
                                                return f + ": " + n
                                            }).join(", ") + " }"
                                        }(t, f);
                                    default:
                                        return String(t)
                                }
                            }(p, []), "."));
                            var x = function(e, t, f) {
                                var n = e[t];
                                if (n) {
                                    if (!f && "function" == typeof n) return n;
                                    var a = f ? n.leave : n.enter;
                                    if ("function" == typeof a) return a
                                } else {
                                    var i = f ? e.leave : e.enter;
                                    if (i) {
                                        if ("function" == typeof i) return i;
                                        var r = i[t];
                                        if ("function" == typeof r) return r
                                    }
                                }
                            }(t, p.kind, g);
                            if (x) {
                                if ((M = x.call(t, p, h, b, y, m)) === o) break;
                                if (!1 === M) {
                                    if (!g) {
                                        y.pop();
                                        continue
                                    }
                                } else if (void 0 !== M && (l.push([h, M]), !g)) {
                                    if (r(M)) p = M;
                                    else {
                                        y.pop();
                                        continue
                                    }
                                }
                            }
                        }
                        void 0 === M && v && l.push([h, p]), g ? y.pop() : (i = {
                            inArray: d,
                            index: c,
                            keys: u,
                            edits: l,
                            prev: i
                        }, u = (d = Array.isArray(p)) ? p : null !== (I = f[p.kind]) && void 0 !== I ? I : [], c = -1, l = [], b && m.push(b), b = p)
                    } while (void 0 !== i);
                    return 0 !== l.length && (T = l[l.length - 1][1]), T
                }(e, {
                    leave: u
                })
            }
            var u = {
                Name: function(e) {
                    return e.value
                },
                Variable: function(e) {
                    return "$" + e.name
                },
                Document: function(e) {
                    return l(e.definitions, "\n\n") + "\n"
                },
                OperationDefinition: function(e) {
                    var t = e.operation,
                        f = e.name,
                        n = h("(", l(e.variableDefinitions, ", "), ")"),
                        a = l(e.directives, " "),
                        i = e.selectionSet;
                    return f || a || n || "query" !== t ? l([t, l([f, n]), a, i], " ") : i
                },
                VariableDefinition: function(e) {
                    var t = e.variable,
                        f = e.type,
                        n = e.defaultValue,
                        a = e.directives;
                    return t + ": " + f + h(" = ", n) + h(" ", l(a, " "))
                },
                SelectionSet: function(e) {
                    return p(e.selections)
                },
                Field: function(e) {
                    var t = e.alias,
                        f = e.name,
                        n = e.arguments,
                        a = e.directives,
                        i = e.selectionSet,
                        r = h("", t, ": ") + f,
                        s = r + h("(", l(n, ", "), ")");
                    return s.length > 80 && (s = r + h("(\n", b(l(n, "\n")), "\n)")), l([s, l(a, " "), i], " ")
                },
                Argument: function(e) {
                    return e.name + ": " + e.value
                },
                FragmentSpread: function(e) {
                    return "..." + e.name + h(" ", l(e.directives, " "))
                },
                InlineFragment: function(e) {
                    var t = e.typeCondition,
                        f = e.directives,
                        n = e.selectionSet;
                    return l(["...", h("on ", t), l(f, " "), n], " ")
                },
                FragmentDefinition: function(e) {
                    var t = e.name,
                        f = e.typeCondition,
                        n = e.variableDefinitions,
                        a = e.directives,
                        i = e.selectionSet;
                    return "fragment ".concat(t).concat(h("(", l(n, ", "), ")"), " ") + "on ".concat(f, " ").concat(h("", l(a, " "), " ")) + i
                },
                IntValue: function(e) {
                    return e.value
                },
                FloatValue: function(e) {
                    return e.value
                },
                StringValue: function(e, t) {
                    var f = e.value;
                    return e.block ? function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = -1 === e.indexOf("\n"),
                            a = " " === e[0] || "	" === e[0],
                            i = '"' === e[e.length - 1],
                            r = "\\" === e[e.length - 1],
                            s = !n || i || r || f,
                            o = "";
                        return s && !(n && a) && (o += "\n" + t), o += t ? e.replace(/\n/g, "\n" + t) : e, s && (o += "\n"), '"""' + o.replace(/"""/g, '\\"""') + '"""'
                    }(f, "description" === t ? "" : "  ") : JSON.stringify(f)
                },
                BooleanValue: function(e) {
                    return e.value ? "true" : "false"
                },
                NullValue: function() {
                    return "null"
                },
                EnumValue: function(e) {
                    return e.value
                },
                ListValue: function(e) {
                    return "[" + l(e.values, ", ") + "]"
                },
                ObjectValue: function(e) {
                    return "{" + l(e.fields, ", ") + "}"
                },
                ObjectField: function(e) {
                    return e.name + ": " + e.value
                },
                Directive: function(e) {
                    return "@" + e.name + h("(", l(e.arguments, ", "), ")")
                },
                NamedType: function(e) {
                    return e.name
                },
                ListType: function(e) {
                    return "[" + e.type + "]"
                },
                NonNullType: function(e) {
                    return e.type + "!"
                },
                SchemaDefinition: c(function(e) {
                    var t = e.directives,
                        f = e.operationTypes;
                    return l(["schema", l(t, " "), p(f)], " ")
                }),
                OperationTypeDefinition: function(e) {
                    return e.operation + ": " + e.type
                },
                ScalarTypeDefinition: c(function(e) {
                    return l(["scalar", e.name, l(e.directives, " ")], " ")
                }),
                ObjectTypeDefinition: c(function(e) {
                    var t = e.name,
                        f = e.interfaces,
                        n = e.directives,
                        a = e.fields;
                    return l(["type", t, h("implements ", l(f, " & ")), l(n, " "), p(a)], " ")
                }),
                FieldDefinition: c(function(e) {
                    var t = e.name,
                        f = e.arguments,
                        n = e.type,
                        a = e.directives;
                    return t + (m(f) ? h("(\n", b(l(f, "\n")), "\n)") : h("(", l(f, ", "), ")")) + ": " + n + h(" ", l(a, " "))
                }),
                InputValueDefinition: c(function(e) {
                    var t = e.name,
                        f = e.type,
                        n = e.defaultValue,
                        a = e.directives;
                    return l([t + ": " + f, h("= ", n), l(a, " ")], " ")
                }),
                InterfaceTypeDefinition: c(function(e) {
                    var t = e.name,
                        f = e.interfaces,
                        n = e.directives,
                        a = e.fields;
                    return l(["interface", t, h("implements ", l(f, " & ")), l(n, " "), p(a)], " ")
                }),
                UnionTypeDefinition: c(function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.types;
                    return l(["union", t, l(f, " "), n && 0 !== n.length ? "= " + l(n, " | ") : ""], " ")
                }),
                EnumTypeDefinition: c(function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.values;
                    return l(["enum", t, l(f, " "), p(n)], " ")
                }),
                EnumValueDefinition: c(function(e) {
                    return l([e.name, l(e.directives, " ")], " ")
                }),
                InputObjectTypeDefinition: c(function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.fields;
                    return l(["input", t, l(f, " "), p(n)], " ")
                }),
                DirectiveDefinition: c(function(e) {
                    var t = e.name,
                        f = e.arguments,
                        n = e.repeatable,
                        a = e.locations;
                    return "directive @" + t + (m(f) ? h("(\n", b(l(f, "\n")), "\n)") : h("(", l(f, ", "), ")")) + (n ? " repeatable" : "") + " on " + l(a, " | ")
                }),
                SchemaExtension: function(e) {
                    var t = e.directives,
                        f = e.operationTypes;
                    return l(["extend schema", l(t, " "), p(f)], " ")
                },
                ScalarTypeExtension: function(e) {
                    return l(["extend scalar", e.name, l(e.directives, " ")], " ")
                },
                ObjectTypeExtension: function(e) {
                    var t = e.name,
                        f = e.interfaces,
                        n = e.directives,
                        a = e.fields;
                    return l(["extend type", t, h("implements ", l(f, " & ")), l(n, " "), p(a)], " ")
                },
                InterfaceTypeExtension: function(e) {
                    var t = e.name,
                        f = e.interfaces,
                        n = e.directives,
                        a = e.fields;
                    return l(["extend interface", t, h("implements ", l(f, " & ")), l(n, " "), p(a)], " ")
                },
                UnionTypeExtension: function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.types;
                    return l(["extend union", t, l(f, " "), n && 0 !== n.length ? "= " + l(n, " | ") : ""], " ")
                },
                EnumTypeExtension: function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.values;
                    return l(["extend enum", t, l(f, " "), p(n)], " ")
                },
                InputObjectTypeExtension: function(e) {
                    var t = e.name,
                        f = e.directives,
                        n = e.fields;
                    return l(["extend input", t, l(f, " "), p(n)], " ")
                }
            };

            function c(e) {
                return function(t) {
                    return l([t.description, e(t)], "\n")
                }
            }

            function l(e) {
                var t, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return null !== (t = null == e ? void 0 : e.filter(function(e) {
                    return e
                }).join(f)) && void 0 !== t ? t : ""
            }

            function p(e) {
                return h("{\n", b(l(e, "\n")), "\n}")
            }

            function h(e, t) {
                var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return null != t && "" !== t ? e + t + f : ""
            }

            function b(e) {
                return h("  ", e.replace(/\n/g, "\n  "))
            }

            function y(e) {
                return -1 !== e.indexOf("\n")
            }

            function m(e) {
                return null != e && e.some(y)
            }
        },
        23445: function(e) {
            "use strict";
            e.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
        }
    }
]);