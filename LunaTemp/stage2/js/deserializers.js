var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointSpring' )
  var i619 = data
  i618.spring = i619[0]
  i618.damper = i619[1]
  i618.targetPosition = i619[2]
  return i618
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointMotor' )
  var i621 = data
  i620.m_TargetVelocity = i621[0]
  i620.m_Force = i621[1]
  i620.m_FreeSpin = i621[2]
  return i620
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointLimits' )
  var i623 = data
  i622.m_Min = i623[0]
  i622.m_Max = i623[1]
  i622.m_Bounciness = i623[2]
  i622.m_BounceMinVelocity = i623[3]
  i622.m_ContactDistance = i623[4]
  i622.minBounce = i623[5]
  i622.maxBounce = i623[6]
  return i622
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointDrive' )
  var i625 = data
  i624.m_PositionSpring = i625[0]
  i624.m_PositionDamper = i625[1]
  i624.m_MaximumForce = i625[2]
  return i624
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i627 = data
  i626.m_Spring = i627[0]
  i626.m_Damper = i627[1]
  return i626
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i629 = data
  i628.m_Limit = i629[0]
  i628.m_Bounciness = i629[1]
  i628.m_ContactDistance = i629[2]
  return i628
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i631 = data
  i630.m_ExtremumSlip = i631[0]
  i630.m_ExtremumValue = i631[1]
  i630.m_AsymptoteSlip = i631[2]
  i630.m_AsymptoteValue = i631[3]
  i630.m_Stiffness = i631[4]
  return i630
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i633 = data
  i632.m_LowerAngle = i633[0]
  i632.m_UpperAngle = i633[1]
  return i632
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i635 = data
  i634.m_MotorSpeed = i635[0]
  i634.m_MaximumMotorTorque = i635[1]
  return i634
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i637 = data
  i636.m_DampingRatio = i637[0]
  i636.m_Frequency = i637[1]
  i636.m_Angle = i637[2]
  return i636
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i639 = data
  i638.m_LowerTranslation = i639[0]
  i638.m_UpperTranslation = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i640 = root || new pc.UnityMaterial()
  var i641 = data
  i640.name = i641[0]
  request.r(i641[1], i641[2], 0, i640, 'shader')
  i640.renderQueue = i641[3]
  i640.enableInstancing = !!i641[4]
  var i643 = i641[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i643[i + 0]) );
  }
  i640.floatParameters = i642
  var i645 = i641[6]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i645[i + 0]) );
  }
  i640.colorParameters = i644
  var i647 = i641[7]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i647[i + 0]) );
  }
  i640.vectorParameters = i646
  var i649 = i641[8]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i649[i + 0]) );
  }
  i640.textureParameters = i648
  var i651 = i641[9]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i651[i + 0]) );
  }
  i640.materialFlags = i650
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i655 = data
  i654.name = i655[0]
  i654.value = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i659 = data
  i658.name = i659[0]
  i658.value = new pc.Color(i659[1], i659[2], i659[3], i659[4])
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i663 = data
  i662.name = i663[0]
  i662.value = new pc.Vec4( i663[1], i663[2], i663[3], i663[4] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i667 = data
  i666.name = i667[0]
  request.r(i667[1], i667[2], 0, i666, 'value')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i671 = data
  i670.name = i671[0]
  i670.enabled = !!i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i673 = data
  i672.name = i673[0]
  i672.width = i673[1]
  i672.height = i673[2]
  i672.mipmapCount = i673[3]
  i672.anisoLevel = i673[4]
  i672.filterMode = i673[5]
  i672.hdr = !!i673[6]
  i672.format = i673[7]
  i672.wrapMode = i673[8]
  i672.alphaIsTransparency = !!i673[9]
  i672.alphaSource = i673[10]
  i672.graphicsFormat = i673[11]
  i672.sRGBTexture = !!i673[12]
  i672.desiredColorSpace = i673[13]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i675 = data
  i674.name = i675[0]
  i674.atlasId = i675[1]
  i674.mipmapCount = i675[2]
  i674.hdr = !!i675[3]
  i674.size = i675[4]
  i674.anisoLevel = i675[5]
  i674.filterMode = i675[6]
  i674.wrapMode = i675[7]
  var i677 = i675[8]
  var i676 = []
  for(var i = 0; i < i677.length; i += 4) {
    i676.push( UnityEngine.Rect.MinMaxRect(i677[i + 0], i677[i + 1], i677[i + 2], i677[i + 3]) );
  }
  i674.rects = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i681 = data
  i680.name = i681[0]
  i680.index = i681[1]
  i680.startup = !!i681[2]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i683 = data
  i682.position = new pc.Vec3( i683[0], i683[1], i683[2] )
  i682.scale = new pc.Vec3( i683[3], i683[4], i683[5] )
  i682.rotation = new pc.Quat(i683[6], i683[7], i683[8], i683[9])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i685 = data
  i684.enabled = !!i685[0]
  i684.aspect = i685[1]
  i684.orthographic = !!i685[2]
  i684.orthographicSize = i685[3]
  i684.backgroundColor = new pc.Color(i685[4], i685[5], i685[6], i685[7])
  i684.nearClipPlane = i685[8]
  i684.farClipPlane = i685[9]
  i684.fieldOfView = i685[10]
  i684.depth = i685[11]
  i684.clearFlags = i685[12]
  i684.cullingMask = i685[13]
  i684.rect = i685[14]
  request.r(i685[15], i685[16], 0, i684, 'targetTexture')
  i684.usePhysicalProperties = !!i685[17]
  i684.focalLength = i685[18]
  i684.sensorSize = new pc.Vec2( i685[19], i685[20] )
  i684.lensShift = new pc.Vec2( i685[21], i685[22] )
  i684.gateFit = i685[23]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i687 = data
  i686.name = i687[0]
  i686.tagId = i687[1]
  i686.enabled = !!i687[2]
  i686.isStatic = !!i687[3]
  i686.layer = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i689 = data
  i688.enabled = !!i689[0]
  i688.type = i689[1]
  i688.color = new pc.Color(i689[2], i689[3], i689[4], i689[5])
  i688.cullingMask = i689[6]
  i688.intensity = i689[7]
  i688.range = i689[8]
  i688.spotAngle = i689[9]
  i688.shadows = i689[10]
  i688.shadowNormalBias = i689[11]
  i688.shadowBias = i689[12]
  i688.shadowStrength = i689[13]
  i688.shadowResolution = i689[14]
  i688.lightmapBakeType = i689[15]
  i688.renderMode = i689[16]
  request.r(i689[17], i689[18], 0, i688, 'cookie')
  i688.cookieSize = i689[19]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i691 = data
  i690.ambientIntensity = i691[0]
  i690.reflectionIntensity = i691[1]
  i690.ambientMode = i691[2]
  i690.ambientLight = new pc.Color(i691[3], i691[4], i691[5], i691[6])
  i690.ambientSkyColor = new pc.Color(i691[7], i691[8], i691[9], i691[10])
  i690.ambientGroundColor = new pc.Color(i691[11], i691[12], i691[13], i691[14])
  i690.ambientEquatorColor = new pc.Color(i691[15], i691[16], i691[17], i691[18])
  i690.fogColor = new pc.Color(i691[19], i691[20], i691[21], i691[22])
  i690.fogEndDistance = i691[23]
  i690.fogStartDistance = i691[24]
  i690.fogDensity = i691[25]
  i690.fog = !!i691[26]
  request.r(i691[27], i691[28], 0, i690, 'skybox')
  i690.fogMode = i691[29]
  var i693 = i691[30]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i693[i + 0]) );
  }
  i690.lightmaps = i692
  i690.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i691[31], i690.lightProbes)
  i690.lightmapsMode = i691[32]
  i690.mixedBakeMode = i691[33]
  i690.environmentLightingMode = i691[34]
  i690.ambientProbe = new pc.SphericalHarmonicsL2(i691[35])
  i690.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i691[36])
  i690.useReferenceAmbientProbe = !!i691[37]
  request.r(i691[38], i691[39], 0, i690, 'customReflection')
  request.r(i691[40], i691[41], 0, i690, 'defaultReflection')
  i690.defaultReflectionMode = i691[42]
  i690.defaultReflectionResolution = i691[43]
  i690.sunLightObjectId = i691[44]
  i690.pixelLightCount = i691[45]
  i690.defaultReflectionHDR = !!i691[46]
  i690.hasLightDataAsset = !!i691[47]
  i690.hasManualGenerate = !!i691[48]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'lightmapColor')
  request.r(i697[2], i697[3], 0, i696, 'lightmapDirection')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i698 = root || new UnityEngine.LightProbes()
  var i699 = data
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i709[i + 0]));
  }
  i706.ShaderCompilationErrors = i708
  i706.name = i707[1]
  i706.guid = i707[2]
  var i711 = i707[3]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i706.shaderDefinedKeywords = i710
  var i713 = i707[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i713[i + 0]) );
  }
  i706.passes = i712
  var i715 = i707[5]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i715[i + 0]) );
  }
  i706.usePasses = i714
  var i717 = i707[6]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i717[i + 0]) );
  }
  i706.defaultParameterValues = i716
  request.r(i707[7], i707[8], 0, i706, 'unityFallbackShader')
  i706.readDepth = !!i707[9]
  i706.isCreatedByShaderGraph = !!i707[10]
  i706.usedBatchUniforms = i707[11]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i721 = data
  i720.shaderName = i721[0]
  i720.errorMessage = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i726 = root || new pc.UnityShaderPass()
  var i727 = data
  i726.id = i727[0]
  i726.subShaderIndex = i727[1]
  i726.name = i727[2]
  i726.passType = i727[3]
  i726.grabPassTextureName = i727[4]
  i726.usePass = !!i727[5]
  i726.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[6], i726.zTest)
  i726.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[7], i726.zWrite)
  i726.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[8], i726.culling)
  i726.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i727[9], i726.blending)
  i726.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i727[10], i726.alphaBlending)
  i726.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[11], i726.colorWriteMask)
  i726.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[12], i726.offsetUnits)
  i726.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[13], i726.offsetFactor)
  i726.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[14], i726.stencilRef)
  i726.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[15], i726.stencilReadMask)
  i726.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[16], i726.stencilWriteMask)
  i726.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[17], i726.stencilOp)
  i726.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[18], i726.stencilOpFront)
  i726.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i727[19], i726.stencilOpBack)
  var i729 = i727[20]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i729[i + 0]) );
  }
  i726.tags = i728
  var i731 = i727[21]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.passDefinedKeywords = i730
  var i733 = i727[22]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i733[i + 0]) );
  }
  i726.passDefinedKeywordGroups = i732
  var i735 = i727[23]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i735[i + 0]) );
  }
  i726.variants = i734
  var i737 = i727[24]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i737[i + 0]) );
  }
  i726.excludedVariants = i736
  i726.hasDepthReader = !!i727[25]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i739 = data
  i738.val = i739[0]
  i738.name = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i741 = data
  i740.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[0], i740.src)
  i740.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[1], i740.dst)
  i740.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i741[2], i740.op)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i743 = data
  i742.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[0], i742.pass)
  i742.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[1], i742.fail)
  i742.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[2], i742.zFail)
  i742.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[3], i742.comp)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i747 = data
  i746.name = i747[0]
  i746.value = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.keywords = i752
  i750.hasDiscard = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i757 = data
  i756.passId = i757[0]
  i756.subShaderIndex = i757[1]
  var i759 = i757[2]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i756.keywords = i758
  i756.vertexProgram = i757[3]
  i756.fragmentProgram = i757[4]
  i756.compiledForWebGL2 = !!i757[5]
  i756.readDepth = !!i757[6]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'shader')
  i762.pass = i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i767 = data
  i766.name = i767[0]
  i766.type = i767[1]
  i766.value = new pc.Vec4( i767[2], i767[3], i767[4], i767[5] )
  i766.textureValue = i767[6]
  i766.shaderPropertyFlag = i767[7]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i771[i + 0]) );
  }
  i768.files = i770
  i768.componentToPrefabIds = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i775 = data
  i774.path = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'unityObject')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i779[i + 0]) );
  }
  i776.scriptsExecutionOrder = i778
  var i781 = i777[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i781[i + 0]) );
  }
  i776.sortingLayers = i780
  var i783 = i777[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i783[i + 0]) );
  }
  i776.cullingLayers = i782
  i776.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i777[3], i776.timeSettings)
  i776.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i777[4], i776.physicsSettings)
  i776.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i777[5], i776.physics2DSettings)
  i776.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i777[6], i776.qualitySettings)
  i776.enableRealtimeShadows = !!i777[7]
  i776.enableAutoInstancing = !!i777[8]
  i776.enableDynamicBatching = !!i777[9]
  i776.lightmapEncodingQuality = i777[10]
  i776.desiredColorSpace = i777[11]
  var i785 = i777[12]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i776.allTags = i784
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i789 = data
  i788.name = i789[0]
  i788.value = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i793 = data
  i792.id = i793[0]
  i792.name = i793[1]
  i792.value = i793[2]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i797 = data
  i796.id = i797[0]
  i796.name = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i799 = data
  i798.fixedDeltaTime = i799[0]
  i798.maximumDeltaTime = i799[1]
  i798.timeScale = i799[2]
  i798.maximumParticleTimestep = i799[3]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i801 = data
  i800.gravity = new pc.Vec3( i801[0], i801[1], i801[2] )
  i800.defaultSolverIterations = i801[3]
  i800.bounceThreshold = i801[4]
  i800.autoSyncTransforms = !!i801[5]
  i800.autoSimulation = !!i801[6]
  var i803 = i801[7]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i803[i + 0]) );
  }
  i800.collisionMatrix = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.layerId = i807[1]
  i806.otherLayerId = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'material')
  i808.gravity = new pc.Vec2( i809[2], i809[3] )
  i808.positionIterations = i809[4]
  i808.velocityIterations = i809[5]
  i808.velocityThreshold = i809[6]
  i808.maxLinearCorrection = i809[7]
  i808.maxAngularCorrection = i809[8]
  i808.maxTranslationSpeed = i809[9]
  i808.maxRotationSpeed = i809[10]
  i808.baumgarteScale = i809[11]
  i808.baumgarteTOIScale = i809[12]
  i808.timeToSleep = i809[13]
  i808.linearSleepTolerance = i809[14]
  i808.angularSleepTolerance = i809[15]
  i808.defaultContactOffset = i809[16]
  i808.autoSimulation = !!i809[17]
  i808.queriesHitTriggers = !!i809[18]
  i808.queriesStartInColliders = !!i809[19]
  i808.callbacksOnDisable = !!i809[20]
  i808.reuseCollisionCallbacks = !!i809[21]
  i808.autoSyncTransforms = !!i809[22]
  var i811 = i809[23]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i811[i + 0]) );
  }
  i808.collisionMatrix = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i815 = data
  i814.enabled = !!i815[0]
  i814.layerId = i815[1]
  i814.otherLayerId = i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i819[i + 0]) );
  }
  i816.qualityLevels = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i816.names = i820
  i816.shadows = i817[2]
  i816.anisotropicFiltering = i817[3]
  i816.antiAliasing = i817[4]
  i816.lodBias = i817[5]
  i816.shadowCascades = i817[6]
  i816.shadowDistance = i817[7]
  i816.shadowmaskMode = i817[8]
  i816.shadowProjection = i817[9]
  i816.shadowResolution = i817[10]
  i816.softParticles = !!i817[11]
  i816.softVegetation = !!i817[12]
  i816.activeColorSpace = i817[13]
  i816.desiredColorSpace = i817[14]
  i816.masterTextureLimit = i817[15]
  i816.maxQueuedFrames = i817[16]
  i816.particleRaycastBudget = i817[17]
  i816.pixelLightCount = i817[18]
  i816.realtimeReflectionProbes = !!i817[19]
  i816.shadowCascade2Split = i817[20]
  i816.shadowCascade4Split = new pc.Vec3( i817[21], i817[22], i817[23] )
  i816.streamingMipmapsActive = !!i817[24]
  i816.vSyncCount = i817[25]
  i816.asyncUploadBufferSize = i817[26]
  i816.asyncUploadTimeSlice = i817[27]
  i816.billboardsFaceCameraPosition = !!i817[28]
  i816.shadowNearPlaneOffset = i817[29]
  i816.streamingMipmapsMemoryBudget = i817[30]
  i816.maximumLODLevel = i817[31]
  i816.streamingMipmapsAddAllCameras = !!i817[32]
  i816.streamingMipmapsMaxLevelReduction = i817[33]
  i816.streamingMipmapsRenderersPerFrame = i817[34]
  i816.resolutionScalingFixedDPIFactor = i817[35]
  i816.streamingMipmapsMaxFileIORequests = i817[36]
  i816.currentQualityLevel = i817[37]
  return i816
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

Deserializers.creativeName = "Test";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1773";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2530";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

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

Deserializers.buildID = "05976bda-852b-44b0-9f54-25cfeb593a5f";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

