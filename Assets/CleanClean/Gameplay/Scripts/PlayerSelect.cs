using UnityEngine;
using UnityEngine.UI;

public class PlayerSelect : MonoBehaviour
{
    private void Awake()
    {
        StartInit();
        boyButton.onClick.AddListener(() => 
        {
            SelectBoy();
            Init();
        });

        girlButton.onClick.AddListener(() =>
        {
            SelectGirl();
            Init();
        });
    }

    private void StartInit()
    { 
        canvas.gameObject.SetActive(true);
        boy.gameObject.SetActive(false);
        girl.gameObject.SetActive(false);
    }

    private void SelectBoy() => _currentPlayer = boy;

    private void SelectGirl() => _currentPlayer = girl;

    private void Init()
    { 
        canvas.SetActive(false);
        stateController.SetPlayerView(_currentPlayer);
        CameraFollow.SetTarget(_currentPlayer.transform);
    }

    [SerializeField] private GameObject canvas;
    [SerializeField] private Button boyButton;
    [SerializeField] private Button girlButton;
    [SerializeField] private PlayerView boy;
    [SerializeField] private PlayerView girl;
    [Space(30)]
    [SerializeField] private StateController stateController;

    private PlayerView _currentPlayer;

}
