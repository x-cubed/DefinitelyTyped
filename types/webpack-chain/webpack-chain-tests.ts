import * as Config from 'webpack-chain';
import * as webpack from 'webpack';

const config = new Config();

config
	.amd({ foo: true })
	.bail(true)
	.cache(false)
	.cache({})
	.devtool('hidden-source-map')
	.devtool(false)
	.context('')
	.externals('foo')
	.externals(/node_modules/)
	.externals({ test: false, foo: 'bar' })
	.externals(['foo', 'bar'])
	.externals((context, request, cb) => cb(null, true))
	.loader({})
	.profile(false)
	.recordsPath('')
	.recordsInputPath('')
	.recordsOutputPath('')
	.stats({
		assets: false,
		publicPath: true,
		modules: false
	})
	.target('web')
	.watch(true)
	.watchOptions({})

	.entry('main')
		.add('index.js')
		.delete('index.js')
		.clear()
		.end()

	.entryPoints
		.delete('main')
		.end()

	.plugin('foo')
		.use(webpack.DefinePlugin, [])
		.end()

	.plugins
		.delete('foo')
		.end()

	.devServer
		.clientLogLevel('error')
		.compress(false)
		.contentBase('/')
		.contentBase(['foo', 'bar'])
		.filename('hello')
		.headers({
			'Content-Type': 'text/css',
		})
		.historyApiFallback(true)
		.host('localhost')
		.hot(true)
		.hotOnly(true)
		.https(true)
		.inline(true)
		.lazy(true)
		.noInfo(true)
		.overlay(true)
		.overlay({
			warnings: true,
			errors: true,
		})
		.port(8080)
		.proxy({})
		.quiet(false)
		.setup(app => {})
		.stats({
			reasons: true,
			errors: true,
			warnings: false,
		})
		.watchContentBase(true)
		.end()

	.module
		.noParse(/.min.js$/)
		.rule('compile')
			.test(/.js$/)
			.include
				.add(/.js$/)
				.end()
			.exclude
				.add(/node_modules/)
				.end()
			.parser({
				opt: 'foo',
			})
			.enforce('pre')
			.use('babel')
				.loader('babel-loader')
				.options({})
				.end()
			.uses
				.delete('babel')
				.end()
			.pre()
			.post()
			.end()
		.rules
			.delete('compile')
			.end()
		.end()

	.node
		.set('__dirname', true)
		.delete('__dirname')
		.clear()
		.end()

	.output
		.chunkFilename('')
		.crossOriginLoading(true)
		.filename('main.js')
		.library('var')
		.libraryTarget('var')
		.devtoolFallbackModuleFilenameTemplate('')
		.devtoolLineToLine('')
		.devtoolModuleFilenameTemplate('')
		.hashFunction('md5')
		.hashDigest('md5')
		.hashDigestLength(15)
		.hashSalt('')
		.hotUpdateChunkFilename('update')
		.hotUpdateFunction(() => {})
		.hotUpdateMainFilename('main')
		.jsonpFunction('callback')
		.path('/')
		.pathinfo(true)
		.publicPath('/')
		.sourceMapFilename('index.js.map')
		.sourcePrefix('~')
		.strictModuleExceptionHandling(true)
		.umdNamedDefine(true)
		.end()

	.performance
		.hints(true)
		.hints('warning')
		.maxEntrypointSize(20000)
		.maxAssetSize(20000)
		.assetFilter(filename => true)
		.end()

	.resolve
		.alias
			.set('foo', 'bar')
			.end()
		.aliasFields
			.add('foo')
			.end()
		.descriptionFiles
			.add('foo')
			.end()
		.extensions
			.add('.js')
			.end()
		.mainFields
			.add('browser')
			.end()
		.mainFiles
			.add('index.js')
			.end()
		.modules
			.add('index.js')
			.end()
		.enforceExtension(true)
		.enforceModuleExtension(true)
		.unsafeCache(false)
		.unsafeCache(/foo/)
		.symlinks(true)
		.cachePredicate(({ path, request }) => true)
		.plugin('foo')
			.use(webpack.DefinePlugin, [])
			.end()
		.plugins
			.delete('foo')
			.end()
		.end()

	.resolveLoader
		.extensions
			.add('.js')
			.end()
		.modules
			.add('index.js')
			.end()
		.moduleExtensions
			.add('.js')
			.end()
		.packageMains
			.add('index.js')
			.end()
		.end()

	.merge({})
	.toConfig();
