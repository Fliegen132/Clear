using UnityEngine;

public class ClearTexture : MonoBehaviour
{
    private void Awake()
    {
        Init();
    }

    private void Init()
    {
        _texture = new Texture2D(TextureSize, TextureSize);
        _texture.filterMode = FilterMode.Bilinear;
        _texture.wrapMode = TextureWrapMode.Clamp;
        material.mainTexture = _texture;
    }

    private void FixedUpdate()
    {
        if (!controller.GetIsMove())
            return;

        if (Physics.Raycast(transform.position, Vector3.down, out var hit, 1000))
        {
            if (hit.collider)
            {
                float x = hit.textureCoord.x * TextureSize;
                float y = hit.textureCoord.y * TextureSize;

                for (int i = 0; i < BrushSize; i++)
                {
                    for (int j = 0; j < BrushSize; j++)
                    {
                        _texture.SetPixel((int)x + i - BrushSize / 2, (int)y + j - BrushSize / 2, new Color(0.3f, 0.2f, 0.5f, 1));
                    }
                }

                _texture.Apply();
            }
        }
    }

    [SerializeField] private Material material;
    [SerializeField] private StateController controller;

    private Texture2D _texture;

    private const int TextureSize = 512;
    private const int BrushSize = 60;
}
