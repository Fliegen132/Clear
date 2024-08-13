var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i206 = root || request.c( 'UnityEngine.JointSpring' )
  var i207 = data
  i206.spring = i207[0]
  i206.damper = i207[1]
  i206.targetPosition = i207[2]
  return i206
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i208 = root || request.c( 'UnityEngine.JointMotor' )
  var i209 = data
  i208.m_TargetVelocity = i209[0]
  i208.m_Force = i209[1]
  i208.m_FreeSpin = i209[2]
  return i208
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i210 = root || request.c( 'UnityEngine.JointLimits' )
  var i211 = data
  i210.m_Min = i211[0]
  i210.m_Max = i211[1]
  i210.m_Bounciness = i211[2]
  i210.m_BounceMinVelocity = i211[3]
  i210.m_ContactDistance = i211[4]
  i210.minBounce = i211[5]
  i210.maxBounce = i211[6]
  return i210
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.JointDrive' )
  var i213 = data
  i212.m_PositionSpring = i213[0]
  i212.m_PositionDamper = i213[1]
  i212.m_MaximumForce = i213[2]
  return i212
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i215 = data
  i214.m_Spring = i215[0]
  i214.m_Damper = i215[1]
  return i214
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i217 = data
  i216.m_Limit = i217[0]
  i216.m_Bounciness = i217[1]
  i216.m_ContactDistance = i217[2]
  return i216
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i219 = data
  i218.m_ExtremumSlip = i219[0]
  i218.m_ExtremumValue = i219[1]
  i218.m_AsymptoteSlip = i219[2]
  i218.m_AsymptoteValue = i219[3]
  i218.m_Stiffness = i219[4]
  return i218
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i221 = data
  i220.m_LowerAngle = i221[0]
  i220.m_UpperAngle = i221[1]
  return i220
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i223 = data
  i222.m_MotorSpeed = i223[0]
  i222.m_MaximumMotorTorque = i223[1]
  return i222
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i225 = data
  i224.m_DampingRatio = i225[0]
  i224.m_Frequency = i225[1]
  i224.m_Angle = i225[2]
  return i224
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i226 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i227 = data
  i226.m_LowerTranslation = i227[0]
  i226.m_UpperTranslation = i227[1]
  return i226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i228 = root || new pc.UnityMaterial()
  var i229 = data
  i228.name = i229[0]
  request.r(i229[1], i229[2], 0, i228, 'shader')
  i228.renderQueue = i229[3]
  i228.enableInstancing = !!i229[4]
  var i231 = i229[5]
  var i230 = []
  for(var i = 0; i < i231.length; i += 1) {
    i230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i231[i + 0]) );
  }
  i228.floatParameters = i230
  var i233 = i229[6]
  var i232 = []
  for(var i = 0; i < i233.length; i += 1) {
    i232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i233[i + 0]) );
  }
  i228.colorParameters = i232
  var i235 = i229[7]
  var i234 = []
  for(var i = 0; i < i235.length; i += 1) {
    i234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i235[i + 0]) );
  }
  i228.vectorParameters = i234
  var i237 = i229[8]
  var i236 = []
  for(var i = 0; i < i237.length; i += 1) {
    i236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i237[i + 0]) );
  }
  i228.textureParameters = i236
  var i239 = i229[9]
  var i238 = []
  for(var i = 0; i < i239.length; i += 1) {
    i238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i239[i + 0]) );
  }
  i228.materialFlags = i238
  return i228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i243 = data
  i242.name = i243[0]
  i242.value = i243[1]
  return i242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i247 = data
  i246.name = i247[0]
  i246.value = new pc.Color(i247[1], i247[2], i247[3], i247[4])
  return i246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i251 = data
  i250.name = i251[0]
  i250.value = new pc.Vec4( i251[1], i251[2], i251[3], i251[4] )
  return i250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i255 = data
  i254.name = i255[0]
  request.r(i255[1], i255[2], 0, i254, 'value')
  return i254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i259 = data
  i258.name = i259[0]
  i258.enabled = !!i259[1]
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i261 = data
  i260.name = i261[0]
  i260.width = i261[1]
  i260.height = i261[2]
  i260.mipmapCount = i261[3]
  i260.anisoLevel = i261[4]
  i260.filterMode = i261[5]
  i260.hdr = !!i261[6]
  i260.format = i261[7]
  i260.wrapMode = i261[8]
  i260.alphaIsTransparency = !!i261[9]
  i260.alphaSource = i261[10]
  i260.graphicsFormat = i261[11]
  i260.sRGBTexture = !!i261[12]
  i260.desiredColorSpace = i261[13]
  return i260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i263 = data
  i262.name = i263[0]
  i262.atlasId = i263[1]
  i262.mipmapCount = i263[2]
  i262.hdr = !!i263[3]
  i262.size = i263[4]
  i262.anisoLevel = i263[5]
  i262.filterMode = i263[6]
  i262.wrapMode = i263[7]
  var i265 = i263[8]
  var i264 = []
  for(var i = 0; i < i265.length; i += 4) {
    i264.push( UnityEngine.Rect.MinMaxRect(i265[i + 0], i265[i + 1], i265[i + 2], i265[i + 3]) );
  }
  i262.rects = i264
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i269 = data
  i268.name = i269[0]
  i268.index = i269[1]
  i268.startup = !!i269[2]
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i271 = data
  i270.position = new pc.Vec3( i271[0], i271[1], i271[2] )
  i270.scale = new pc.Vec3( i271[3], i271[4], i271[5] )
  i270.rotation = new pc.Quat(i271[6], i271[7], i271[8], i271[9])
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i273 = data
  i272.enabled = !!i273[0]
  i272.aspect = i273[1]
  i272.orthographic = !!i273[2]
  i272.orthographicSize = i273[3]
  i272.backgroundColor = new pc.Color(i273[4], i273[5], i273[6], i273[7])
  i272.nearClipPlane = i273[8]
  i272.farClipPlane = i273[9]
  i272.fieldOfView = i273[10]
  i272.depth = i273[11]
  i272.clearFlags = i273[12]
  i272.cullingMask = i273[13]
  i272.rect = i273[14]
  request.r(i273[15], i273[16], 0, i272, 'targetTexture')
  i272.usePhysicalProperties = !!i273[17]
  i272.focalLength = i273[18]
  i272.sensorSize = new pc.Vec2( i273[19], i273[20] )
  i272.lensShift = new pc.Vec2( i273[21], i273[22] )
  i272.gateFit = i273[23]
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i275 = data
  i274.name = i275[0]
  i274.tagId = i275[1]
  i274.enabled = !!i275[2]
  i274.isStatic = !!i275[3]
  i274.layer = i275[4]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i277 = data
  i276.enabled = !!i277[0]
  i276.type = i277[1]
  i276.color = new pc.Color(i277[2], i277[3], i277[4], i277[5])
  i276.cullingMask = i277[6]
  i276.intensity = i277[7]
  i276.range = i277[8]
  i276.spotAngle = i277[9]
  i276.shadows = i277[10]
  i276.shadowNormalBias = i277[11]
  i276.shadowBias = i277[12]
  i276.shadowStrength = i277[13]
  i276.shadowResolution = i277[14]
  i276.lightmapBakeType = i277[15]
  i276.renderMode = i277[16]
  request.r(i277[17], i277[18], 0, i276, 'cookie')
  i276.cookieSize = i277[19]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i279 = data
  i278.ambientIntensity = i279[0]
  i278.reflectionIntensity = i279[1]
  i278.ambientMode = i279[2]
  i278.ambientLight = new pc.Color(i279[3], i279[4], i279[5], i279[6])
  i278.ambientSkyColor = new pc.Color(i279[7], i279[8], i279[9], i279[10])
  i278.ambientGroundColor = new pc.Color(i279[11], i279[12], i279[13], i279[14])
  i278.ambientEquatorColor = new pc.Color(i279[15], i279[16], i279[17], i279[18])
  i278.fogColor = new pc.Color(i279[19], i279[20], i279[21], i279[22])
  i278.fogEndDistance = i279[23]
  i278.fogStartDistance = i279[24]
  i278.fogDensity = i279[25]
  i278.fog = !!i279[26]
  request.r(i279[27], i279[28], 0, i278, 'skybox')
  i278.fogMode = i279[29]
  var i281 = i279[30]
  var i280 = []
  for(var i = 0; i < i281.length; i += 1) {
    i280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i281[i + 0]) );
  }
  i278.lightmaps = i280
  i278.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i279[31], i278.lightProbes)
  i278.lightmapsMode = i279[32]
  i278.mixedBakeMode = i279[33]
  i278.environmentLightingMode = i279[34]
  i278.ambientProbe = new pc.SphericalHarmonicsL2(i279[35])
  i278.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i279[36])
  i278.useReferenceAmbientProbe = !!i279[37]
  request.r(i279[38], i279[39], 0, i278, 'customReflection')
  request.r(i279[40], i279[41], 0, i278, 'defaultReflection')
  i278.defaultReflectionMode = i279[42]
  i278.defaultReflectionResolution = i279[43]
  i278.sunLightObjectId = i279[44]
  i278.pixelLightCount = i279[45]
  i278.defaultReflectionHDR = !!i279[46]
  i278.hasLightDataAsset = !!i279[47]
  i278.hasManualGenerate = !!i279[48]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i285 = data
  request.r(i285[0], i285[1], 0, i284, 'lightmapColor')
  request.r(i285[2], i285[3], 0, i284, 'lightmapDirection')
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i286 = root || new UnityEngine.LightProbes()
  var i287 = data
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i295 = data
  var i297 = i295[0]
  var i296 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i297.length; i += 1) {
    i296.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i297[i + 0]));
  }
  i294.ShaderCompilationErrors = i296
  i294.name = i295[1]
  i294.guid = i295[2]
  var i299 = i295[3]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( i299[i + 0] );
  }
  i294.shaderDefinedKeywords = i298
  var i301 = i295[4]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i301[i + 0]) );
  }
  i294.passes = i300
  var i303 = i295[5]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i303[i + 0]) );
  }
  i294.usePasses = i302
  var i305 = i295[6]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i305[i + 0]) );
  }
  i294.defaultParameterValues = i304
  request.r(i295[7], i295[8], 0, i294, 'unityFallbackShader')
  i294.readDepth = !!i295[9]
  i294.isCreatedByShaderGraph = !!i295[10]
  i294.usedBatchUniforms = i295[11]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i309 = data
  i308.shaderName = i309[0]
  i308.errorMessage = i309[1]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i314 = root || new pc.UnityShaderPass()
  var i315 = data
  i314.id = i315[0]
  i314.subShaderIndex = i315[1]
  i314.name = i315[2]
  i314.passType = i315[3]
  i314.grabPassTextureName = i315[4]
  i314.usePass = !!i315[5]
  i314.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[6], i314.zTest)
  i314.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[7], i314.zWrite)
  i314.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[8], i314.culling)
  i314.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i315[9], i314.blending)
  i314.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i315[10], i314.alphaBlending)
  i314.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[11], i314.colorWriteMask)
  i314.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[12], i314.offsetUnits)
  i314.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[13], i314.offsetFactor)
  i314.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[14], i314.stencilRef)
  i314.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[15], i314.stencilReadMask)
  i314.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i315[16], i314.stencilWriteMask)
  i314.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i315[17], i314.stencilOp)
  i314.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i315[18], i314.stencilOpFront)
  i314.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i315[19], i314.stencilOpBack)
  var i317 = i315[20]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i317[i + 0]) );
  }
  i314.tags = i316
  var i319 = i315[21]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( i319[i + 0] );
  }
  i314.passDefinedKeywords = i318
  var i321 = i315[22]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i321[i + 0]) );
  }
  i314.passDefinedKeywordGroups = i320
  var i323 = i315[23]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i323[i + 0]) );
  }
  i314.variants = i322
  var i325 = i315[24]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i325[i + 0]) );
  }
  i314.excludedVariants = i324
  i314.hasDepthReader = !!i315[25]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i327 = data
  i326.val = i327[0]
  i326.name = i327[1]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i329 = data
  i328.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[0], i328.src)
  i328.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[1], i328.dst)
  i328.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i329[2], i328.op)
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i331 = data
  i330.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i331[0], i330.pass)
  i330.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i331[1], i330.fail)
  i330.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i331[2], i330.zFail)
  i330.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i331[3], i330.comp)
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i335 = data
  i334.name = i335[0]
  i334.value = i335[1]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i339 = data
  var i341 = i339[0]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( i341[i + 0] );
  }
  i338.keywords = i340
  i338.hasDiscard = !!i339[1]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i345 = data
  i344.passId = i345[0]
  i344.subShaderIndex = i345[1]
  var i347 = i345[2]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( i347[i + 0] );
  }
  i344.keywords = i346
  i344.vertexProgram = i345[3]
  i344.fragmentProgram = i345[4]
  i344.compiledForWebGL2 = !!i345[5]
  i344.readDepth = !!i345[6]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'shader')
  i350.pass = i351[2]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i355 = data
  i354.name = i355[0]
  i354.type = i355[1]
  i354.value = new pc.Vec4( i355[2], i355[3], i355[4], i355[5] )
  i354.textureValue = i355[6]
  i354.shaderPropertyFlag = i355[7]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i357 = data
  var i359 = i357[0]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i359[i + 0]) );
  }
  i356.files = i358
  i356.componentToPrefabIds = i357[1]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i363 = data
  i362.path = i363[0]
  request.r(i363[1], i363[2], 0, i362, 'unityObject')
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i365 = data
  var i367 = i365[0]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i367[i + 0]) );
  }
  i364.scriptsExecutionOrder = i366
  var i369 = i365[1]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i369[i + 0]) );
  }
  i364.sortingLayers = i368
  var i371 = i365[2]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i371[i + 0]) );
  }
  i364.cullingLayers = i370
  i364.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i365[3], i364.timeSettings)
  i364.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i365[4], i364.physicsSettings)
  i364.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i365[5], i364.physics2DSettings)
  i364.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i365[6], i364.qualitySettings)
  i364.enableRealtimeShadows = !!i365[7]
  i364.enableAutoInstancing = !!i365[8]
  i364.enableDynamicBatching = !!i365[9]
  i364.lightmapEncodingQuality = i365[10]
  i364.desiredColorSpace = i365[11]
  var i373 = i365[12]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( i373[i + 0] );
  }
  i364.allTags = i372
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i377 = data
  i376.name = i377[0]
  i376.value = i377[1]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i381 = data
  i380.id = i381[0]
  i380.name = i381[1]
  i380.value = i381[2]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i385 = data
  i384.id = i385[0]
  i384.name = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i387 = data
  i386.fixedDeltaTime = i387[0]
  i386.maximumDeltaTime = i387[1]
  i386.timeScale = i387[2]
  i386.maximumParticleTimestep = i387[3]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i389 = data
  i388.gravity = new pc.Vec3( i389[0], i389[1], i389[2] )
  i388.defaultSolverIterations = i389[3]
  i388.bounceThreshold = i389[4]
  i388.autoSyncTransforms = !!i389[5]
  i388.autoSimulation = !!i389[6]
  var i391 = i389[7]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i391[i + 0]) );
  }
  i388.collisionMatrix = i390
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i395 = data
  i394.enabled = !!i395[0]
  i394.layerId = i395[1]
  i394.otherLayerId = i395[2]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'material')
  i396.gravity = new pc.Vec2( i397[2], i397[3] )
  i396.positionIterations = i397[4]
  i396.velocityIterations = i397[5]
  i396.velocityThreshold = i397[6]
  i396.maxLinearCorrection = i397[7]
  i396.maxAngularCorrection = i397[8]
  i396.maxTranslationSpeed = i397[9]
  i396.maxRotationSpeed = i397[10]
  i396.baumgarteScale = i397[11]
  i396.baumgarteTOIScale = i397[12]
  i396.timeToSleep = i397[13]
  i396.linearSleepTolerance = i397[14]
  i396.angularSleepTolerance = i397[15]
  i396.defaultContactOffset = i397[16]
  i396.autoSimulation = !!i397[17]
  i396.queriesHitTriggers = !!i397[18]
  i396.queriesStartInColliders = !!i397[19]
  i396.callbacksOnDisable = !!i397[20]
  i396.reuseCollisionCallbacks = !!i397[21]
  i396.autoSyncTransforms = !!i397[22]
  var i399 = i397[23]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i399[i + 0]) );
  }
  i396.collisionMatrix = i398
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i403 = data
  i402.enabled = !!i403[0]
  i402.layerId = i403[1]
  i402.otherLayerId = i403[2]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i405 = data
  var i407 = i405[0]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i407[i + 0]) );
  }
  i404.qualityLevels = i406
  var i409 = i405[1]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( i409[i + 0] );
  }
  i404.names = i408
  i404.shadows = i405[2]
  i404.anisotropicFiltering = i405[3]
  i404.antiAliasing = i405[4]
  i404.lodBias = i405[5]
  i404.shadowCascades = i405[6]
  i404.shadowDistance = i405[7]
  i404.shadowmaskMode = i405[8]
  i404.shadowProjection = i405[9]
  i404.shadowResolution = i405[10]
  i404.softParticles = !!i405[11]
  i404.softVegetation = !!i405[12]
  i404.activeColorSpace = i405[13]
  i404.desiredColorSpace = i405[14]
  i404.masterTextureLimit = i405[15]
  i404.maxQueuedFrames = i405[16]
  i404.particleRaycastBudget = i405[17]
  i404.pixelLightCount = i405[18]
  i404.realtimeReflectionProbes = !!i405[19]
  i404.shadowCascade2Split = i405[20]
  i404.shadowCascade4Split = new pc.Vec3( i405[21], i405[22], i405[23] )
  i404.streamingMipmapsActive = !!i405[24]
  i404.vSyncCount = i405[25]
  i404.asyncUploadBufferSize = i405[26]
  i404.asyncUploadTimeSlice = i405[27]
  i404.billboardsFaceCameraPosition = !!i405[28]
  i404.shadowNearPlaneOffset = i405[29]
  i404.streamingMipmapsMemoryBudget = i405[30]
  i404.maximumLODLevel = i405[31]
  i404.streamingMipmapsAddAllCameras = !!i405[32]
  i404.streamingMipmapsMaxLevelReduction = i405[33]
  i404.streamingMipmapsRenderersPerFrame = i405[34]
  i404.resolutionScalingFixedDPIFactor = i405[35]
  i404.streamingMipmapsMaxFileIORequests = i405[36]
  i404.currentQualityLevel = i405[37]
  return i404
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"7":[8],"9":[8],"10":[8],"11":[8],"12":[8],"13":[8],"14":[15],"16":[2],"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[18],"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[26],"33":[26],"34":[26],"35":[26],"36":[26],"37":[26],"38":[26],"39":[2],"40":[41],"42":[43],"44":[43],"45":[46],"47":[46],"48":[41,46],"49":[46,50],"51":[46],"52":[50,46],"53":[41],"54":[50,46],"55":[46],"56":[57],"58":[46],"59":[46],"60":[45],"61":[50,46],"62":[46],"63":[45],"64":[46],"65":[46],"66":[46],"67":[46],"68":[46],"69":[46],"70":[46],"71":[46],"72":[46],"73":[50,46],"74":[46],"75":[46],"76":[46],"77":[46],"78":[50,46],"79":[46],"80":[81],"82":[81],"83":[81],"84":[81],"85":[2],"86":[2],"87":[57],"88":[57]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.29f1";

Deserializers.productName = "Test";

Deserializers.lunaInitializationTime = "08/12/2024 05:39:14";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.0.0";

Deserializers.lunaSHA = "7a07380087f42b7566d2ec5bf0b640971e67dba1";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "23820";

Deserializers.projectId = "c5c0bdfde0a1bd346b2ee7f0eab74839";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Test";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "f14f5e45-dfe5-46f3-a37e-4dad5c848e9a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

