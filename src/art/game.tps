<?xml version="1.0" encoding="UTF-8"?>
<data version="1.0">
    <struct type="Settings">
        <key>fileFormatVersion</key>
        <int>4</int>
        <key>texturePackerVersion</key>
        <string>4.4.0</string>
        <key>fileName</key>
        <string>C:/Workspace/JET/mainline-game-templates-IW-LCK7S/src/art/game.tps</string>
        <key>autoSDSettings</key>
        <array>
            <struct type="AutoSDSettings">
                <key>scale</key>
                <double>1</double>
                <key>extension</key>
                <string>desktop/sprites/</string>
                <key>spriteFilter</key>
                <string></string>
                <key>acceptFractionalValues</key>
                <false/>
                <key>maxTextureSize</key>
                <QSize>
                    <key>width</key>
                    <int>-1</int>
                    <key>height</key>
                    <int>-1</int>
                </QSize>
            </struct>
            <struct type="AutoSDSettings">
                <key>scale</key>
                <double>1</double>
                <key>extension</key>
                <string>tablet/sprites/</string>
                <key>spriteFilter</key>
                <string></string>
                <key>acceptFractionalValues</key>
                <false/>
                <key>maxTextureSize</key>
                <QSize>
                    <key>width</key>
                    <int>-1</int>
                    <key>height</key>
                    <int>-1</int>
                </QSize>
            </struct>
            <struct type="AutoSDSettings">
                <key>scale</key>
                <double>1</double>
                <key>extension</key>
                <string>mobile/sprites/</string>
                <key>spriteFilter</key>
                <string></string>
                <key>acceptFractionalValues</key>
                <false/>
                <key>maxTextureSize</key>
                <QSize>
                    <key>width</key>
                    <int>-1</int>
                    <key>height</key>
                    <int>-1</int>
                </QSize>
            </struct>
        </array>
        <key>allowRotation</key>
        <true/>
        <key>shapeDebug</key>
        <false/>
        <key>dpi</key>
        <uint>72</uint>
        <key>dataFormat</key>
        <string>json</string>
        <key>textureFileName</key>
        <filename></filename>
        <key>flipPVR</key>
        <false/>
        <key>pvrCompressionQuality</key>
        <enum type="SettingsBase::PvrCompressionQuality">PVR_QUALITY_NORMAL</enum>
        <key>atfCompressData</key>
        <false/>
        <key>mipMapMinSize</key>
        <uint>32768</uint>
        <key>etc1CompressionQuality</key>
        <enum type="SettingsBase::Etc1CompressionQuality">ETC1_QUALITY_LOW_PERCEPTUAL</enum>
        <key>etc2CompressionQuality</key>
        <enum type="SettingsBase::Etc2CompressionQuality">ETC2_QUALITY_LOW_PERCEPTUAL</enum>
        <key>dxtCompressionMode</key>
        <enum type="SettingsBase::DxtCompressionMode">DXT_PERCEPTUAL</enum>
        <key>jxrColorFormat</key>
        <enum type="SettingsBase::JpegXrColorMode">JXR_YUV444</enum>
        <key>jxrTrimFlexBits</key>
        <uint>0</uint>
        <key>jxrCompressionLevel</key>
        <uint>0</uint>
        <key>ditherType</key>
        <enum type="SettingsBase::DitherType">NearestNeighbour</enum>
        <key>backgroundColor</key>
        <uint>0</uint>
        <key>libGdx</key>
        <struct type="LibGDX">
            <key>filtering</key>
            <struct type="LibGDXFiltering">
                <key>x</key>
                <enum type="LibGDXFiltering::Filtering">Linear</enum>
                <key>y</key>
                <enum type="LibGDXFiltering::Filtering">Linear</enum>
            </struct>
        </struct>
        <key>shapePadding</key>
        <uint>0</uint>
        <key>jpgQuality</key>
        <uint>80</uint>
        <key>pngOptimizationLevel</key>
        <uint>1</uint>
        <key>webpQualityLevel</key>
        <uint>101</uint>
        <key>textureSubPath</key>
        <string></string>
        <key>atfFormats</key>
        <string></string>
        <key>textureFormat</key>
        <enum type="SettingsBase::TextureFormat">png</enum>
        <key>borderPadding</key>
        <uint>0</uint>
        <key>maxTextureSize</key>
        <QSize>
            <key>width</key>
            <int>2048</int>
            <key>height</key>
            <int>2048</int>
        </QSize>
        <key>fixedTextureSize</key>
        <QSize>
            <key>width</key>
            <int>-1</int>
            <key>height</key>
            <int>-1</int>
        </QSize>
        <key>algorithmSettings</key>
        <struct type="AlgorithmSettings">
            <key>algorithm</key>
            <enum type="AlgorithmSettings::AlgorithmId">MaxRects</enum>
            <key>freeSizeMode</key>
            <enum type="AlgorithmSettings::AlgorithmFreeSizeMode">Best</enum>
            <key>sizeConstraints</key>
            <enum type="AlgorithmSettings::SizeConstraints">AnySize</enum>
            <key>forceSquared</key>
            <false/>
            <key>maxRects</key>
            <struct type="AlgorithmMaxRectsSettings">
                <key>heuristic</key>
                <enum type="AlgorithmMaxRectsSettings::Heuristic">Best</enum>
            </struct>
            <key>basic</key>
            <struct type="AlgorithmBasicSettings">
                <key>sortBy</key>
                <enum type="AlgorithmBasicSettings::SortBy">Best</enum>
                <key>order</key>
                <enum type="AlgorithmBasicSettings::Order">Ascending</enum>
            </struct>
            <key>polygon</key>
            <struct type="AlgorithmPolygonSettings">
                <key>alignToGrid</key>
                <uint>1</uint>
            </struct>
        </struct>
        <key>andEngine</key>
        <struct type="AndEngine">
            <key>minFilter</key>
            <enum type="AndEngine::MinFilter">Linear</enum>
            <key>packageName</key>
            <string>Texture</string>
            <key>wrap</key>
            <struct type="AndEngineWrap">
                <key>s</key>
                <enum type="AndEngineWrap::Wrap">Clamp</enum>
                <key>t</key>
                <enum type="AndEngineWrap::Wrap">Clamp</enum>
            </struct>
            <key>magFilter</key>
            <enum type="AndEngine::MagFilter">MagLinear</enum>
        </struct>
        <key>dataFileNames</key>
        <map type="GFileNameMap">
            <key>data</key>
            <struct type="DataFile">
                <key>name</key>
                <filename>../main/webapp/assetPacks/{v}game.json</filename>
            </struct>
        </map>
        <key>multiPack</key>
        <false/>
        <key>forceIdenticalLayout</key>
        <false/>
        <key>outputFormat</key>
        <enum type="SettingsBase::OutputFormat">RGBA8888</enum>
        <key>alphaHandling</key>
        <enum type="SettingsBase::AlphaHandling">ClearTransparentPixels</enum>
        <key>contentProtection</key>
        <struct type="ContentProtection">
            <key>key</key>
            <string></string>
        </struct>
        <key>autoAliasEnabled</key>
        <true/>
        <key>trimSpriteNames</key>
        <true/>
        <key>prependSmartFolderName</key>
        <false/>
        <key>autodetectAnimations</key>
        <true/>
        <key>globalSpriteSettings</key>
        <struct type="SpriteSettings">
            <key>scale</key>
            <double>1</double>
            <key>scaleMode</key>
            <enum type="ScaleMode">Smooth</enum>
            <key>extrude</key>
            <uint>1</uint>
            <key>trimThreshold</key>
            <uint>1</uint>
            <key>trimMargin</key>
            <uint>1</uint>
            <key>trimMode</key>
            <enum type="SpriteSettings::TrimMode">Trim</enum>
            <key>tracerTolerance</key>
            <int>200</int>
            <key>heuristicMask</key>
            <false/>
            <key>defaultPivotPoint</key>
            <point_f>0.5,0.5</point_f>
            <key>writePivotPoints</key>
            <false/>
        </struct>
        <key>individualSpriteSettings</key>
        <map type="IndividualSpriteSettingsMap">
            <key type="filename">fontColours/fontColourEndOfGameMessageNoWinBodyText.png</key>
            <key type="filename">fontColours/fontColourEndOfGameMessageOKButtonEnabled.png</key>
            <key type="filename">fontColours/fontColourEndOfGameMessageOKButtonOver.png</key>
            <key type="filename">fontColours/fontColourEndOfGameMessageOKButtonPressed.png</key>
            <key type="filename">fontColours/fontColourEndOfGameMessageWinBodyText.png</key>
            <key type="filename">fontColours/fontColourEndOfGameMessageWinValue.png</key>
            <key type="filename">fontColours/fontColourFooterTitle.png</key>
            <key type="filename">fontColours/fontColourFooterValue.png</key>
            <key type="filename">fontColours/fontColourInstantWinMessage.png</key>
            <key type="filename">fontColours/fontColourMainButtonDisabled.png</key>
            <key type="filename">fontColours/fontColourMainButtonEnabled.png</key>
            <key type="filename">fontColours/fontColourMainButtonOver.png</key>
            <key type="filename">fontColours/fontColourMainButtonPressed.png</key>
            <key type="filename">fontColours/fontColourPricePointTitle.png</key>
            <key type="filename">fontColours/fontColourPricePointValue.png</key>
            <key type="filename">fontColours/fontColourTableTitles.png</key>
            <key type="filename">fontColours/fontColourTableValues.png</key>
            <key type="filename">fontColours/fontColourTableValuesWin.png</key>
            <key type="filename">fontColours/fontColourTimeOutButtonEnabled.png</key>
            <key type="filename">fontColours/fontColourTimeOutButtonOver.png</key>
            <key type="filename">fontColours/fontColourTimeOutButtonPressed.png</key>
            <key type="filename">fontColours/fontColourTimeOutMessage.png</key>
            <key type="filename">fontColours/fontColourTutorialBodyText.png</key>
            <key type="filename">fontColours/fontColourTutorialOKButtonEnabled.png</key>
            <key type="filename">fontColours/fontColourTutorialOKButtonOver.png</key>
            <key type="filename">fontColours/fontColourTutorialOKButtonPressed.png</key>
            <key type="filename">fontColours/fontColourTutorialTitle.png</key>
            <key type="filename">fontColours/fontColourWinUpToTitle.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>1,1,2,2</rect>
                <key>scale9Paddings</key>
                <rect>1,1,2,2</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/infoBar.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>200,13,401,25</rect>
                <key>scale9Paddings</key>
                <rect>200,13,401,25</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/landscape_selectionBackground.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>360,203,720,405</rect>
                <key>scale9Paddings</key>
                <rect>360,203,720,405</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/landscape_tableBackground.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>112,91,224,181</rect>
                <key>scale9Paddings</key>
                <rect>112,91,224,181</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/landscape_tableHighlight.png</key>
            <key type="filename">game/landscape_tableHighlightRounded.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>112,9,224,18</rect>
                <key>scale9Paddings</key>
                <rect>112,9,224,18</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/portrait_selectionBackground.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>203,307,405,614</rect>
                <key>scale9Paddings</key>
                <rect>203,307,405,614</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/portrait_tableBackground.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>184,55,368,109</rect>
                <key>scale9Paddings</key>
                <rect>184,55,368,109</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/portrait_tableHighlight.png</key>
            <key type="filename">game/portrait_tableHighlightRounded.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>91,9,181,18</rect>
                <key>scale9Paddings</key>
                <rect>91,9,181,18</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/symbolBackground.png</key>
            <key type="filename">game/symbolCover.png</key>
            <key type="filename">game/symbolInstantWin.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>39,39,77,77</rect>
                <key>scale9Paddings</key>
                <rect>39,39,77,77</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/symbolInstantWinSmall.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>14,14,28,28</rect>
                <key>scale9Paddings</key>
                <rect>14,14,28,28</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
            <key type="filename">game/symbolWinSmall.png</key>
            <struct type="IndividualSpriteSettings">
                <key>pivotPoint</key>
                <point_f>0.5,0.5</point_f>
                <key>scale9Enabled</key>
                <false/>
                <key>scale9Borders</key>
                <rect>9,8,17,16</rect>
                <key>scale9Paddings</key>
                <rect>9,8,17,16</rect>
                <key>scale9FromFile</key>
                <false/>
            </struct>
        </map>
        <key>fileList</key>
        <array>
            <filename>game</filename>
            <filename>fontColours</filename>
        </array>
        <key>ignoreFileList</key>
        <array/>
        <key>replaceList</key>
        <array/>
        <key>ignoredWarnings</key>
        <array/>
        <key>commonDivisorX</key>
        <uint>1</uint>
        <key>commonDivisorY</key>
        <uint>1</uint>
        <key>packNormalMaps</key>
        <false/>
        <key>autodetectNormalMaps</key>
        <true/>
        <key>normalMapFilter</key>
        <string></string>
        <key>normalMapSuffix</key>
        <string></string>
        <key>normalMapSheetFileName</key>
        <filename></filename>
        <key>exporterProperties</key>
        <map type="ExporterProperties"/>
    </struct>
</data>
