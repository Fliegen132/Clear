using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class PlayerView : MonoBehaviour
{
    [SerializeField] private DynamicJoystick joystick;
    [SerializeField] private Animator animator;

    public DynamicJoystick GetJoystick() => joystick;
    public Animator GetAnimator() => animator;

}
